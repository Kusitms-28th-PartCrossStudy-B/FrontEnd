import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
//import MainPage from './pages/main/main';
//import PostPage from './pages/post/post';
//import ModifyPage from './pages/modify/modify';
import PostPage from './pages/post/post';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostPage />} />
        {/* <Route path="/post" element={<PostPage />} /> */}
        {/* <Route path="/modify" element={<ModifyPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
