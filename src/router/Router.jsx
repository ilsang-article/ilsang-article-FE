import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LikePostsPage from "../pages/LikePostsPage";
import RecentPostsPage from "../pages/RecentPostsPage";
import Layout from "../layout/Layout";
import TestLogin from "../pages/TestLogin";
const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/likeposts" element={<LikePostsPage />} />
          <Route path="/recentposts" element={<RecentPostsPage />} />
          <Route path="/test" element={<TestLogin />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
