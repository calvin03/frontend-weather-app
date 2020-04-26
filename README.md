Hi!  route on api called /api/weather 

this route fetch a  data on openweatherapp ui that returns a data based on latitude longhitude

if user indicates a establishment it will also fetch a data on foursquare api to know the establishments nearby on selected latitude and longhitude.

I use this implementation for a much cleaner code and better ux that fits on travelers that wants to know the weather and at the same time know what are the establishments near by. I didnt much focus on the ui because of the limited time but i make it responsive and easy to use for the users.


Here is the actual app you can check it:

https://secure-beach-14872.herokuapp.com/

ENV VARIABLES : 


REACT_APP_GOOGLE_MAP_KEY = AIzaSyAVuc0-ACKor2V2jUwh2Hhw3MXDDCOwnTo
REACT_APP_API_URL = https://young-cliffs-37734.herokuapp.com



just run npm install and after that npm start and it's ready to go
