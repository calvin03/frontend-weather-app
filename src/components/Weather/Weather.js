import React, { useEffect, useState } from "react";
import "./Weather.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment-timezone";
import CloudIcon from "@material-ui/icons/Cloud";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import { useDispatch, useSelector } from "react-redux";

export default function Weather(props) {
  const weatherData = useSelector((state) => state.weather.weather);

  const useStyles = makeStyles((theme) => ({
    weather: {
      padding: "30px 50px",
      display: "table",
      width: "100%",
      height: "100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  }));
  const classes = useStyles();

  function weatherDiv() {
    if (weatherData.data) {
      const data = weatherData.data;
      const dateTime = moment.unix(data.dt).format("LT");
      const dateDay = moment.unix(data.dt).format("MMMM Do");
      const sunrise = moment.unix(data.sys.sunrise).format("LT");
      const sunset = moment.unix(data.sys.sunset).format("LT");
      const weather = `https://openweathermap.org/img/wn/${weatherData.data.weather[0].icon}.png`;

      var weatherBackground = null;

      try {
        weatherBackground = require(`../../images/${weatherData.data.weather[0].main}.jpeg`);
      } catch (error) {
        weatherBackground = require(`../../images/Clear.jpeg`);
      }

      return (
        <div
          className={classes.weather}
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${weatherBackground})`,
          }}
        >
          <div>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid items xs={6} md={6}>
                <h1 style={{ textTransform: "capitalize" }}>
                  {data.weather[0].description}
                </h1>
              </Grid>
              <Grid items xs={6} md={6}>
                <h3 style={{ textAlign: "right" }}>
                  <span>
                    {data.name}, {data.sys.country}
                  </span>
                  <br></br>
                  <span>{dateTime}</span>
                </h3>
              </Grid>
            </Grid>
          </div>
          <p style={{ textAlign: "center" }}>
            <img src={weather} alt="new" style={{ height: "100px" }} />
          </p>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid items xs={6} md={3} lg={3}>
              <h3>
                <span style={{ fontSize: "30px" }}>
                  {" "}
                  {data.main.temp}&#8451;
                </span>
                <br></br>
                <span>{dateDay}</span>
              </h3>
            </Grid>
            <Grid items xs={6} md={4} lg={3}>
              <h5 style={{ textAlign: "center" }}>
                <CloudIcon style={{ fontSize: "37px" }} />

                <br></br>
                <span>
                  {data.wind.speed}mph/{data.wind.deg}
                </span>
              </h5>
            </Grid>
            <Grid items xs={12} md={4} lg={6}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid
                  items
                  xs={3}
                  md={3}
                  lg={3}
                  style={{ borderLeft: "1px solid white" }}
                >
                  <h5 style={{ textAlign: "center" }}>
                    <span>MIN</span>
                    <br></br>
                    <AcUnitIcon />
                    <br></br>
                    <span>{data.main.temp_min}&#8451;</span>
                  </h5>
                </Grid>
                <Grid
                  items
                  xs={3}
                  md={3}
                  lg={3}
                  style={{ borderLeft: "1px solid white" }}
                >
                  <h5 style={{ textAlign: "center" }}>
                    <span>MAX</span>
                    <br></br>
                    <AcUnitIcon />
                    <br></br>
                    <span>{data.main.temp_max}&#8451;</span>
                  </h5>
                </Grid>
                <Grid
                  items
                  xs={3}
                  md={3}
                  lg={3}
                  style={{ borderLeft: "1px solid white" }}
                >
                  <h5 style={{ textAlign: "center" }}>
                    <span>SUNRISE</span>
                    <br></br>
                    <Brightness7Icon />
                    <br></br>
                    <span>{sunrise}</span>
                  </h5>
                </Grid>
                <Grid
                  items
                  xs={3}
                  md={3}
                  lg={3}
                  style={{ borderLeft: "1px solid white" }}
                >
                  <h5 style={{ textAlign: "center" }}>
                    <span>SUNSET</span>
                    <br></br>
                    <Brightness2Icon />
                    <br></br>
                    <span>{sunset}</span>
                  </h5>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      );
    }
  }

  useEffect(() => {
    console.log(weatherData, "weather");
  }, [weatherData]);

  return <div>{weatherDiv()}</div>;
}
