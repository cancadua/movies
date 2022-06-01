import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';
import Footer from "../components/Footer";
import Bar from "../components/Bar";
import '../styles.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";


const Add = () => {
    const [state, setState] = useState({movie: {title: '', url: '', content: ''}})

    const navigate = useNavigate();
    const sendMovie = (event) => {
        event.preventDefault();
        axios({
            method: 'post',
            url: 'https://movies-api-ag.herokuapp.com/api/movies',
            data: {
                title: state.movie.title,
                image: state.movie.url,
                content: state.movie.content
            }
        }).then(() => {
            navigate('/');
        }).catch((error) => {
            console.log(error);
        });
    }

    const handleInputChange = (event) => {
        const movie = {...state.movie};
        movie[event.currentTarget.name] = event.currentTarget.value;
        setState({movie});
    }

    return (
        <div>
            <div className={'background'}>
                <form className={'movieViewContainer'} onSubmit={sendMovie}>
                    <div className={'uploadContainer'}>
                        <label htmlFor="file-input" className={'uploadLabel'}>
                            <img src={state.movie.url} className={'movieUpload'} alt={''}/>
                        </label>
                        <textarea name={'url'} placeholder={'Url...'} className={'uploadTitle'} onBlur={handleInputChange}/>
                    </div>
                    <div className={'flex1'}>
                        <textarea name={'title'} placeholder={'Title...'} className={'uploadTitle'} onChange={handleInputChange}/>
                        <textarea name={'content'} placeholder={'Description...'} className={'uploadContent'} onChange={handleInputChange}/>
                        <input type="submit" value="Submit" className={'submitButton'}/>
                    </div>
                </form>
            </div>
            <div>
                <Footer/>
                <Bar/>
            </div>
        </div>
    );
};


export default Add;
