import React, { useState, useEffect } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { getWeather } from "../../actions/weatherActions";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "orange",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "orange",
  },
}));

export default function GoogleMapsAutoComplete() {
  const classes = useStyles();

  const [address, setAddress] = useState();
  const [coordinates, setCoordinates] = useState({
    lat: "",
    lon: "",
    establishment: "",
  });
  const dispatch = useDispatch();
  function handleChange(address) {
    setAddress(address);
  }

  function handleSelect(address) {
    setAddress(address);
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("Success", latLng);
        setCoordinates({ ...coordinates, lat: latLng.lat, lon: latLng.lng });

        console.log(coordinates);
      })
      .catch((error) => console.error("Error", error));
  }

  function handleForm(event) {
    const value = event.target.value;

    setCoordinates({ ...coordinates, [event.target.name]: value });
  }

  function submitForm() {
    dispatch(getWeather(coordinates));
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <WbSunnyIcon />
        </Avatar>
        <Typography component="h1" variant="h5" style={{ color: "white" }}>
          Where Do You Want To Go?
        </Typography>
        <div className={classes.form} noValidate>
          <PlacesAutocomplete
            value={address}
            onChange={handleChange}
            onSelect={handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div>
                <TextField
                  {...getInputProps({
                    placeholder: "Search Places ...",
                    className: "location-search-input",
                  })}
                  id="standard-basic"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="location"
                  label="Search Places"
                  name="location"
                  autoFocus
                  value={address}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div style={{ color: "white" }}>Loading...</div>}
                  {suggestions.map((suggestion) => {
                    const className = suggestion.active
                      ? "suggestion-item--active"
                      : "suggestion-item";
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? {
                          backgroundColor: "rgb(119, 94, 94)",
                          cursor: "pointer",
                          color: "white",
                        }
                      : {
                          backgroundColor: "#ffffff",
                          cursor: "pointer",
                          color: "black",
                        };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                        <span style={{ fontSize: "15px" }}>
                          {suggestion.description}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
          <TextField
            id="standard-basic"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="establishment"
            label="Eg. Mall, Clubs, Pet store"
            name="establishment"
            autoFocus
            onChange={handleForm}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={submitForm}
          >
            Search Place
          </Button>
        </div>
      </div>
    </Container>
  );
}
