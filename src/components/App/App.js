import './App.css';

import { useState, useEffect } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Display from '../Display/Display';

import getWeather from '../../api/metaweather';
import colorConverter from '../../utils/colorConverter';

const colorChangeBoundaries = 20;
const baseTemperatueHue = colorConverter('#fff700'); //58
const coldTemperatureHue = colorConverter('#00ffff'); //180
const hotTemperatureHue = colorConverter('#ff8c00'); //33
const normalToColdStep = (coldTemperatureHue - baseTemperatueHue) / colorChangeBoundaries //122 / 20 = 6.1
const normalToHotStep = (hotTemperatureHue - baseTemperatueHue) / colorChangeBoundaries //25 / 20 = -1.25


const changeBackgroundColor = (temperature) => {
  const temperatureDisplay = document.querySelector('.display');
  let differenceWithBase = 0;
  let targetHue = 0;
  let mult; 

  switch (true) {
    case (temperature === 10):
      break;
    case (temperature < 10):
      differenceWithBase = 10 - temperature;
      mult = differenceWithBase * normalToColdStep;
      
      break;
    case (temperature > 10):
      differenceWithBase = temperature - 10;
      mult = differenceWithBase * normalToHotStep;
      break;
    default:
      break;
  }

    targetHue = baseTemperatueHue + mult;
    temperatureDisplay.style.backgroundColor = `hsl(` + targetHue  + `, 100%, 50%)`;
}



function App() {
  let [city, setCity] = useState(null);
  let [icon, setIcon] = useState('');
  let [temperature, setTemperature] = useState(10);

  async function setWeather () {
    let received = await getWeather('kiev');
    console.log('received', received);
    setIcon(received.weather_state_abbr);
    setTemperature(Math.round(received.the_temp));
  }


  useEffect(() => {
    setWeather();
  }, []);

  useEffect(() => {
    changeBackgroundColor(temperature);
  })

return (
  <div className='app'>
      <Header/>
      <Display 
        icon={icon}
        temperature = { temperature }
      />
      {city}
      <Footer
        temperature = { temperature }
        changeTemperature = { setTemperature }
      />
  </div>

);
};


export default App;