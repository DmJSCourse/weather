import './SearchBar.css';

export default function SearchBar({ searchInput, setSearchInput, setWeather }) {
    function handleClick(event) {
        event.preventDefault();
        setWeather(searchInput);
    }

    return (
        <form action="/" method="get" className="form">
            <label htmlFor="search">
               Search City By Name
            </label>
            <input
                type='text'
                id='search'
                className='search'
                placeholder='Enter City'
                value={searchInput}
                name='search'
                onChange={(event) => {
                    setSearchInput(event.target.value);
                }}
            >
            </input>
            <button 
                type="submit"
                className="search-button"
                onClick = {handleClick}
            >
                Search
            </button>
        </form>
  );
}
