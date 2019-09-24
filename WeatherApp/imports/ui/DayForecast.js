import React, { Component } from "react";

export default class DayForecast extends Component {
  iconRender (){
    let text = this.props.report.status;

    let comp = <i className="fas fa-umbrella fa-5x"></i>;
    switch (text) {
      case "Mostly sunny":
        comp = <i className="far fa-sun fa-5x"></i>
        break;
      case "Nice day":
        comp = <i className="fas fa-sun fa-5x"></i>
        break;
      case "Spring like":
        comp = <i className="fas fa-rainbow fa-5x"></i>
        break;
      case "Rain showers":
        comp = <i className="fas fa-umbrella fa-5x"></i>
        break;
      case "Warm pm shower":
        comp = <i className="fas fa-temperature-high fa-5x"></i>
        break;
      case "Brigth colder":
        comp = <i className="fas fa-snowflake fa-5x"></i>
        break;
      case "Chilly":
        comp = <i className="fas fa-temperature-low fa-5x"></i>
        break;

      default:
        comp = <i className="fas fa-umbrella fa-5x"></i>
        break;
    }

    return comp;
  };
  render() {
    return (
      <div className="card m-2 shadow-sm p-1 col-sm">
        <div className="card-body">
          <h2 className="card-title">{this.props.report.dayName}</h2>
          <p>{this.props.report.minTemp}</p>
          <p>{this.props.report.maxTemp}</p>
          <p>{this.props.report.status}</p>
          {this.iconRender()}
        </div>
      </div>
    );
  }
}
