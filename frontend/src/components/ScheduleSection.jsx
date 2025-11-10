import React, { useState, useEffect } from "react";
import "../index.css";

const classesData = [
  { time: "5:00 AM - 6:00 AM", name: "Yoga", type: "Morning" },
  { time: "6:15 AM - 7:15 AM", name: "Strength Training", type: "Morning" },
  { time: "7:30 AM - 8:30 AM", name: "Workout", type: "Morning" },
  { time: "8:45 AM - 10:00 AM", name: "Core Blast", type: "Morning" },
  { time: "4:00 PM - 5:00 PM", name: "Cardio", type: "Evening" },
  { time: "5:15 PM - 6:15 PM", name: "Crossfit", type: "Evening" },
  { time: "6:30 PM - 7:30 PM", name: "Bodybuilding", type: "Evening" },
  { time: "8:00 PM - 10:00 PM", name: "Core Blast", type: "Evening" },
];

const ScheduleSection = () => {
  const [filter, setFilter] = useState("All");
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const filteredClasses =
    filter === "All"
      ? classesData
      : classesData.filter((cls) => cls.type === filter);

  const isCurrentSession = (time) => {
    const [start, end] = time.split(" - ");
    const parseTime = (t) => {
      const [hour, min, period] = t.match(/(\d+):(\d+)\s*(AM|PM)/i).slice(1);
      let h = parseInt(hour);
      if (period.toUpperCase() === "PM" && h !== 12) h += 12;
      if (period.toUpperCase() === "AM" && h === 12) h = 0;
      return h * 60 + parseInt(min);
    };
    const now = currentTime.getHours() * 60 + currentTime.getMinutes();
    return now >= parseTime(start) && now <= parseTime(end);
  };

  return (
    <section className="schedule-section">
      <h2 className="section-title">Class Schedule</h2>

      <div className="filter-tabs">
        {["All", "Morning", "Evening"].map((t) => (
          <button
            key={t}
            className={`filter-btn ${filter === t ? "active" : ""}`}
            onClick={() => setFilter(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="schedule-table">
        <div className="schedule-header">
          <span>Time</span>
          <span>Class</span>
          <span>Session</span>
        </div>
        {filteredClasses.map((cls, index) => (
          <div
            key={index}
            className={`schedule-row ${
              isCurrentSession(cls.time) ? "current" : ""
            }`}
          >
            <span>{cls.time}</span>
            <span>{cls.name}</span>
            <span>{cls.type}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScheduleSection;
