import './Footer.css';

function Footer({ temperature, changeTemperature }) {
    return (
        <footer className="footer">
            <label for="temperatureBar">Adjust temperature</label>
            <input 
                type='range'
                className='temperatureBar'
                name='temperatureBar'
                min='0'
                max='40'
                value= {temperature}
                step='1'
            >
            </input>
        </footer>
  );
}

export default Footer;
