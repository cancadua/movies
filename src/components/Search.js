import React, {useState} from 'react';
import '../styles.css'
import "bootstrap-icons/font/bootstrap-icons.css";


const Search = (props) => {
    const [state, setState] = useState('')

    return (
        <div className="searchContainer">
            <form>
                <input onChange={(event) => setState(event.target.value)} type="text" placeholder="Search.." name="search"/>
                    <button type="submit" onClick={(e) => {
                        e.preventDefault();
                        props.setSearch(state)
                    }}><i className="bi bi-search"/>

                    </button>
            </form>
        </div>
    );
};

export default Search;