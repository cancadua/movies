import '../styles.css';
import {useNavigate} from "react-router-dom";
import Movie from "./Movie";

const MoviesList = (props) => {
    const navigate = useNavigate();

    const goDetails = (id) => {
        navigate(`/details/${id}`);
    }

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
