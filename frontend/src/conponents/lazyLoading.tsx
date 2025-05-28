import { lazy } from "react";

const TestimonialForm = lazy(() => import("../pages/TestimonialForm"));
const Contact = lazy(() => import("../pages/Contact"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const Services = lazy(() => import("../pages/services/Services"));
const Login = lazy(() => import("../pages/Login"));
const Works = lazy(() => import("../pages/works/workDisplay/Projects"));
const AllWorks = lazy(() => import("../pages/works/workRender/AllWorks"));
const WorkDetails = lazy(() => import("../pages/works/WorkDetails"));
const ViewJob = lazy(() => import("../pages/ViewJob"));
const Careers = lazy(() => import("../conponents/footerLinks/Careers"));
const Employees = lazy(() => import("../conponents/Employees"));
const ApplyJob = lazy(() => import("./ApplyJob"));

export {
  Login,
  Works,
  Contact,
  AboutUs,
  AllWorks,
  Services,
  WorkDetails,
  ViewJob,
  Careers,
  ApplyJob,
  Employees,
  TestimonialForm,
};
