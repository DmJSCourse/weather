import './Footer.css';

function Footer({ temperature, changeTemperature }) {
    return (
        <footer className="footer">
            <label htmlFor="temperatureBar">Adjust temperature</label>
            <input 
                type='range'
                className='temperatureBar'
                name='temperatureBar'
                min='-10'
                max='30'
                value= {temperature}
                step='1'
                onChange={(event) => changeTemperature(event.target.value)}
            >
            </input>
            {temperature}
        </footer>
  );
}

export default Footer;
