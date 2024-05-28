
import Headers from './Layouts/Header'
import Homepage from '../src/Pages/Homepage'
import MovieLists from '../src/Pages/MovieLists'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='justify-center items-center'>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/movies' element={<MovieLists />} />
        </Routes>
      </Router>
      
      
    </div>
  )
}

export default App 