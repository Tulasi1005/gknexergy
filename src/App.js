import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Homebanner from "./components/Home/Homebanner";
import AINetwork from "./components/Home/AINetwork";
import CarouselComponent from "./CarouselComponent";
import StartHere from "./components/Home/subgroup";

import Navbar from "./Navbar";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default function App() {
  return (
    <Routes>
      {/* First landing page */}

      <Route path="/" element={<Home />} />

      {/* Pages with the navbar */}

      <Route
        path="/start-here"
        element={
          <MainLayout>
            {/* <Homebanner /> */}
            <AINetwork />
          </MainLayout>
        }
      />

      <Route
        path="/courses"
        element={
          <MainLayout>
            <CarouselComponent />
          </MainLayout>
        }
      />

      <Route
        path="/subgroup/:service"
        element={
          <MainLayout>
            <StartHere />
          </MainLayout>
        }
      />
    </Routes>
  );
}