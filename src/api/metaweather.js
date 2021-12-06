async function getWeather(city) {
    const URL = 'https://www.metaweather.com/api/location/';

    if (!city) {
        function getPosition() {
            return new Promise((resolved, rejected) => {
                navigator.geolocation.getCurrentPosition(resolved, rejected);
            });
        }

        let position = await getPosition();
        let nearbyCities = await fetch(URL + 'search/?lattlong=' + position.coords.latitude + ',' + position.coords.longitude)
            .then((response) => response.json());
        city = await nearbyCities[0].title;
        console.log(city)
    }

    let cityData = await fetch(URL + 'search/?query=' + city);
    let parsedData = await cityData.json();
    let weather = await (await fetch(URL + parsedData[0].woeid + '/')).json();
    let toPass = await weather.consolidated_weather[0];
    return toPass;
}

export default getWeather;
