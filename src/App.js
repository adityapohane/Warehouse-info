
import './App.css';

import { Routes, Route } from 'react-router-dom';

import DisplayTable from './features/counter/DisplayTable';
import EditData from './features/counter/EditData';
function App() {

  return (
    
    <>
      <Routes>
        <Route path='/' element={<DisplayTable />}></Route>
        <Route path='/edit' element={<EditData />}></Route>
   </Routes>
    </>
  )
}

export default App
