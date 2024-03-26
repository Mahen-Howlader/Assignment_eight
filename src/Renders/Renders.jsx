import Layout from "../Layout/Layout";
import { createBrowserRouter } from 'react-router-dom';
import ListesBook from './../Page/ListesBook';
import PageRead from "../Page/PageRead";
import Signin from "../Containers/SingIn_Up/Signin";
import Signup from "../Containers/SingIn_Up/Signup";

const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
          path: "/listedbook",
          element : <ListesBook></ListesBook>
        },
        {
          path: "/pageread",
          element : <PageRead></PageRead>
        },
        {
          path: "/",
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