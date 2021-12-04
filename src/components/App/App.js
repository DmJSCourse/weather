import './App.css';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Display from '../Display/Display';
import getWeather from '../../api/metaweather';


function App() {
  let [city, setCity] = useState('');
  let [icon, setIcon] = useState('c');
  let [temperature, setTemperature] = useState(20);
  let [geoData, setGeoData] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setGeoData(
        getWeather(null, position.coords.latitude, position.coords.longitude)
      );
    });
    console.log(geoData);
    setIcon('lr');
  });


return (
  <div className='app'>
      <Header/>
      <Display 
        icon={icon}
      />
      <Footer
        temperature = { temperature }
        changeTemperature = { setTemperature }
      />
  </div>

);
};


export default App;