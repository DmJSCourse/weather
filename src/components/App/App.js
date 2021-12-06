import './App.css';

import { useState, useEffect } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Display from '../Display/Display';

import getWeather from '../../api/metaweather';
import colorConverter from '../../utils/colorConverter';

const baseTemperatueHue = colorConverter('#fff700');
const coldTemperatureHue = colorConverter('#00ffff');
const hotTemperatureHue = colorConverter('#ff8c00');
const colorChangeBoundaries = 20;
const normalToColdStep = (coldTemperatureHue - baseTemperatueHue) / colorChangeBoundaries;
const normalToHotStep = (hotTemperatureHue - baseTemperatueHue) / colorChangeBoundaries;

const changeBackgroundColor = (temperature) => {
  const temperatureDisplay = document.querySelector('.display');
  let differenceWithBase = 0;
  let targetHue = 0;
  let resultMultiplier; 

  switch (true) {
    case (temperature === 10):
      break;
    case (temperature < 10):
      differenceWithBase = 10 - temperature;
      resultMultiplier = differenceWithBase * normalToColdStep;
      break;
    case (temperature > 10):
      differenceWithBase = temperature - 10;
      resultMultiplier = differenceWithBase * normalToHotStep;
      break;
    default:
      break;
  }

  targetHue = baseTemperatueHue + resultMultiplier;
  temperatureDisplay.style.backgroundColor = `hsl(` + targetHue  + `, 100%, 50%)`;
}

function App() {
  let [icon, setIcon] = useState('c');
  let [temperature, setTemperature] = useState(10);
  let [searchInput, setSearchInput] = useState('kiev');

  async function setWeather (city) {
    let received = await getWeather(city);
    console.log('received', received);
    setIcon(received.weather_state_abbr);
    setTemperature(Math.round(received.the_temp));
  }

  useEffect(() => {
    setWeather(searchInput);
  }, []);

  useEffect(() => {
    changeBackgroundColor(temperature);
  })

return (
  <div className='app'>
      <Header
        searchInput = {searchInput}
        setSearchInput = {setSearchInput}
        setWeather = {setWeather}
      />
      <Display 
        icon={icon}
        temperature = { temperature }
      />
      <Footer
        temperature = { temperature }
        changeTemperature = { setTemperature }
      />
  </div>
)};

export default App;
