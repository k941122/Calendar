import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment/moment";
import "./calendar.css";

const Calendarcomponent = ({ onChange, value }) => {
  const [nowDate, setNowDate] = useState("날짜");

  const handleDateChange = (selectedDate) => {
    onChange(selectedDate);
    setNowDate(moment(selectedDate).format("YYYY년 MM월 DD일"));
    console.log("테스트");
  };
  return (
    <div className="CalendarContainer">
      <h1>Todo Calendar</h1>
      <div className="CalendarWrapper">
        <Calendar
          onChange={handleDateChange}
          value={value}
          formatDay={(locale, date) => moment(date).format("DD")}
          showNeighboringMonth={false}
        />
      </div>
    </div>
  );
};

export default Calendarcomponent;
