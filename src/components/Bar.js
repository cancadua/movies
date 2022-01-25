import React from "react";
import Logo from "./Logo";
import Login from "./Login";
import '../styles.css';
import Search from "./Search";
import {useNavigate} from "react-router-dom";

const Bar = () => {

    return (
        <div>
            <div className={'bar'}>
                <Logo/>
                <Search/>
                <div className={'flex1'}/>
                <Login/>
            </div>
        </div>
    );
}

export default Bar;