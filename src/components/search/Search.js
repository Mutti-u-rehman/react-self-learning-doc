import "./Search.scss";
import { useState } from "react";

const Search = ({ onSearch }) => {
    const [searchInput, setSearchInput] = useState("");

    return (
        <div className="search">
            <label className="search-field">
                <span className="search-icon" aria-hidden="true">⌕</span>
                <input type="search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} aria-label="Search restaurants" placeholder="Search restaurants or cuisines" />
            </label>
            <button type="button" onClick={() => {onSearch(searchInput)}}>Search</button>
        </div>
    );
}


export default Search;