import React from "react";
import { Link } from "react-router-dom";

function Notification({ col = 3 }) {
  const data = [
    {
      icon: "user-check",
      message: "Pending John Does data verification",
    },
    {
      icon: "envelope",
      message: "Lorem ipsum dolor sit armet...",
    },
    {
        icon:'calendar',
      message: "new meeting schedule for...",
    },
  ];

  const ListItems = data.map((data) => (
    <div className="row" key={data.icon}>
      <div className="col mb-2">
        <i className={`mr-2 fas fa-${data.icon}`}></i>
        {data.message}
      </div>
    </div>
  ));

  return (
    <div className={`col-${col}`}>
      <h4>These need your attention</h4>
      <div className="row">{ListItems}</div>
      <div className="row">
        <div className="col align-self-center">
          <Link to="/">View All</Link>
        </div>
      </div>
    </div>
  );
}

export default Notification;
