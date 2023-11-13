import { Link } from "react-router-dom";
import "./CartHeader.css";
import { useEffect, useState } from "react";
import Cookie from "js-cookie";
import { useTranslation } from "react-i18next";
import Language from "../../../dropdowns/language";
import Login from "../../../partials/header/Login";

const CartHeader = () => {

    // states
    const { t } = useTranslation();
    const [ user, setUser ] = useState('');
    const [ screenWidth, setScreenWidth ] = useState(window.screen.availWidth);

    useEffect(() => {
      if(Cookie.get('user')){
        var userData = JSON.parse(Cookie.get('user'));
        setUser(userData['f_name']+' '+userData['l_name']);
      };
    }, []);

    window.onresize = () => {
      setScreenWidth(window.screen.availWidth);
    };
    return(
        <div className="cart-header align-items-center">
          <div>
            <Link className="navbar-brand fw-bold logo" to="/">
              UzMed
            </Link>
          </div>
          <div className="input-group">
            <input placeholder="Mahsulotlarni qidirish"></input>
            <button><i class="bi bi-search fa-lg"></i></button>
          </div>
          <div className={screenWidth>850?"d-flex column-gap-3 align-items-center":"d-none"}>
            <div className={!user?'d-block':'d-none'}>
              <Login/>
            </div>
            <div className={user?"user-profile hover-blue d-block":"d-none"}>
              <Link to="/user-profile/:dashboard" target="_blank"
              onClick={()=>{localStorage.setItem('page', '1');}}><i className="bi bi-person-fill fa-xl hover-blue" style={{color:"rgb(90, 90, 90)"}}></i></Link>
            </div>
            <div>
              <Link className="hover-blue text-muted text-decoration-none text-nowrap"><i className="bi bi-heart fa-lg"></i>&nbsp; <span>Saralangan</span></Link>
            </div>
            <div>
              <Link className="hover-blue text-muted text-decoration-none text-nowrap"><i className="bi bi-cart2 fa-xl"></i> &nbsp;<span>Savatcha</span></Link>
            </div>
          </div>
          <span className={screenWidth<=850?"d-block":'d-none'}><i className="bi bi-list fa-2x"></i></span>
        </div>
    );

}
export default CartHeader;