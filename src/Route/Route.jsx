import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Listing from "../Pages/Listing/Listing";


const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/about",
            element: <About></About>
        },
        {
            path: "/listing",
            element: <Listing></Listing>
        }
    ]
  },
]);

export default myRouter;

