import React from 'react';
const SearchBox = ({search, onSearchChange}) => {
    return <input type="search" name="search" placeholder="Search your fav Noob" onChange={onSearchChange}/>
}

export default SearchBox;