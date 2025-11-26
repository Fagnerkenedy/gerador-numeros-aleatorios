import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import Formulario from "../components/form/Formulario";
import List from "../components/list/List";

const RoutesApp = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/form" element={<Formulario />}></Route>
        <Route path="/list" element={<List />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default RoutesApp;
