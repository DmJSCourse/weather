async function getWeather(city) {
    // const URL = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/';
    const URL = 'https://www.metaweather.com/api/location/';




    if (!city) {
        let coords = await new Promise(() => {
            navigator.geolocation.getCurrentPosition(success, error);

            function success(position) {
                return [position.coords.latitude, position.coords.longitude]
            }
            function error(err) {
                alert(`ERROR(${err.code}): ${err.message}`);
            }
        }).then((result)=> {
            console.log('res', result)
        })

        let result1 = coords;
            
        let nearbyCities = await fetch(URL + 'search/?lattlong=' + result1[0] + ',' + result1[1])
            .then((response) => response.json());
        city = await nearbyCities[0].title;
        console.log(city)
    }

let cityData = await fetch(URL + 'search/?query=' + city);
// console.log('cityData', cityData);
let parsedData = await cityData.json();
// console.log('parsed', parsedData[0].woeid);
let weather = await (await fetch(URL + parsedData[0].woeid + '/')).json();
// console.log('weather', weather);
let toPass = await weather.consolidated_weather[0];
// console.log('topass', toPass)

return toPass;
}

export default getWeather;
