import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Footer from "../components/Footer";
import Bar from "../components/Bar";
const axios = require('axios');

const Signup = () => {
    const [state, setState] = useState({account: {username: '', email: '', password: ''}})
    const [error, setError] = useState({})
    const navigate = useNavigate();
    const validate = () => {
        const errors = {};

        if (state.account.username.trim() === '') {
            errors.username = 'Username is required!';
        }
        if (state.account.email.trim() === '') {
            errors.password = 'Email is required!';
        }
        if (state.account.password.trim() === '') {
            errors.password = 'Password is required!';
        }

        return Object.keys(errors).length === 0 ? null : errors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validate();
        setError({errors: errors || {}});
        if (errors) return;

        axios({
            method: 'post',
            url: 'https://pr-movies.herokuapp.com/api/user/create',
            data: {
                name: state.account.username,
                email: state.account.email,
                password: state.account.password
            }
        }).then((response) => {
            console.log(state.account)
            navigate('/');
        }).catch((error) => {
            const errors = {};
            console.log(state.account)
            errors.password = 'Given username doesn\'t exists or password is wrong!';
            setError({errors: errors || {}});
            console.log(error);
        });
    };

    const handleChange = (event) => {
        const account = {...state.account};
        account[event.currentTarget.name] = event.currentTarget.value;
        setState({account});
    };

    return (
        <div className={'background'}>
            <div>
                <h1 className={'movieTitle'}>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Name</label>
                        <input value={state.account.username}
                               name="username"
                               onChange={handleChange}
                               type="text"
                               className="form-control"
                               id="username"
                               aria-describedby="emailHelp"
                               placeholder="Username"/>
                        {error.username &&
                            <div className="alert alert-danger">{error.username}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input value={state.account.email}
                               name="email"
                               onChange={handleChange}
                               type="email"
                               className="form-control"
                               id="email"
                               aria-describedby="emailHelp"
                               placeholder="Email"/>
                        {error.email &&
                            <div className="alert alert-danger">{error.email}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input value={state.account.password}
                               name="password"
                               onChange={handleChange}
                               type="password"
                               className="form-control"
                               id="password"
                               placeholder="Password"/>
                        {error.password &&
                            <div className="alert alert-danger">{error.password}</div>}
                    </div>
                    <button type="submit" className="submitButton">SignUp</button>
                </form>
            </div>
            <div>
                <Footer/>
                <Bar/>
            </div>
        </div>
    );
}

export default Signup;