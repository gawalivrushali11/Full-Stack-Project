
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AddProduct from './Components/AddProduct';
import EditProduct from './Components/EditProduct';
import Outofwarranty from './Components/Outofwarranty';
import Search from './Components/Search';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/addProduct" element={<AddProduct/>}></Route>
        <Route path="/editProduct/:id" element={<EditProduct/>}></Route>
        <Route path="/outofwarranty" element={<Outofwarranty/>}></Route>
        <Route path="/searchbyquery/:searchquery" element={<Search/>}></Route>
      </Routes>


    </div>
  );
}

export default App;
