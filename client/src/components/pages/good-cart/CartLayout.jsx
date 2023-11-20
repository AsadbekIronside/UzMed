import { Outlet } from "react-router-dom";
import CartHeader from "./cart-header/CartHeader";
import CartNav from "./cart-nav/CartNav";
import Footer from "../../partials/footer/Footer";

const CartLayout = () => {

    return(
        <>
            <CartHeader/>
            <CartNav/>
            <Outlet/>
            <Footer/>
        </>
    );

}

export default CartLayout;