import './App.css';
import Home from './Home';
import About from './About';
import Hello from './Hello';

// ----------------------------------------------
// IMPORT ROUTER

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// ----------------------------------------------

function App() {
    return (
        <Router>
            <h1>Nav</h1>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/hello' element={<Hello />} />
                </Routes>
            <h1>Footer</h1>
        </Router>
 );
}

export default App;
