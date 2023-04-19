import { createBrowserRouter } from "react-router-dom";
import { LayoutHome } from "../components/Home/Home";


export const router = createBrowserRouter([
   {
    path: "/",
    element: <LayoutHome />
   },

]);