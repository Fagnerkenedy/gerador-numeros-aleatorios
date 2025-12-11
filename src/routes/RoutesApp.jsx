import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import Formulario from "../components/form/Formulario";
import List from "../components/list/List";
import { AliveScope, KeepAlive } from 'react-activation';

const RoutesApp = () => {
  return (
    <HashRouter>
      <AliveScope>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/form" element={<KeepAlive id="form"><Formulario /></KeepAlive>}></Route>
          <Route path="/list" element={<List />}></Route>
        </Routes>
      </AliveScope>
    </HashRouter>
  );
};

export default RoutesApp;
