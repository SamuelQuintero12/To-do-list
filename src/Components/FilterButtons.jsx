import React from "react";

export default function FilterButtons({ setFilter }) {
  return (
    <div className="filter-buttons">
      <button onClick={() => setFilter("all")} className="filter-button">All</button>
      <button onClick={() => setFilter("pending")} className="filter-button">Pending</button>
      <button onClick={() => setFilter("completed")} className="filter-button">Completed</button>
    </div>
  );
}