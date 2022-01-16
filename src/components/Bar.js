import React from "react";
import Logo from "./Logo";
import Login from "./Login";
import '../styles.css';
import Search from "./Search";

const Bar = () => (
    <navbar>
        <div className={'bar'}>
            <Logo/>
            <Search/>
            <Login/>
        </div>
    </navbar>
);

export default Bar;