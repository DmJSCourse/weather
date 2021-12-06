This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Demo link:
https://dmjscourse.github.io/weather

Code:
https://github.com/DmJSCourse/weather

Weather Single Page Application
Technologies used:
- React + Hooks
- API (metaweather)
- JavaScript
- SASS

Features:
Application asks for geolocation access on first launch, uses data to find closest city by coordinates. 
Provides current weather (represented by icon) and temperature (number shown at botton right) at closest city.
Temperature also represented by background color of the weather icon, within the range of -10 to 30.
User can search for a specific city (name is required to be precise), pressing search button will request weather icon and temperature for that city.
User can change the temperature using slider, it also changes background accordingly.

Features in progress:
Search by partial city name
Proper display for UHD
Media queries for resolutions below 1920x1080
