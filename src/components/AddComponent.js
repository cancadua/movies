import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';
import {useNavigate} from "react-router-dom";

const Add = () => {

    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate('/add')} className="backTop">
                <i className="bi bi-plus"/>
            </button>
        </div>

    );
};


export default Add;
