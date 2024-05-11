/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes ,Route ,Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
// import NotFound from './components/NotFound';

function App() {
  return (
    <>

<nav>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
  </ul>
</nav>

    
<Routes>

<Route path='/' element={< Home/>}/> 
   <Route path="about" element={< About/>} />
   <Route path="/contact" element={< Contact/>} />


</Routes>

</>
  );
}

export default App;


// <Router>
// <div>
//   <Switch>
//     <Route exact path="/" element={<Home />} />
//     <Route path="about" element={About} />
//     <Route path="/contact" element={Contact} />
//     <Route path="*" element={NotFound} /> {/* Corrected typo and added catch-all route */}
//   </Switch>
// </div>
// </Router>