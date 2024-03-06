import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './component/Layout/HomePage';
import ToDoListPage from './page/HomePage/ToDoListPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>  
          <Route path='/ToDoListPage'  element={<ToDoListPage/>}/>
        </Routes>
    
    </BrowserRouter>
  );
}

export default App;
