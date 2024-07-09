
import './boostrap.css';
import Regform from './regform.js'
import Signup from './signup.js';
import Form from './layout.js';
import Login from '.login.js';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Form/>}>
      <Route index element ={<Regform/>}></Route>
      <Route path="login" element={<Login/>}></Route>
      <Route path="signup" element={<Signup/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </>

  );
}
export default App;
