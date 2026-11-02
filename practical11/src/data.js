const minutesFrom = (date, hours, minutes) => {
  const result = new Date(date);
  result.setHours(hours, minutes, 0, 0);
  return result;
};

const makeSchedule = (referenceDate = new Date()) => {
  const dayStart = new Date(
    referenceDate.getFullYear(),
    referenceDate.getMonth(),
    referenceDate.getDate()
  );

  return [
    {
      subject: 'Calculus',
      room: 'Room A-101',
      start: minutesFrom(dayStart, 9, 0),
      end: minutesFrom(dayStart, 10, 15),
    },
    {
      subject: 'Physics Lab',
      room: 'Lab 204',
      start: minutesFrom(dayStart, 11, 30),
      end: minutesFrom(dayStart, 12, 45),
    },
    {
      subject: 'Design Studio',
      room: 'Studio 7',
      start: minutesFrom(dayStart, 14, 0),
      end: minutesFrom(dayStart, 15, 30),
    },
    {
      subject: 'Data Structures',
      room: 'Room B-220',
      start: minutesFrom(dayStart, 16, 30),
      end: minutesFrom(dayStart, 17, 45),
    },
  ];
};

export { makeSchedule };
