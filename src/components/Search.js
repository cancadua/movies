import React from 'react';
import '../styles.css'
import "bootstrap-icons/font/bootstrap-icons.css";


const Search = (props) => {
    return (
        <div className="searchContainer">
            <form>
                <input type="text" placeholder="Search.." name="search"/>
                    <button type="submit"><i className="bi bi-search"/></button>
            </form>
        </div>
    );
};

export default Search;