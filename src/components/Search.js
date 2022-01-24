import React from 'react';
import '../styles.css'

const Search = (props) => {
    return (
        <div className={'search'}>
            <input
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
                placeholder='Type to search...'
            ></input>
        </div>
    );
};

export default Search;