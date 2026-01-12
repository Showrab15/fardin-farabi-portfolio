// page.js

import Banner from "./components/Banner";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Wid from "./components/Wid";

export default function Home() {
  return (
    <>
    <Banner/>
    {/* <Projects/> */}
    <Experience/>
    <Wid/>
    </>
  );
}
