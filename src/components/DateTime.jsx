import React from "react";

const DateTime = () => {
  //date
  let date = new Date().toJSON();
  let currentDate = date.slice(0, 10);
  //time
  let today = new Date();
  let time = today.toLocaleString().slice(10,18);

  let dateAndTime = currentDate + " " + time;

  return (
    <div className="flex justify-center items-center my-8 space-x-3 font-medium text-sm">
      <i className="fa-regular fa-clock"></i>
      <span>{dateAndTime}</span>
    </div>
  );
};

export default DateTime;
