import React from 'react';
import '../styles.css';

const MoviesList = (props) => {
    console.log(props)
    return (
        <div className={'flex'}>
            {props.movies.map((movie, index) => (
                <div className={'movieContainer'}>
                    <img key={index} className={'movie'} src={movie.image}/>
                </div>
            ))}
        </div>
    );
};

export default MoviesList;
