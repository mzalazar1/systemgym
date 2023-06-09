import { Route, Routes } from "react-router-dom";
import Home from "./Screens/Home/index";
import Socios from "./Screens/Socios/Index2";
// import Productos from './Screens/Productos';
import FormAdd from './Screens/FormAdd';
import FormEdit from './Screens/FormEdit';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/socios" element={<Socios />} />
      <Route path="/addsocio" element={<FormAdd />} />
      <Route path='/edit/:id' element={<FormEdit />} />
    </Routes>
  );
}
export default App;