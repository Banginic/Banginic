import { Suspense, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  Home,
  useTitle,
  // useToggleSidebar,
  Loading,
  Footer,
  Sidebar,
  Navbar,
  useToggleNavbar,
  // useAuthorized,
} from "./components/exportComp";
import {
  Employee,
  Messages,
  News,
  Projects,
  Testimonial,
  ViewEmployee,
  ViewMessage,
  ViewProject,
  Login,
  AddEmployee,
  AddNews,
  AddProjects,
  JobApplicationForm,
  NewsLetters,
  NewsLetterForm, NewsLetterSubscribers, ViewNewsletters,
  Testimonials
} from "./components/LazyExports";
import AppContext from "./context/AppContext";
import JobApplications from "./pages/JobApplications";
import ViewJobApplication from "./pages/ViewJobApplication";
import ViewJob from "./pages/ViewJob";
import NotFound from "./components/NotFound";

function App() {
  const { showNavbar } = useContext(AppContext);

  //custom hooks
  // useAuthorized();
  useTitle();
  useToggleNavbar();
  // useToggleSidebar();

  return (
    <div className=" relative ">
      <header
        className={`${
          showNavbar ? "fixed top-0 right-0 left-0 " : "static"
        } z-50`}
      >
        <Navbar />
      </header>
      <Sidebar />
      <ReactQueryDevtools />
      <main className="">
        <ToastContainer />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/message" element={<Messages />} />
            <Route path="/login" element={<Login />} />
            <Route path="/newsletters" element={<NewsLetters />} />
            <Route path="/message/:messageId" element={<ViewMessage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/view/:projectId" element={<ViewProject />} />
            <Route path="/news" element={<News />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/view-employee/:employeeId" element={<ViewEmployee />} />
            <Route path="/add-employee" element={<AddEmployee />} />
            <Route path="/add-news" element={<AddNews />} />
            <Route path="/add-project" element={<AddProjects />} />
            <Route path="/job-applications" element={<JobApplications />} />
            <Route path="/view-job/:jobId" element={<ViewJob />} />
            <Route path="/job-form" element={<JobApplicationForm />} />
            <Route path="/view-application/:applicationId" element={<ViewJobApplication />} />
            <Route path="/" element={<Home />} />
            <Route path="/view-newsletters" element={<ViewNewsletters />} />
            <Route path="/newsletter-form" element={<NewsLetterForm />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/newsletters-subcribers" element={<NewsLetterSubscribers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
       
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
