import React, { useEffect, useState } from "react";
import GoogleMapsAutoComplete from "../../components/GoogleMap/GoogleMapAutoComplete";
import Navbar from "../../components/Navbar/Navbar";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Weather from "../../components/Weather/Weather";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../../actions/weatherActions";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";
import "./LandingPage.css";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import { makeStyles } from "@material-ui/core/styles";

export default function LandingPage() {
  const weatherData = useSelector((state) => state.weather.weather);
  const establishmentData = useSelector((state) => state.weather.establishment);

  const dispatch = useDispatch();
  const [coordinates, setCoordinates] = useState({
    lat: -34.397,
    lon: 150.644,
    establishment: "",
  });

  var weatherBackground = null;
  if (weatherData.data) {
    try {
      weatherBackground = require(`../../images/${weatherData.data.weather[0].main}.jpeg`);
    } catch (error) {
      weatherBackground = require(`../../images/Clear.jpeg`);
    }
  }
  const useStyles = makeStyles((theme) => ({
    weather: {
      background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${weatherBackground}')`,
      display: "table",
      width: "100%",
      height: "85vh",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  }));
  const classes = useStyles();

  useEffect(() => {
    if (weatherData.data) {
      setCoordinates({
        ...coordinates,
        lat: weatherData.data.coord.lat,
        lon: weatherData.data.coord.lon,
      });
    }
  }, [weatherData]);
  useEffect(() => {
    dispatch(getWeather(coordinates));
  }, []);
  const googleMapKey = process.env.REACT_APP_GOOGLE_MAP_KEY;
  const googleMapUrl = `https://maps.googleapis.com/maps/api/js?key=${googleMapKey}&libraries=geometry,drawing,places`;
  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: coordinates.lat, lng: coordinates.lon }}
      >
        <Marker position={{ lat: coordinates.lat, lng: coordinates.lon }} />
      </GoogleMap>
    ))
  );
  return (
    <div>
      <div className={`banner ${classes.weather}`} >
        <Navbar
          style={{ marginBottom: "30px", padding: "20px", background: "none" }}
        />
        <Container maxWidth="lg" style={{ marginTop: "3%" }}>
          {establishmentData.meta ? (
            <div>
              <Grid container spacing={3} direction="row">
                <Grid item xs={12} md={6} lg={6}>
                  <GoogleMapsAutoComplete />
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <div style={{ paddingTop: "28%" }} className={'carousel'}>
                  <Carousel />

                  </div>
                </Grid>
              </Grid>
            </div>
          ) : (
            <div>
              <Grid container spacing={3} direction="row">
                <Grid item xs={12} md={6} lg={12}>
                  <GoogleMapsAutoComplete />
                </Grid>
              </Grid>
            </div>
          )}
        </Container>
      </div>
      <div>

        <Container maxWidth="lg" className={"weather-container"}>
          <Grid container spacing={3} style={{ height: "350px" }}>
            <Grid item xs={12} md={6} lg={6}>
                  <MapWithAMarker
                googleMapURL={googleMapUrl}
                loadingElement={
                  <div style={{ height: `100%` }} className={"google-map"} />
                }
                containerElement={
                  <div style={{ height: `100%` }} className={"google-map"} />
                }
                mapElement={
                  <div style={{ height: `100%` }} className={"google-map"} />
                }
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Weather />
          
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
