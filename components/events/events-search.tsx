import { NextPage } from "next";
import React, { useRef } from "react";
import Button from "../ui/button";

import classec from "./events-search.module.css";

const EventsSearch: NextPage<any> = (props) => {
  const yearInputRef = useRef<HTMLSelectElement>(null);
  const monthInputRef = useRef<HTMLSelectElement>(null);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let selectedYear;
    let selectedMonth;
    if (yearInputRef.current && monthInputRef.current) {
      selectedYear = yearInputRef.current.value;
      selectedMonth = monthInputRef.current.value;

      props.onSearch(selectedYear, selectedMonth);

      // Perform further actions with the selectedYear and selectedMonth values
    } else {
      // console.log(`empty`);
      alert(`${selectedYear} ${selectedMonth}`);
    }
  };

  return (
    <form className={classec.form} onSubmit={submitHandler}>
      <div className={classec.controls}>
        <div className={classec.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <div className={classec.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
};

export default EventsSearch;
