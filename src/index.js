import { render } from "react-dom";
import App from "./routes/App";
import Details from "./routes/Details";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Add from "./routes/Add";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="details/:id"
                   element={<Details />}
            />
            <Route path="/add" element={<Add />}/>
            <Route path="/signin" element={<App />}/>
            <Route path="/signup" element={<App />}/>
        </Routes>
    </BrowserRouter>,
    rootElement
);
