import React from 'react';
import '../styles.css'
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className={'row'}>
            <div onClick={() => navigate(`/signup`)}>
                <p className={'center'}>Sign up</p>
            </div>
            <div onClick={() => navigate(`/signin`)}>
                <p className={'center'}>Sign in</p>
            </div>
        </div>

    );
};

export default Login;