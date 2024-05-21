import React, { useState } from "react";
import "./index.scss";
import { GrNext, GrPrevious } from "react-icons/gr";
import YearAndMonth from "./calenderComponent/monthAndYear";

const Calender = ({ passDate }) => {
  const [year, setYear] = useState(2024);
  const [month, setMonth] = useState(4);
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
    passDate(days[index].toString().slice(4, 15));
  }

  const changeMonth = (action, month) => {
    console.log("month=>", month)
    if (action === "prev")
      if (month === 0) {
        setYear(year - 1);
        setMonth(11);
      }
      else {
        setMonth(month - 1);
      }
    else
      if (month === 11) {
        setMonth(0);
        setYear(year + 1);
      } else
        setMonth(month + 1);
  }

  const cells = new Array(35).fill(null);
  let offset = firstDay.getDay();
  return (
    <div className="calender">
      <div className="monthAndYear">
        <GrPrevious onClick={() => changeMonth("prev", month)} className="navigator" />
        <YearAndMonth currMonth={month} year={year} months={months} setMonth={setMonth} setYear={setYear} />
        <GrNext onClick={() => changeMonth("next", month)} className="navigator" />
      </div>
      <div className="days">
        {weekDay.map((day) => {
          return <div key={day}>{day}</div>;
        })}
        {cells.map((cell, index) => {
          if (index < offset) {
            return <div key={index}></div>;
          } else if (index >= offset && index - offset < lastDay.getDate()) {
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
