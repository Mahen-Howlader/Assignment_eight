import { Outlet } from "react-router";
import Nav from "../Containers/NavFooter/Nav";

  
function Layout() {
    return (
        <div className="container mx-auto">
            <Nav></Nav>
            <Outlet></Outlet>
          
        </div>
    );
}

export default Layout;