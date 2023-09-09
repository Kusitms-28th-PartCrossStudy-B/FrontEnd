import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import MainPage from './pages/main/main';
import DetailPage from './pages/detail/detail';
import Header from './components/header/Header';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/article/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
