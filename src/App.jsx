
import Header from './components/header/header';
import Jumbotron from './components/jumbotron/jumbotron';
import "./app.css";
import { Login } from './routes/Login';
import Showroom from './components/showroom/showroom';
import { Route, Routes } from 'react-router-dom'

const App = () => (

  <>
    <Header />
    <Jumbotron />
    <Showroom />
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>

  </>
);

export default App;
