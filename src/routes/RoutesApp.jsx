import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import Formulario from "../components/form/Formulario";
import List from "../components/list/List";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/gerador-numeros-aleatorios/" element={<Home />}></Route>
        <Route path="/gerador-numeros-aleatorios/form" element={<Formulario />}></Route>
        <Route path="/gerador-numeros-aleatorios/list" element={<List />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
