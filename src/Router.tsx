import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
//import MainPage from './pages/main/main';
//import PostPage from './pages/post/post';
import ModifyPage from './pages/modify/modify';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ModifyPage />} />
        {/* <Route path="/post" element={<PostPage />} /> */}
        {/* <Route path="/modify" element={<ModifyPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
