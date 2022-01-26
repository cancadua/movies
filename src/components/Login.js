import React from 'react';
import '../styles.css'
import {useNavigate} from "react-router-dom";
import {isExpired} from "react-jwt";

const Login = () => {
    const navigate = useNavigate();
    console.log(isExpired(localStorage.getItem('token')))

    return (

                <div className={'row'}>
                    {isExpired(localStorage.getItem('token')) &&
                        <div onClick={() => navigate(`/signup`)}>
                            <p className={'center'}>Sign up</p>
                        </div>
                    }
                    {isExpired(localStorage.getItem('token')) &&
                        <div onClick={() => navigate(`/signin`)}>
                            <p className={'center'}>Sign in</p>
                        </div>
                    }
                    {!isExpired(localStorage.getItem('token')) &&
                        <div onClick={() => {
                            localStorage.removeItem('token')
                            navigate('/')
                        }}>
                            <p className={'center'}>Log out</p>
                        </div>
                    }
                </div>
    );
};

export default Login;