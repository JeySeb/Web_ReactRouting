import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./components/mascotaDetail";
import Mascotas from "./components/mascotas";
import NavBar from "./components/NavBar";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 return (
   <div className="App">
     <NavBar></NavBar>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Mascotas />} />
         <Route path="/mascotas" element={<Mascotas />} />
         <Route path="/mascotas/:mascotaId" element={<Detail />} />
       </Routes>
     </BrowserRouter>
   </div>
 );
}

export default App;