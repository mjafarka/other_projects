import React from "react";
import "./index.scss";

const Calender = ({passDate}) => {
  const year = 2024;
  const month = 4;
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [];
  for (let i = firstDay.getDate(); i <= lastDay.getDate(); i++) {
    days.push(new Date(year, month, i));
  }

  const handleDateClick = (index) => {
    passDate(days[index].toString().slice(4,15));
  }

  debugger
  const cells = new Array(35).fill(null);
  let offset = firstDay.getDay();
  return (
    <div className="calender">
      <div className="monthAndYear">
        <h2 className="monthHeading">{months[month].toUpperCase()}</h2>
        <h2 className="year">{year}</h2>
      </div>
      <div className="days">
        {weekDay.map((day) => {
          return <div key={day}>{day}</div>;
        })}
        {cells.map((cell, index) => {
          if (index < offset) {
            return <div key={index}></div>;
          } else if (index >= offset && index - offset < lastDay.getDate()) {
            debugger
            return (
              <div className="day" key={index} onClick={() => handleDateClick(index - offset)}>
                {days[index - offset].getDate()}
              </div>
            );
          } else {
            return <div key={index}></div>;
          }
        })}
      </div>
    </div>
  );
};

export default Calender;
