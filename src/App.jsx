import React from 'react'
import Form from './components/Form'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import AuthPage from './pages/AuthPage'

const App = () => {
  return (
    <>
      {/* <Form /> */}
      <Routes>
        <Route path="/" element={<AuthPage />}/>
        <Route path='/Home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
