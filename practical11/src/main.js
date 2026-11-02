import { Scheduler } from './scheduler.js';

const scheduleContainer = document.getElementById('scheduleList');
const nextClassContainer = document.getElementById('nextClass');
const countdownContainer = document.getElementById('countdown');
const clockContainer = document.getElementById('liveClock');

const scheduler = new Scheduler(
  scheduleContainer,
  nextClassContainer,
  countdownContainer,
  clockContainer
);

scheduler.start();

window.addEventListener('beforeunload', () => scheduler.stop());
