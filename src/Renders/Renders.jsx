import Layout from "../Layout/Layout";
import { createBrowserRouter } from 'react-router-dom';
import ListesBook from './../Page/ListesBook';
import PageRead from "../Page/PageRead";
import Signin from "../Containers/SingIn_Up/Signin";
import Signup from "../Containers/SingIn_Up/Signup";
import Bookdetails from "../Containers/all component/Bookdetails";
import Home from "../Page/Home";

const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
          path: "/",
          element : <Home></Home>
        },
        {
          path: "/listedbook",
          element : <ListesBook></ListesBook>
        },
        {
          path: "/bookdetails/:clickID",
          element : <Bookdetails></Bookdetails>
        },
        {
          path: "/pageread",
          element : <PageRead></PageRead>
        },
        {
          path: "/signin",
          element : <Signin></Signin>
        },
        {
          path: "/signup",
          element : <Signup></Signup>
        },
      ]
    },
  ]);

  export default routers