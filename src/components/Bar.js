import React from "react";
import Logo from "./Logo";
import Login from "./Login";
import '../styles.css';
import Search from "./Search";

const Bar = (props) => {
    return (
        <div>
            <div className={'bar'}>
                <Logo/>
                <Search setSearch={props.setSearch}/>
                <div className={'flex1'}/>
                <Login/>
            </div>
        </div>
    );
}

export default Bar;