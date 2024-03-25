import Layout from "../Layout/Layout";
import Home from "../Page/Home";
import {
    createBrowserRouter,
  } from "react-router-dom";
import ListesBook from "../Page/ListesBook";
import PageRead from "../Page/PageRead";

const routers = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    children: [
        {
            path : "/",
            element : <Layout></Layout>
        },
        {
            path : "/listbook",
            element : <ListesBook></ListesBook>
        },
        {
            path : "/pageread",
            element : <PageRead></PageRead>
        }
    ]
    },
  ]);

export default routers