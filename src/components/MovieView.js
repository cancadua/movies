import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom";


const MovieView = (props, index) => {
    const [id, setId] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        setId(props.movie.id)
    }, [props])

    const goDetails = () => {
        navigate(`/details/${id}`, {state: id});
    }
    return (
        <div className={'movieViewContainer'}>
            <img src={props.movie.image} className={'movieView'} alt={''} />
            <div className={'flex1'}>
                <p className={'movieTitle'}>{props.movie.title}</p>
                <p className={'movieContent'}>{props.movie.content}</p>
            </div>
        </div>
    )
}

export default MovieView;