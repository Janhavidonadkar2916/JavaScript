const pad = (value) => String(value).padStart(2, '0');

const formatCountdown = (remainingMs) => {
  if (remainingMs <= 0) {
    return '00:00:00';
  }

  const totalSeconds = Math.floor(remainingMs / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

const formatTime = (date) =>
  new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(date);

export { formatCountdown, formatTime };
