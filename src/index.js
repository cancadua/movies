import { render } from "react-dom";
import App from "./App";
import Details from "./Details";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="details/:id"
                   element={<Details />}
            />
            <Route path="/add" element={<App />}/>
            <Route path="/signin" element={<App />}/>
            <Route path="/signup" element={<App />}/>
        </Routes>
    </BrowserRouter>,
    rootElement
);
