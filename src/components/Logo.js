import React from 'react';
import '../styles.css';
import {useNavigate} from "react-router-dom";


const Logo = () => {
    const navigate = useNavigate();
    return (
        <div className={'home'} onClick={() => navigate('/')}>
            <p className={'homeText'}>MOVIES</p>
        </div>
    );
};

export default Logo;