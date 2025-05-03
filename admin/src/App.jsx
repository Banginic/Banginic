import { Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Loading, Footer, Sidebar, Navbar } from "./components/exportComp";
import { Home } from "./components/exportComp";
import {
  Employee,
  Messages,
  News,
  Projects,
  Testimonial,
  ViewEmployee,
  ViewMessage,
  ViewProject,
} from "./components/LazyExports";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [scroll, setScroll] = useState(false);

  function handleScroll() {
    setScroll(!scroll);
  }
  useEffect(() => {
    const offSet = pageYOffset;
    if (offSet > 500) {
      setShowNavbar(true);
    }
    if (offSet < 5) {
      setShowNavbar(false);
    }
  }, [scroll]);

  document.addEventListener("scroll", handleScroll);
  return (
    <div className="min-h-screen relative">
      <header
        className={`${showNavbar ? "fixed top-0 right-0 left-0" : "static"}`}
      >
        <Navbar />
        <div>
          <Sidebar />
        </div>
      </header>
      <main className="min-h-[70dvh]">
        <ToastContainer />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/message" element={<Messages />} />
            <Route path="/messages:/messageId" element={<ViewMessage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects:/projectId" element={<ViewProject />} />
            <Route path="/news" element={<News />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/employee:/employeeId" element={<ViewEmployee />} />
          </Routes>
        </Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
