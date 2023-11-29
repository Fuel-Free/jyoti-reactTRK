import Header from "./components/Header";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from "./components/Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from "./components/User";
import Update from "./components/Update";
function App() {
  return (
   <div>
   <BrowserRouter>
       <Header />
    <Routes>
      <Route path="/register" element={<Register/>} />
      <Route path="/" element={<Users/>} />
      <Route path="/edit" element={<Update/>} />
    </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
