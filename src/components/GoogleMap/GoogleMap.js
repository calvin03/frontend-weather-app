import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
  import { useDispatch, useSelector } from "react-redux";
  const weatherData = useSelector(state => state.weather.weather)

  useEffect(() => {
    console.log(weatherData,'weather')
},[weatherData]);


  function GoogleMap(props){
    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: weatherData.data.coord.lat, lng: weatherData.data.coord.lon }}
        >
          <Marker
            position={{ lat: -34.397, lng: 150.644 }}
          />
        </GoogleMap>
      ));

      return(
          <div>
              
          </div>
      )
      

  }

  export default GoogleMap;
  
 
  

  