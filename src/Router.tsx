import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
//import MainPage from './pages/main/main';
import PostPage from './pages/post/post';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostPage />} />
        {/* <Route path="/post" element={<PostPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
