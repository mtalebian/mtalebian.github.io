import { Route, Routes } from "react-router-dom";
import { HomeApp } from "./views/home/home-app";
import { BasicDesignApp } from "./views/basic-design/basic-design-app";

import "bootstrap/scss/bootstrap.scss";
import "react-basic-design/dist/index.scss";

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<HomeApp />} />
            <Route path="/react-basic-design/:comp" element={<BasicDesignApp />} />
        </Routes>
    );
}

export default App;
