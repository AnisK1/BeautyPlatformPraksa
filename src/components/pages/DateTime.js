import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Modal from "../UI/Modal";
import classes from "./DateTime.module.css";
import React from "react";
import DatePicker from "react-date-picker";
import "./DateTimeCalendar.css";

const TherapistOptions = [
  {
    label: "Therapist1",
    value: "1",
  },
  {
    label: "Therapist2",
    value: "2",
  },
  {
    label: "Therapist3",
    value: "3",
  },
  {
    label: "Therapist4",
    value: "4",
  },
];

const options = [
  {
    label: "10.00",
    value: "10.00",
  },
  {
    label: "10:30",
    value: "10:30",
  },
  {
    label: "11:00",
    value: "11:00",
  },
  {
    label: "11:30",
    value: "11:30",
  },
];

const DateTime = (props) => {
  const [value, onChange] = useState(new Date());
  const d = new Date();

  return (
    <Modal>
      <div className={classes.main}>
        <Calendar onChange={onChange} value={value} minDate={new Date()} />
        <select className={classes.selectContainer}>
          {TherapistOptions.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>

        <select className={classes.selectContainer}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
        <button onClick={props.onClose} className={classes.button}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default DateTime;
