// const getWeather = (city, lattitude, longitude) => {
//     const URL = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/';
//     let query = '';

//     if(city) {
//         query = 'search/?query=' + city;
//     } else {
//         query = 'search/?lattlong=' + lattitude + ',' + longitude;
//     }

//     fetch(URL + query)
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//            console.log(data[0].title);
//            fetch(URL + data[0].woeid + '/') 
//             .then((response) => {return response.json(); })
//             .then((data) => {weather = data})
//         });

//     return weather;
// }


// async function getWeather(city, lattitude, longitude) {
//     const URL = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/';

//     if (!city) {
//         let nearbyCities = await 
//             fetch(URL + 'search/?lattlong=' + lattitude + ',' + longitude)
//             .then((response) => response.json());
//         city = await nearbyCities[0].title;
//     }

//     console.log('city', city);

//     let woeid = await 
//         fetch(URL + 'search/?query=' + city)
//         .then((response) => response.json())
//         .then((cityData) => { return cityData.woeid });

//     console.log ('woeid', woeid);
    
//     let weatherData = await 
//         fetch(URL + woeid + '/')
//         .then((response) => response.json());

//     console.log('return', weatherData);
//     return weatherData;
//   }

// export default getWeather;

async function getWeather(city, lattitude, longitude) {
    const URL = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/';

    if (!city) {
        let nearbyCities = await 
            fetch(URL + 'search/?lattlong=' + lattitude + ',' + longitude)
            .then((response) => response.json());
        city = await nearbyCities[0].title;
        console.log('city', city);
    }

await fetch(URL + 'search/?query=' + city)
        .then((response) => response.json())
        .then((cityData) => { 
            fetch(URL + cityData[0].woeid + '/')
                .then((response) => response.json())
                .then((geoData) => {
                    console.log(geoData.consolidated_weather[0])
                    return geoData.consolidated_weather[0]});
         });
  }

export default getWeather;
