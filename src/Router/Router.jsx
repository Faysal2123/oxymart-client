import Home from "../components/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import { createBrowserRouter } from 'react-router-dom'
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:"/signup",
                element:<SignUp></SignUp>
            }
        ]
    }
])
export default router