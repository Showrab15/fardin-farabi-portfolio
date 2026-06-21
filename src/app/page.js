// page.js

import Banner from "./components/Banner";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import References from "./components/References";
import Wid from "./components/Wid";

export default function Home() {
  return (
    <>
      <Banner />
      <Projects />
      <Experience />
      <Wid />
      <References />
      <Footer />
    </>
  );
}
