import Nav from "../Containers/NavFooter/Nav";
import Home from "../Page/Home";

  
function Layout() {
    return (
        <div className="container mx-auto">
            <Nav></Nav>
            <Home></Home>
        </div>
    );
}

export default Layout;