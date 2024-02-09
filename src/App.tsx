import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Courses from './pages/Courses'
import Course from './pages/Course'
import Dashboard from './pages/Dashboard'


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<Course />} />
        <Route path="/student/:id" element={<Dashboard />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Router>
  )
}

export default App
