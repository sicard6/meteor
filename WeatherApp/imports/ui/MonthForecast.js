import React, { Component } from "react";

import WeekForecast from "./WeekForecast";
import { Forecast } from '../api/forecast.js';

import { withTracker } from 'meteor/react-meteor-data';

class MonthForecast extends Component {

  renderWeeks() {
    return <div>
    <WeekForecast forecast = {this.giveWeek(0,7)}/>
    <WeekForecast forecast = {this.giveWeek(7,14)}/>
    <WeekForecast forecast = {this.giveWeek(14,21)}/>
    <WeekForecast forecast = {this.giveWeek(21,28)}/>
    </div>;
  }

  giveWeek = (s,e)=>{
      console.log('hello',this.props)
      let x = [];
      for (let i = s; i < this.props.forecast ||i < e; i++) {
          console.log('i',this.props.forecast[i])
          x.push(this.props.forecast[i]);
      }
      console.log('x', x);
      return(x);
  }

  render() {
    return (
      <div>
        <div className="row text-center text-white bg-primary">
          <div className="col-sm"> Month Forecast</div>
        </div>
        <div>{this.renderWeeks()}</div>
      </div>
    );
  }
}

export default withTracker(() => {
    console.log(Forecast.find({}).fetch());
  return {
    forecast: Forecast.find({}).fetch()
  };
})(MonthForecast);
