import { makeSchedule } from './data.js';
import { formatCountdown, formatTime } from './countdown.js';

class Scheduler {
  constructor(scheduleContainer, nextClassContainer, countdownContainer, clockContainer) {
    this.scheduleContainer = scheduleContainer;
    this.nextClassContainer = nextClassContainer;
    this.countdownContainer = countdownContainer;
    this.clockContainer = clockContainer;
    this.schedule = makeSchedule();
    this.updateTimer = null;
    this.refreshTimer = null;
  }

  getNextClass() {
    const now = Date.now();
    return this.schedule.find((item) => new Date(item.start).getTime() > now) ?? this.schedule[0];
  }

  getTimeRemaining() {
    const nextClass = this.getNextClass();
    if (!nextClass) {
      return 0;
    }

    return new Date(nextClass.start).getTime() - Date.now();
  }

  renderSchedule() {
    const now = Date.now();

    this.scheduleContainer.innerHTML = this.schedule
      .map((item) => {
        const isActive =
          now >= new Date(item.start).getTime() && now <= new Date(item.end).getTime();
        const stateClass = isActive ? 'schedule-item active' : 'schedule-item';

        return `
          <li class="${stateClass}">
            <span class="schedule-time">${formatTime(new Date(item.start))}</span>
            <span class="schedule-name">${item.subject}</span>
            <span class="schedule-room">${item.room}</span>
            <span class="pill">${isActive ? 'In progress' : 'Upcoming'}</span>
          </li>
        `;
      })
      .join('');
  }

  renderNextClass() {
    const nextClass = this.getNextClass();
    const startTime = formatTime(new Date(nextClass.start));
    const endTime = formatTime(new Date(nextClass.end));

    this.nextClassContainer.innerHTML = `
      <span class="subject-tag">${nextClass.subject}</span>
      <div>
        <h2>${nextClass.subject}</h2>
        <p class="next-meta">${nextClass.room} · ${startTime} - ${endTime}</p>
      </div>
    `;
  }

  renderClock() {
    const now = new Date();
    this.clockContainer.textContent = formatTime(now);
  }

  renderCountdown() {
    const remaining = this.getTimeRemaining();
    this.countdownContainer.textContent = formatCountdown(remaining);
  }

  refreshScheduleIfNeeded() {
    const now = new Date();
    const currentHour = now.getHours();
    const isAfterSchedule = currentHour >= 18;

    if (isAfterSchedule) {
      this.schedule = makeSchedule(new Date(Date.now() + 24 * 60 * 60 * 1000));
    }

    this.renderSchedule();
    this.renderNextClass();
    this.renderCountdown();
  }

  scheduleNextRefresh() {
    const now = Date.now();
    const delay = 60000 - (now % 60000);

    clearTimeout(this.refreshTimer);
    this.refreshTimer = setTimeout(() => {
      this.refreshScheduleIfNeeded();
      this.scheduleNextRefresh();
    }, delay);
  }

  start() {
    this.render();
    this.updateTimer = setInterval(() => {
      this.render();
    }, 1000);

    this.scheduleNextRefresh();
  }

  render() {
    this.renderClock();
    this.renderSchedule();
    this.renderNextClass();
    this.renderCountdown();
  }

  stop() {
    clearInterval(this.updateTimer);
    clearTimeout(this.refreshTimer);
  }
}

export { Scheduler };
