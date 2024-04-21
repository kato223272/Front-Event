import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import {Inicio} from './Inicio'

function App() {


  return (
    <>
     <Router>
        <Routes>
          <Route path='/' element={<Inicio/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
