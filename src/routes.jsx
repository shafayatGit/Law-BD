import { createBrowserRouter } from "react-router";
import App from "./App";
import Layout from "./MainLayout/Layout";
import Home from "./Pages/Home";
import BookMark from "./Pages/BookMark";
import Blogs from "./Pages/Blogs";
import ErrorPage from "./Pages/ErrorPage";
import DoctorDetails from "./Components/DoctorDetails";
import ErrorDoctors from "./Components/ErrorDoctors";
import { ToastContainer } from "react-toastify";
import ContactUs from "./Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        Component: Home,
        hydrateFallbackElement: (
          <span className="loading loading-bars loading-xl mx-auto"></span>
        ),
        loader: () => fetch("/data.json"),
      },
      {
        path: "bookmark",
        Component: BookMark,
        hydrateFallbackElement: (
          <span className="loading loading-bars loading-xl mx-auto"></span>
        ),
        loader: () => fetch("/data.json"),
      },
      {
        path: "blogs",
        hydrateFallbackElement: (
          <span className="loading loading-bars loading-xl mx-auto"></span>
        ),
        Component: Blogs,
      },
      {
        path: "contact",
        hydrateFallbackElement: (
          <span className="loading loading-bars loading-xl mx-auto"></span>
        ),
        Component: ContactUs,
      },
      {
        path: "doctor-details/:license_number",
        Component: DoctorDetails,
        errorElement: <ErrorDoctors></ErrorDoctors>,
        hydrateFallbackElement: (
          <span className="loading loading-bars loading-xl mx-auto"></span>
        ),
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);

export default router;
