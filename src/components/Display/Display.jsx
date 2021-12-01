import './Display.css';

function Display({ icon }, temperature) {
    return (
        <section className="display">
            <img 
                src= {'https://www.metaweather.com/static/img/weather/' + icon + '.svg'}
                alt='Weather Icon'
                className='icon'
            >
            </img>
        </section>
  );
}

export default Display;


