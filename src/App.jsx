
import Header from './components/header/header';
import Jumbotron from './components/jumbotron/jumbotron';
import "./app.css";
import Showroom from './components/showroom/showroom';
import { Route, Routes } from 'react-router-dom'
import { Login } from "./routes/Login/Login";
import { UserProvider } from "./context/UserContext";
import { ProductDetail } from './components/ProductDetail/ProductDetail';
import MiPerfil from './routes/Login/MiPerfil';

const App = () => (

  <>
    <UserProvider>
      <Header />
      <Jumbotron />

      <Routes>

        <Route path="/home" />
        <Route path="/login" element={<Login />} />
        <Route path="/showroom" element={<Showroom />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/miperfil" element={<MiPerfil />} />

      </Routes>
    </UserProvider>
  </>
);

export default App;
