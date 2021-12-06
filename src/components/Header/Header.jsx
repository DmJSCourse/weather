import './Header.css';
import SearchBar from '../SearchBar/SearchBar';

function Header({ searchInput, setSearchInput, setWeather }) {
    return (
        <header className="header">
            <h1 className="logo">
                <span className="react">
                    React
                </span>
                 Weather
            </h1>
            <SearchBar 
            searchInput= {searchInput}
            setSearchInput = {setSearchInput}
            setWeather = {setWeather}
        />
        </header>
  );
}

export default Header;
