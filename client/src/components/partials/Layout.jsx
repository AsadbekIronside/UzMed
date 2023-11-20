import { Outlet } from "react-router-dom";
import Nav from "./body-nav/Nav";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = () => {

    return(
        <>
            <Header/>
            <Nav/>
            <Outlet/>
            <Footer/>
        </>
    )

}

export default Layout;