import '../styles.css';
import Movie from "./Movie";

const MoviesList = (props) => {

    return (
        <div className={'flex'}>
            {props.movies.map((movie, index) => {
                return (
                    <div className={'moviesContainer'}>
                        <div className={'flex1'} key={index}>
                            <Movie movie={movie} index={index}/>
                        </div>

                    </div>
            )})}
        </div>
    );
};

export default MoviesList;
