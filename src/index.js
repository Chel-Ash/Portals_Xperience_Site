import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Games from "./pages/Games";
import Film from "./pages/Film";
import Team from "./pages/Team";
import Docs from "./pages/Docs";
// import App from "./App";
// import About from "./Second";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="games" element={<Games />} />
          <Route path="films" element={<Film />} />
          <Route path="team" element={<Team />} />
          <Route
            path="https://cheloverboard.gitbook.io/portals-x/"
            element={<Docs />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(<About />, document.getElementById("about"));
