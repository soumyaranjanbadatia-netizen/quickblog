import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import BlogList from "../components/BlogList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Home = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    if (location.state?.scrollTo !== "footer") {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    requestAnimationFrame(() => {
      const footer = document.getElementById("footer");

      footer?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
  return (
    <>
      <Navbar />
      <Header />
      <BlogList />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
