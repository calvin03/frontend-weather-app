import React,{useEffect,useState} from "react";
import GoogleMapsAutoComplete from "../../components/GoogleMap/GoogleMapAutoComplete";
import Navbar from "../../components/Navbar/Navbar";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Weather from "../../components/Weather/Weather";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../../actions/weatherActions";

import "./LandingPage.css";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";


export default function LandingPage() {
  const weatherData = useSelector((state) => state.weather.weather);

  const dispatch = useDispatch()
  const [coordinates, setCoordinates] = useState({
    lat: -34.397,
    lon: 150.644,
    establishment: "",
  });

  useEffect(() => {
      if(weatherData.data){

        setCoordinates({...coordinates, lat: weatherData.data.coord.lat, lon: weatherData.data.coord.lon})
         
        }
  }, [weatherData]);
    useEffect(() => {
    dispatch(getWeather(coordinates))
  }, []);
  const googleMapKey = process.env.REACT_APP_GOOGLE_MAP_KEY;
  const googleMapUrl = `https://maps.googleapis.com/maps/api/js?key=${googleMapKey}&libraries=geometry,drawing,places`;
    const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap defaultZoom={10} defaultCenter={{ lat:   coordinates.lat, lng: coordinates.lon}}>
        <Marker position={{ lat: coordinates.lat, lng: coordinates.lon }} />
      </GoogleMap>
    ))
  );
  return (
    <div>
      <div className={"banner"}>
        <Navbar
          style={{ marginBottom: "30px", padding: "20px", background: "none" }}
        />
        <GoogleMapsAutoComplete />
      </div>

      <Container maxWidth="lg" className={"weather-container"}>
        <Grid container spacing={3} style={{ height: "350px" }}>
          <Grid item xs={12} md={6} lg={6}>
            <Weather />
          </Grid>
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
        </Grid>
      </Container>
    </div>
  );
}
