// page.js

import Banner from "./components/Banner";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Projects from "./components/O";
import References from "./components/References";
import AboutServices from "./components/Services";
import Wid from "./components/Wid";

export default function Home() {
  return (
    <>
    <Banner/>
    <Projects/>
    <Experience/>
    <Wid/>
    <References/>
    <AboutServices/>
    <Footer/>
    </>
  );
}
