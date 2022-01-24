import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom";


const Movie = (props, index) => {
    const [id, setId] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        setId(props.movie.id)
        props.movie.content?.substr(0,100)
    }, [props])

    const goDetails = () => {
        navigate(`/details/${id}`, {state: id});
    }
    return (
            <div className={'movieContainer'}>
                <img onClick={() => {goDetails()}} src={props.movie.image} className={'movie'} alt={''} />
                <div className={'flex1'}>
                    <p className={'title'} onClick={() => {goDetails()}}>{props.movie.title}</p>
                    <p className={'description'} onClick={() => {goDetails()}}>{props.movie.content}</p>
                </div>
            </div>
    )
}

export default Movie;