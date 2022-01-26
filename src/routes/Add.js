import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';
import Footer from "../components/Footer";
import Bar from "../components/Bar";
import '../styles.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";


const Add = () => {
    const [state, setState] = useState({movie: {title: '', content: ''}})
    const [image, setImage] = useState('');

    const navigate = useNavigate();
    const sendMovie = (event) => {
        event.preventDefault();
        console.log(state)
        axios({
            method: 'post',
            url: 'https://pr-movies.herokuapp.com/api/movies',
            data: {
                title: state.movie.title,
                image: image,
                content: state.movie.content
            }
        }).then((response) => {
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

    const handleImageChange = (event) => {
        setImage(URL.createObjectURL(event.target.files[0]));
    }

    return (
        <div>
            <div className={'background'}>
                <form className={'movieViewContainer'} onSubmit={sendMovie}>
                    <div className={'uploadContainer'}>
                        <label htmlFor="file-input" className={'uploadLabel'}>
                            {(image && <img src={image} className={'movieUpload'} alt={''}/>) ||
                                <img src={'../upload.png'} className={'movieUpload'} alt={''}/>}
                        </label>
                        <input className="imageUpload" id="file-input" type="file" onChange={handleImageChange}/>
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
