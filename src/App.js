import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SinglePlant from './pages/SinglePlant'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
function App() {

//   const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': process.env.REACT_APP_PLANT_API_KEY,
// 		'X-RapidAPI-Host': 'house-plants.p.rapidapi.com'
// 	}
// };

// fetch('https://house-plants.p.rapidapi.com/all', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));



  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='plant/:id' element={<SinglePlant />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
