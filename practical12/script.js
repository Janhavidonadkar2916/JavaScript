const STORAGE_KEY = 'live-task-board-v1';

const defaultTasks = [
  {
    id: 1,
    title: 'Review project milestones',
    category: 'Work',
    priority: 'High',
    done: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    title: 'Prepare for the next study session',
    category: 'Study',
    priority: 'Medium',
    done: true,
    createdAt: new Date().toISOString()
  }
];

let tasks = loadTasks();

function loadTasks() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return [...defaultTasks];
  }

  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) && parsed.length ? parsed : [...defaultTasks];
  } catch (error) {
    return [...defaultTasks];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function setStatus(message, type = 'success') {
  $('#statusMessage')
    .removeClass('error success')
    .addClass(type)
    .text(message);
}

function updateClock() {
  const now = new Date();
  const formatted = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  $('#liveClock').text(formatted);
}

function getFilteredTasks() {
  const filter = $('#taskFilter').val();

  if (filter === 'open') {
    return tasks.filter((task) => !task.done);
  }

  if (filter === 'done') {
    return tasks.filter((task) => task.done);
  }

  return [...tasks];
}

function updateSummary() {
  const total = tasks.length;
  const open = tasks.filter((task) => !task.done).length;
  const done = tasks.filter((task) => task.done).length;

  $('#summary').html(`
    <span class="summary-chip">Total: ${total}</span>
    <span class="summary-chip">Open: ${open}</span>
    <span class="summary-chip">Done: ${done}</span>
  `);
}

function renderTasks() {
  const filteredTasks = getFilteredTasks();
  const $list = $('#taskList');

  $list.empty();

  if (!filteredTasks.length) {
    $list.append('<li class="empty-state">No tasks match this view.</li>');
    updateSummary();
    return;
  }

  filteredTasks.forEach((task) => {
    const badgeClass = `priority-${task.priority.toLowerCase()}`;
    const $item = $(`
      <li class="task-item ${task.done ? 'done' : ''}">
        <div class="task-main">
          <input class="task-toggle" type="checkbox" ${task.done ? 'checked' : ''} aria-label="Mark ${task.title} complete" />
          <div class="task-body">
            <p class="task-title">${escapeHtml(task.title)}</p>
            <div class="task-meta">
              <span>${escapeHtml(task.category)}</span>
              <span class="task-badge ${badgeClass}">${task.priority}</span>
              <span>${new Date(task.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
        <button type="button" class="delete-task" data-id="${task.id}">Delete</button>
      </li>
    `);

    $list.append($item);
  });

  updateSummary();
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function addTask(title, category, priority) {
  const trimmedTitle = title.trim();

  if (!trimmedTitle) {
    setStatus('Task title is required.', 'error');
    return;
  }

  tasks.unshift({
    id: Date.now(),
    title: trimmedTitle,
    category,
    priority,
    done: false,
    createdAt: new Date().toISOString()
  });

  saveTasks();
  renderTasks();
  setStatus('Task added successfully.', 'success');
}

function clearCompleted() {
  tasks = tasks.filter((task) => !task.done);
  saveTasks();
  renderTasks();
  setStatus('Completed tasks removed.', 'success');
}

function handleRemoteTasks() {
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos?_limit=3',
    method: 'GET',
    dataType: 'json',
    success: function (data) {
      const remoteTasks = data.map((item) => ({
        id: `remote-${item.id}`,
        title: item.title,
        category: 'Remote',
        priority: item.completed ? 'Low' : 'Medium',
        done: item.completed,
        createdAt: new Date().toISOString()
      }));

      const localTaskTitles = new Set(tasks.map((task) => task.title.toLowerCase()));
      const mergedTasks = [...tasks];

      remoteTasks.forEach((task) => {
        if (!localTaskTitles.has(task.title.toLowerCase())) {
          mergedTasks.push(task);
        }
      });

      tasks = mergedTasks;
      saveTasks();
      renderTasks();
      setStatus('Remote tasks loaded and merged.', 'success');
    },
    error: function () {
      setStatus('Unable to load remote tasks right now.', 'error');
    }
  });
}

$(document).ready(function () {
  renderTasks();
  updateClock();
  setInterval(updateClock, 1000);
  setStatus('Board ready. Changes are stored locally.', 'success');

  $('#taskForm').on('submit', function (event) {
    event.preventDefault();
    addTask(
      $('#taskTitle').val(),
      $('#taskCategory').val(),
      $('#taskPriority').val()
    );
    $(this)[0].reset();
    $('#taskPriority').val('Medium');
    $('#taskTitle').focus();
  });

  $('#taskFilter').on('change', renderTasks);

  $('#taskList').on('change', '.task-toggle', function () {
    const taskId = Number($(this).closest('.task-item').find('.delete-task').data('id')) || String($(this).closest('.task-item').find('.delete-task').data('id'));
    const task = tasks.find((item) => String(item.id) === String(taskId));

    if (!task) {
      return;
    }

    task.done = $(this).is(':checked');
    saveTasks();
    renderTasks();
    setStatus(task.done ? 'Task marked complete.' : 'Task reopened.', 'success');
  });

  $('#taskList').on('click', '.delete-task', function () {
    const id = String($(this).data('id'));
    const beforeCount = tasks.length;
    tasks = tasks.filter((task) => String(task.id) !== id);

    if (tasks.length !== beforeCount) {
      saveTasks();
      renderTasks();
      setStatus('Task deleted.', 'success');
    }
  });

  $('#loadRemote').on('click', handleRemoteTasks);
  $('#clearCompleted').on('click', clearCompleted);
});
