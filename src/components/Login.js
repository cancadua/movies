import React from 'react';
import '../styles.css'
import {useNavigate} from "react-router-dom";

const Login = () => {
  console.log(localStorage.getItem('token'))
    const navigate = useNavigate();

    return (

                <div className={'row'}>
                    {(!localStorage.getItem('token') || localStorage.getItem('token').length === 0) &&
                        <div onClick={() => navigate(`/signup`)}>
                            <p className={'center'}>Sign up</p>
                        </div>
                    }
                    {(!localStorage.getItem('token') || localStorage.getItem('token').length === 0) &&
                        <div onClick={() => navigate(`/signin`)}>
                            <p className={'center'}>Sign in</p>
                        </div>
                    }
                    {!(!localStorage.getItem('token') || localStorage.getItem('token').length === 0) &&
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