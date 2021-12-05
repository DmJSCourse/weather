export default function SearchBar() {
    return (
        <form action="/" method="get">
            <label htmlFor="search">
               Search City By Name
            </label>
            <input
                type="text"
                id="search"
                placeholder="Enter City"
                name="search" 
            />
            <button type="submit">Search</button>
        </form>
  );
}
