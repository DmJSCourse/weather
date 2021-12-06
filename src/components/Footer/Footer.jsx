import './Footer.css';

function Footer({ temperature, changeTemperature }) {
    return (
        <footer className="footer">
            <label 
                htmlFor="temperature-bar"
                className="temperature-label"
            >
                Adjust Temperature
            </label>
            <input 
                type='range'
                className='temperature-bar'
                name='temperature-bar'
                min='-10'
                max='30'
                value= {temperature}
                step='1'
                onChange={(event) => changeTemperature(event.target.value)}
            >
            </input>
            <span className="temperature-display">
                {temperature}
            </span>
        </footer>
  );
}

export default Footer;
