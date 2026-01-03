"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

    // 👇 Anchor calendar to today
  const today = new Date();

  // 👇 School hours (time-only control)
  const minTime = new Date(today);
  minTime.setHours(8, 0, 0, 0);

  const maxTime = new Date(today);
  maxTime.setHours(17, 0, 0, 0);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      date={today}
      style={{ height: "98%" }}
      onView={handleOnChangeView}
      min={minTime}
      max={maxTime}
    />
  );
};

export default BigCalendar;
