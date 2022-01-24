import React from 'react';
import '../styles.css';
import {useNavigate} from "react-router-dom";


const Logo = () => {
    const navigate = useNavigate();
    return (
        <img src={'../logo.png'} alt className={'logo'} onClick={() => navigate('/')}/>
    );
};

export default Logo;