import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';
import {useParams} from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import Bar from "../components/Bar";
import MovieView from "../components/MovieView";

const Details = () => {
    const { id } = useParams();
    const [ data, setData ] = useState(undefined)

    useEffect(() => {
        axios.get(`https://pr-movies.herokuapp.com/api/movies/${id}`)
            .then(response => setData(response.data)
        )}, [id]);

    return (
        <div className={'background'}>
            {data && <div>
                <MovieView movie={data}/>
            </div>}
            <div>
                <Footer/>
                <Bar/>
            </div>
        </div>

    );
};


export default Details;
