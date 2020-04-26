import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../../actions/weatherActions";
const useStyles = makeStyles({
  root: { minHeight: '210px',width: '100%'},
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function DemoCarousel() {
  const establishmentData = useSelector((state) => state.weather.establishment);
  const dispatch = useDispatch();
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  useEffect(() => {
    console.log(establishmentData, "es");
  }, [establishmentData]);

  function mapLocation(lat,long){
    var coordinates = {
        lat: lat,
        lon: long,
        establishment: "",
    }

    dispatch(getWeather(coordinates))


  }

  function carouselDiv() {
    if (establishmentData.meta) {
      const listItems = establishmentData.response.groups[0].items.map(
        (row, index) => {
          // Wrong! The key should have been specified here:
          return (
            <div key={index}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                   
                    variant="h4" component="h2"
                  >
                    <span style={{textTransform: 'capitalize'}}>{establishmentData.response.query}</span> near {establishmentData.response.headerFullLocation}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {row.venue.name}
                  </Typography>
                  <Typography variant="body2" component="p">
                  {row.venue.location.address} {row.venue.location.crossStreet},       
                  {row.venue.location.city},  {row.venue.location.cc}       
                               <br />
                  </Typography>
                  <br />

                  <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{backgroundColor: 'orange'}}
            onClick={()=>mapLocation(row.venue.location.lat,row.venue.location.lng)}
          >
            Map location
          </Button>
                </CardContent>
               
              </Card>
            </div>
          );
        }
      );

      return (
        <div>
          <Carousel showArrows={true}>
              {listItems}
          </Carousel>
        </div>
      );
    }
  }

  return <div style={{ height: "100%",minHeight: '210px' }}>{carouselDiv()}</div>;
}
