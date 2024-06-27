import ListadoEmpleados from "./empleados/ListadoEmpleados";
import Navegacion from "./plantilla/Navegacion";
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <div className='container'>
    <BrowserRouter>
     <Navegacion/>
      <Routes>
        <Route exact path='/' element={<ListadoEmpleados/>}/>
        <Route exact path='/agregar' element={<AgregarEmpleado/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
