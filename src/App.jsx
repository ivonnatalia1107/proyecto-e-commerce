
import Header from './components/header/header';
import Jumbotron from './components/jumbotron/jumbotron';
import "./app.css";
import Showroom from './components/showroom/showroom';
import { Route, Routes } from 'react-router-dom'
import { Login } from "./routes/Login/Login";
import { UserProvider } from "./context/UserContext";
import { ProductDetail } from './components/ProductDetail/ProductDetail';
import MiPerfil from './routes/MiPerfil/MiPerfil';

const App = () => (

  <>
    <UserProvider>
      <Header />

      <Routes>

        <Route path="/" element={<Jumbotron />} />
        <Route path="/home" element={<Jumbotron />} />
        <Route path="/login" element={<Login />} />
        <Route path="/showroom" element={<Showroom />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/miperfil" element={<MiPerfil />} />

      </Routes>
    </UserProvider>
  </>
);

export default App;
