async function partialSearch (text) {
    const URL = 'https://www.metaweather.com/api/location/search/?query=';
    let list = [];

    let possibleCities = await fetch(URL + text);
    let parsedData = await possibleCities.json();
    list = await parsedData.map((el) => el.title);
    return list;
}

export default partialSearch;
