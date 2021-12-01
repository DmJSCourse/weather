const getWeather = (city, lattitude, longitude) => {
    const URL = 'https://www.metaweather.com/api/location/search/';
    let query = '';

    if(city) {
        query = '?query=' + city;
    } else {
        query = '?lattlong=' + lattitude + ',' + longitude;
    }

    fetch(URL + query)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        });
}


export default getWeather;
