import './App.css';
import { ListaUsuarios } from './components/ListaUsuarios';
import { AgregarUsuario } from './components/AgregarUsuario';
import { EditarUsuario } from './components/EditarUsuario'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Usuario } from './components/Usuario';
function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListaUsuarios />} />
        <Route path='/usuario' element={<Usuario />} />
        <Route path='/agregarUsuario' element={<AgregarUsuario />} />
        <Route path='/editarUsuario/:id' element={<EditarUsuario />} />
      </Routes>
    </BrowserRouter>
      </div>
  );
}

export default App;
