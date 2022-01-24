import React from 'react';

const Login = () => {
    return (
        <div>
            <img src={'../login.png'} alt className={'login'} onClick={() => console.log("Clicked")}/>
        </div>
    );
};

export default Login;