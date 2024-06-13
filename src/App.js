import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import AddCourse from './components/AddCourse';
import SearchCourse from './components/SearchCourse';

import ViewCourse from './components/ViewCourse';




function App() {
  return (
    <div >
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddCourse/>}/>
      <Route path='/search' element={<SearchCourse/>}/>
      
    
      
      <Route path='/Viewcourse' element={<ViewCourse/>}/>
    </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;