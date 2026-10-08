
import { Routes, Route, useLocation } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Layout from "./pages/admin/Layout";
import Dashboard from "./pages/admin/Dashboard";
import AddBlog from "./pages/admin/AddBlog";
import ListBlog from "./pages/admin/ListBlog";
import Comments from "./pages/admin/Comments";
import Login from "./components/admin/Login";
import "quill/dist/quill.snow.css";
import { Toaster } from "react-hot-toast";
import { useAppContext } from "./context/AppContext";
import Register from "./components/admin/Register";
import Navbar from "./components/Navbar";

import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Mission from "./pages/Misson";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import { useEffect } from "react";
const App = () => {
  const { token } = useAppContext();
    const location = useLocation();

 useEffect(() => {
  if (location.state?.scrollTo === "footer") {
    return;
  }

  window.scrollTo(0, 0);
}, [location.pathname, location.state]);
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/about/footer" element={<Footer />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/admin/login"
          element={
            <>
              <Navbar />
              <Login />
            </>
          }
        />

        <Route
          path="/admin/register"
          element={
            <>
              <Navbar />
              <Register />
            </>
          }
        />
        <Route
          path="/admin"
          element={
            token ? (
              <Layout />
            ) : (
              <>
                <Navbar />
                <Login />
              </>
            )
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="addBlog" element={<AddBlog />} />
          <Route path="listBlog" element={<ListBlog />} />
          <Route path="comments" element={<Comments />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
