/**
             * Header
             * body
             * List Items
             * -Search bar
             * - Restraunt list 
             * - Restraunt Card
             * -Image
             * Name 
             * Rating 
             * Cusines 
             * 
             * 
             * Footer links 
             */
import React from "react";
import ReactDOM from "react-dom/client";
import  {Header} from "./components/Header";
import {Footer}  from "./components/Footer";
import  Body  from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";



const AppLayout = ()=>{
    return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>

    )
}
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {path:"/",
            element:<Body/>
            },

            { path:"/About",
              element:<About/>

            },

            {
                path:"/home",
                element:<Home/>
            },

            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path: "restaurant/:resId",
                element: <RestaurantMenu />,
            }


        ]
        
    }
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/> );



