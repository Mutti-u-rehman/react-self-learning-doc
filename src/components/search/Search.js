import "./Search.scss";

const Search = () => {
    return (
        <div className="search">
            <label className="search-field">
                <span className="search-icon" aria-hidden="true">⌕</span>
                <input type="search" aria-label="Search restaurants" placeholder="Search restaurants or cuisines" />
            </label>
            <button type="button">Search</button>
        </div>
    );
}


export default Search;