import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import react from 'react';
import Home from './Components/Pages/Home/Home';
import Details from './Components/Pages/Details/Details';
// import Countries from './Components/Countries'
// import Country from './Components/Country';
// import Header from './Components/Header';
// import Error from './Components/Error'

function App() {
  return (
    <div className='header'>
     <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details' element={<Details />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
