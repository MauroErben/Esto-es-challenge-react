import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home'
import ProjectForm from './components/projects/projectForm'
import AppLayout from './components/layout'

function App () {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-project' element={<ProjectForm />} />
          <Route path='/edit-project' element={<ProjectForm />} />
        </Routes>
      </AppLayout>
    </Router>
  )
}

export default App
