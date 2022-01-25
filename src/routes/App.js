import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';
import MoviesList from '../components/MoviesList';
import axios from "axios";
import Footer from "../components/Footer";
import Bar from "../components/Bar";
import AddComponent from "../components/AddComponent";

const App = () => {
    const [movies, setMovies] = useState([]);

    const getMovieRequest = async () => {
        axios.get('https://pr-movies.herokuapp.com/api/movies', {
        }).then((response)=>{
            setMovies(response.data.reverse());
        })
    };

    useEffect(() => {
        getMovieRequest();
    }, []);

    return (
        <div className={'background'}>
            <div className={'listContainer'}>
                <MoviesList
                    movies={movies}
                />

            </div>
            <div>
                <Footer/>
                <Bar/>
            </div>
            <AddComponent/>
        </div>
    );
};

export default App;
