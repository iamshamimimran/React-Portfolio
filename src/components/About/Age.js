import React, { useState, useEffect } from 'react';

function AgeCounter() {
  const [age, setAge] = useState({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const today = new Date();

      const birthday = new Date('1999-11-10'); // Example birthday, format: yyyy-mm-dd

      let ageYear = today.getFullYear() - birthday.getFullYear();
      let ageMonth = today.getMonth() - birthday.getMonth();
      let ageDay = today.getDate() - birthday.getDate();
      let ageHour = today.getHours() - birthday.getHours();
      let ageMinute = today.getMinutes() - birthday.getMinutes();
      let ageSecond = today.getSeconds() - birthday.getSeconds();

      if (ageMonth < 0 || (ageMonth === 0 && today.getDate() < birthday.getDate())) {
        ageYear--;
        ageMonth += 12;
      }
      if (ageDay < 0) {
        const prevMonthLastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        ageDay += prevMonthLastDay;
        ageMonth--;
      }
      if (ageHour < 0) {
        ageDay--;
        ageHour += 24;
      }
      if (ageMinute < 0) {
        ageHour--;
        ageMinute += 60;
      }
      if (ageSecond < 0) {
        ageMinute--;
        ageSecond += 60;
      }

      setAge({
        years: ageYear,
        months: ageMonth,
        days: ageDay,
        hours: ageHour,
        minutes: ageMinute,
        seconds: ageSecond
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <br></br>
      <h3>My age is:</h3>
      <p>{age.years} Years, {age.months} Months, {age.days} Days, {age.hours} Hours, {age.minutes} Minutes, and {age.seconds} Seconds</p>
    </div>
  );
}

export default AgeCounter;
