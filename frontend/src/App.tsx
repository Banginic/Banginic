import { Suspense, useContext } from "react";

import {
  Login,
  Works,
  Contact,
  AboutUs,
  AllWorks,
  Services,
  WorkDetails,
  TestimonialForm,
  ViewJob,
  Careers,
} from "./conponents/lazyLoading";
import {
  Navbar,
  Footer,
  Home,
  SideBar,
  Loading,
  ScrollToTop,
  News,
  Cookies,
  NotFound,
  RequireAuth
} from "./conponents/exportComp";
import { Routes, Route } from "react-router-dom";
import { AppContext } from "./context/AppProvider";

import {
  TermsAndCon,
  PrivacyPolicy,
} from "./conponents/footerLinks/exportFooterLinks";
import { ToastContainer } from "react-toastify";
import ProjectCard from "./conponents/ProjectCard";
import useAuthorized from "./hooks/useAuthorized";

function App() {
  const appContext = useContext(AppContext);

  const showSideBar = appContext?.showSidebar
    ? "translate-x-0"
    : "-translate-x-full";

  // document.addEventListener("visibilitychange", () => {});

  // window.addEventListener("scroll", () => {
  //   // return appContext?.removeAllDisplay();
  // });

  // Auth client
  useAuthorized();

  return (
    <div
      className={`relative ${
        appContext?.theme === "dark" ? "dark-bg" : "light-bg"
      } text-black dark:text-light ${appContext?.showSidebar ? 'h-screen overflow-hidden' : ''} min-h-screen relative`}
      // onScroll={() => handleAppScroll()}
    >
      <News />
      <aside
        className={`${showSideBar} md:hidden absolute top-0 bottom-0 left-0 z-50 h-[110dvh] w-[80%]  trans  overflow-hidden`}
      >
        {<SideBar />}
      </aside>

      <header
        className={`${
          appContext?.showNavbar
            ? "fixed right-2 left-2 top-2 lg:right-5 lg:left-5 shadow rounded-full bg-white dark:bg-black"
            : ""
        } z-40`}
      >
        <Navbar />
      </header>
      <main
        className=" w-full pt-16 overflow-hidden lg:p-14 max-w-[1500px] mx-auto"
        onClick={appContext?.removeAllDisplay}
      >
        <Cookies />
        <ScrollToTop />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/testimonial-form" element={<RequireAuth children={<TestimonialForm />} />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers/:jobId" element={<RequireAuth children={<ViewJob />} />} />
            <Route path="/project" element={<ProjectCard />} />
            <Route path="/sideBar" element={<SideBar />} />
            <Route path="/workDetails/:projectId" element={<WorkDetails />} />

            {/* Nested Route Fix */}
            <Route path="/works" element={<Works />}>
              <Route path=":id" element={<AllWorks />} />
            </Route>

            {/* FOOTER LINKS */}
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/termsAndCon" element={<TermsAndCon />} />

            {/* Fallback route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <ToastContainer />
      </main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
