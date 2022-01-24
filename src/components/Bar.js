import React from "react";
import Logo from "./Logo";
import Login from "./Login";
import '../styles.css';
import Search from "./Search";
import {useNavigate} from "react-router-dom";

const Bar = () => {

    return (
        <navbar>
            <div className={'bar'}>
                <Logo/>
                <Search/>
                <div className={'flex1'}/>
                <Login/>
            </div>
        </navbar>
    );
}

export default Bar;