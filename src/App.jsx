
import Header from './components/header/header'
import Jumbotron from './components/jumbotron/jumbotron'
import "./app.css"
import { Login } from './routes/Login'
import { Register } from './routes/Register'
import Showroom from './components/showroom/showroom'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
        <Header />
        <Jumbotron />
        <Showroom />
    </>
  )
}

export default App
