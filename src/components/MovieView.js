import React, {useEffect} from 'react'


const MovieView = (props) => {

    useEffect(() => {
    }, [props])

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