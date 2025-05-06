import { lazy } from "react";

const Employee = lazy(() => import("../pages/Employee"));
const EmployeeForm = lazy(() => import("./EmployeeForm"));
const News = lazy(() => import("../pages/News"));
const Messages = lazy(() => import("../pages/Messages"));
const Projects = lazy(() => import("../pages/Projects"));
const ViewProject = lazy(() => import("../pages/ViewProject"));
const ViewMessage = lazy(() => import("../pages/ViewMessage"));
const ViewEmployee = lazy(() => import("../pages/ViewEmployee"));
const Testimonial = lazy(() => import("../pages/Testimonial"));
const ViewTestimonial = lazy(() => import("../pages/ViewTestimonial"));
const Login = lazy(() => import('../pages/Login'))
const AddEmployee = lazy(() => import('../pages/AddEmployee'))
const AddNews = lazy(() => import('../pages/AddNews'))
const AddProjects = lazy(() => import('../pages/AddProjects'))


export {
  Employee,
  News,
  Projects,
  ViewMessage,
  ViewEmployee,
  ViewTestimonial,
  Testimonial,
  ViewProject,
  Messages,
  Login,
  EmployeeForm,
  AddNews,
  AddEmployee,
  AddProjects
};
