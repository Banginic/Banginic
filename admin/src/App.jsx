import { Suspense,  useContext, } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Home, useTitle, useToggleSidebar, Loading, Footer, Sidebar, Navbar, useToggleNavbar } from "./components/exportComp";

import {
  Employee,
  Messages,
  News,
  Projects,
  Testimonial,
  ViewEmployee,
  ViewMessage,
  ViewProject,
  Login
} from "./components/LazyExports";
import AppContext from "./context/AppContext";

function App() {
const { showNavbar } = useContext(AppContext)
 
  //custom hooks
  useTitle()
  useToggleNavbar()
  useToggleSidebar()

 
  return (
    <div className=" relative">
      <header
        className={`${showNavbar ? "fixed top-0 right-0 left-0" : "static"}`}
      >
        <Navbar />
        <div >
        </div>
      </header>
          <Sidebar />
      <main className="">
        <ToastContainer />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/message" element={<Messages />} />
            <Route path="/login" element={<Login />} />
            <Route path="/messages/:messageId" element={<ViewMessage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ViewProject />} />
            <Route path="/news" element={<News />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/employee/:employeeId" element={<ViewEmployee />} />
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
