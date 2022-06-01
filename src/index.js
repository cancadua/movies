import { render } from "react-dom";
import App from "./routes/App";
import Details from "./routes/Details";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Add from "./routes/Add";
import Signup from "./routes/Signup";
import Signin from "./routes/Signin";

const PrivateRoute = () => {
    return (!(!localStorage.getItem('token') || localStorage.getItem('token').length === 0)) ? <Add/> : <Navigate to="/signin"/>;
};

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/movies" element={<App />}/>
            <Route path="details/:id" element={<Details />}/>

            <Route path='/' element={<PrivateRoute/>}>
                <Route path='/add' element={<Add/>}/>
            </Route>

            <Route path="/signin" element={<Signin />}/>
            <Route path="/signup" element={<Signup />}/>
        </Routes>
    </BrowserRouter>,
    rootElement
);
