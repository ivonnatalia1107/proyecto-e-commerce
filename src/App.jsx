
import Header from './components/header/header';
import Jumbotron from './components/jumbotron/jumbotron';
import "./app.css";
import Showroom from './components/showroom/showroom';
import { Route, Routes } from 'react-router-dom'
import { Login } from "./routes/Login/Login";
import { UserProvider } from "./context/UserContext";


const App = () => (

  <>
        <UserProvider>
    <Header />
    <Jumbotron />

    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/showroom" element={<Showroom />} />

    </Routes>
    </UserProvider>
  </>
);

export default App;
