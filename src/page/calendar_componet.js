import React, { useEffect, useState,userEffect } from "react";
import Calendar from "react-calendar";
import moment from "moment/moment";
import "./calendar.css";
import axios from "axios";

const Calendarcomponent = ({ onChange, value }) => {
  const [nowDate, setNowDate] = useState("날짜");
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const accessToken = ''//네이버 엑세스 토큰 받기
      try {
        const reseponse = await axios.get('', {headers:{'Authorization':'Bearer ${accessToken}',}});//네이버 캘린더 api
      } catch (e) {
        setError(e);
      }
    };
    setEvents();//네이버 api 구조에 맞게 변경
  })

  const handleDateChange = (selectedDate) => {
    onChange(selectedDate);
    setNowDate(moment(selectedDate).format("YYYY년 MM월 DD일"));
    //선택한 날짜에 맞는 이벤트를 fetch 하기
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
          //이벤트를 표시하는 로직 표기할수 있음
        />
      </div>
    </div>
  );
};

export default Calendarcomponent;
