import './Header.css';
import SearchBar from '../SearchBar/SearchBar';

function Header() {
    return (
        <header className="header">
            <span className="logo">
                React Weather App
            </span>
        <SearchBar />
        </header>
  );
}

export default Header;
