import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import './Header.css'
import Language from "../../dropdowns/language";
import { useEffect, useState } from "react";
import Cookie from "js-cookie";
import Login from "./Login";


const Header = () => {
    const [ user, setUser ] = useState('');
    const { t } = useTranslation();

    useEffect(() => {
      if(Cookie.get('user')){
        var userData = JSON.parse(Cookie.get('user'));
        setUser(userData['f_name']+' '+userData['l_name']);
      };
    }, []);

    return (
       <div>
         <nav className="navbar navbar-expand-sm">
          <NavLink className="navbar-brand fw-bold logo" to="/">
            UzMed
          </NavLink>
              <button className="navbar-toggler border-0" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
                <span className="navbar-toggler-icon"></span>
              </button>
               <div className="collapse navbar-collapse justify-content-end gap-4" id="navbarText"> 
                   <NavLink className="btn border-0 text-muted hover-blue" to="/">{t('forDoctors')}</NavLink>
                    <div className="list-group-item">
                      <Language/>
                    </div>
                    <div className={!user?'d-block':'d-none'}>
                      <Login/>
                    </div>
                    <div className={user?"user-profile hover-blue d-block":"d-none"}>
                      <NavLink to="/user-profile/:dashboard" target="_blank"
                      onClick={()=>{localStorage.setItem('page', '1');}}><i className="bi bi-person-fill fa-xl hover-blue" style={{color:"rgb(90, 90, 90)"}}></i></NavLink>
                    </div>
                </div>
              </nav>
               {/* offCanvas */}
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                  <div className="offcanvas-header">
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body">
                    <ul className="list-group">
                      <li className="list-group-item border-0 px-0"><Link className="btn border-0 text-muted hover-blue" to="/">{t('forDoctors')}</Link></li>
                      <li className="list-group-item border-0 ms-2 px-0"><Language/></li>
                      <li className={!user?"list-group-item border-0 ms-2 d-block px-0":"d-none"}>
                        <Login/>
                      </li>
                      <li className={user?"list-group-item border-0 d-block ps-3 px-0":"d-none"}>
                        <div className={"user-profile hover-blue"} style={{width:'fit-content',display:"inline-block", marginLeft:"5px"}}>
                          <NavLink to="/user-profile/:dashboard" target="_blank" onClick={() => {localStorage.setItem('page', '1');}}><i className="bi bi-person-fill fa-xl hover-blue" style={{color:"rgb(90, 90, 90)"}}></i></NavLink>
                        </div>
                        <span className={user?'ms-1 d-inline hover-blue':'d-none'} style={{cursor:"pointer", fontWeight:"400", opacity:"0.8"}}>{user?user:''}</span>
                      </li>
                    </ul>
                  </div>
                </div>
       </div>
    );
}

export default Header