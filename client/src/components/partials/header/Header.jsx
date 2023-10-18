import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import './Header.css'
import Language from "../../dropdowns/language";

const Header = () => {

    const { t } = useTranslation();

    return (
       <div className="container-fluid" style={{overflow:"visible"}}>
         <nav className="navbar navbar-expand-sm">
          <NavLink className="navbar-brand fw-bold" to="/#" id="logo">
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
                    <div>
                      <NavLink id="logIn" className="btn border border-1 my-2 my-sm-0 text-muted" to="/login">
                        {t('login')}
                      </NavLink>
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
                      <li className="list-group-item border-0"><Link className="btn border-0 text-muted hover-blue" to="/">{t('forDoctors')}</Link></li>
                      <li className="list-group-item border-0 ms-2"><Language/></li>
                      <li className="list-group-item border-0 ms-2"><Link id="logIn" className="btn border border-1 my-2 my-sm-0 text-muted" to="/login">{t('login')}</Link></li>
                    </ul>
                  </div>
                </div>
       </div>
    );
}

export default Header