import React from "react";
import "./NoticeBoard.css";
import { assets } from "../../assets/assets.js";

function NoticeBoard() {
  return (
    <div className="noticeboard">
      <div className="left-container">
        <h2>Notice Board</h2>
        <img src={assets.course_22} alt="" />
        <h3>Event</h3>
      </div>
      <div className="right-container">
        <h2>Upcoming Events</h2>
      </div>
    </div>
  );
}

export default NoticeBoard;
