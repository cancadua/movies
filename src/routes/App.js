import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';
import MoviesList from '../components/MoviesList';
import axios from "axios";
import Footer from "../components/Footer";
import Bar from "../components/Bar";
import AddComponent from "../components/AddComponent";

const App = () => {
    const [search, setSearch] = useState('')
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
                {search && movies ?
                    <MoviesList movies={movies.filter(item => {
                        if(item.title !== undefined)
                            return item.title.includes(search)
                        return false
                    })}/> :
                    <MoviesList movies={movies}/>
                }


            </div>
            <div>
                <Footer/>
                <Bar setSearch={setSearch}/>
            </div>
            <AddComponent/>
        </div>
    );
};

export default App;
