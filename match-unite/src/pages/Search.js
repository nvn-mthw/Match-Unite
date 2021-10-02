import React from 'react';
import SearchField from "react-search-field";

const Search = (props) => {
return (
    <div>
        <header id="SearchHeader">
            <div className="SearchHeaderWrapper">
            <div>Map</div>
            <SearchField className="SearchBar" placeholder="Location" />
            <div>Filter</div>
            </div>
        </header>
        <body>Search</body>
    </div>
  )
};

export default Search;