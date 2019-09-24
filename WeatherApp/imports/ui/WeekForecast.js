import React, { Component } from "react";

import DayForecast from "./DayForecast";
 
export default class WeekForecast extends Component {

  getDays() {
    return [
      { _id: 1, dayName: "Sun", minTemp: 20, maxTemp: 40, status: "Mostly sunny"},
      { _id: 2, dayName: "Mon", minTemp: 20, maxTemp: 42, status: "Nice day" },
      { _id: 3, dayName: "Tue", minTemp: 30, maxTemp: 46, status: "Spring like" },
      { _id: 4, dayName: "Wed", minTemp: 38, maxTemp: 52, status: "Rain showers" },
      { _id: 5, dayName: "Thu", minTemp: 42, maxTemp: 52, status: "Warm pm shower" },
      { _id: 6, dayName: "Fri", minTemp: 26, maxTemp: 40, status: "Brigth colder" },
      { _id: 7, dayName: "Sat", minTemp: 20, maxTemp: 38, status: "Chilly" }
    ];
  }

  renderDays() {
    console.log(this.props)
    return this.props.forecast.map((d) => (
      <DayForecast key={d._id} report={d} />
    ));
  }


  render() {
    return (
      <div>
        <div className="row">
          {this.renderDays()}
        </div>
      </div>
    );
  }
}
