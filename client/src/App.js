import './App.css';
import Post from './Post';
import Header from './Header';
import {Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage"
import Layout from './Layout';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/register'} element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
