import { Outlet } from "react-router";
import Nav from "../Containers/NavFooter/Nav";

  
function Layout() {
    return (
        <div className="container mx-auto">
            <div className="mx-5 md:mx-0">
            <Nav></Nav>
            <Outlet></Outlet>
            </div>
        </div>
    );
}

export default Layout;