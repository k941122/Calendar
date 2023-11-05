import React, {useState} from "react";
// import styled from "."
import Calendar from "react-calendar";
import moment from "moment/moment";
import 'react-calendar/dist/Calendar.css';
// import { styled } from 'styled-components';

const Calendarcomponent = ({onChange, value}) =>  {
    const [nowDate, setNowDate] = useState("날짜");
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleCalendar = () => {
        setIsOpen (!isOpen);
    }

    const handleDateChange = (selectedDate) => {
        onChange(selectedDate);
        setIsOpen(false);
        setNowDate(moment(selectedDate).format("YYYY년 MM월 DD일"))
    }
    return(
        <div className="CalendarContainer">
            <div className="DropDowonButton" onClick = {handleToggleCalendar}> </div>
            <div className="CalendarWrapper" isOpen={isOpen}>
            <Calendar onChange = {handleDateChange} value = {value} />
            </div>
        </div>
    );
}

export default Calendarcomponent;