import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import './Body.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserNurse, faHeartPulse, faPeopleGroup, faShoppingBag, faQuestionCircle } from "@fortawesome/free-solid-svg-icons"

const Body = () => {

    const { t } = useTranslation();

    return(
        <div className="container-fluid p-0">
            <div className="d-flex flex-wrap justify-content-center column-gap-2 p-1 mx-0" id="serviceGroup">
                <Link className="services" to="/home"><FontAwesomeIcon icon={faUserNurse} color="green" className="me-1" size="lg"/> {t('findDoctors')}</Link>
                <Link className="services" to=""><i className="bi bi-calendar-day me-1 fa-lg" style={{color:"brown"}}></i>{t('bookApp')}</Link>
                <Link className="services" to=""><FontAwesomeIcon icon={faHeartPulse} color="red" className="me-1" size="lg"/> {t('treatment')}</Link>
                <Link className="services" to=""><i className="fa-sharp fa-solid fa-question fa-lg" style={{color:"darkblue"}}></i> {t('askQuestion')}</Link>
                <Link className="services" to=""><i className="bi bi-cart3 fa-lg me-1" style={{color:"darkorange"}}></i> {t('goodCart')}</Link>
                <Link className="services" to=""><i className="bi bi-newspaper fa-lg me-1" style={{color:"purple"}}></i> {t('healthFeed')}</Link>
            </div>
            <div className="row px-xl-0 px-md-5 px-1" id="backImage">
                <div className="col-12 col-md-7 offset-xl-1 order-2 order-md-1">
                    <h3 className="mato">Sog'liqingizga g'amxo'r bo'ling va <span>online tibbiy xizmatlar</span> bilan kutishlarga ketadigan vaqtingizni tejang!</h3>
                    <div className="row text-white mx-md-1 mx-2">
                        <div className="col-4">
                            <span ><FontAwesomeIcon icon={faPeopleGroup} size="3x"/></span>
                            <p>Toshkentdagi deyarli har bir shifokorning profili</p>
                        </div>
                        <div className="col-4">
                            <FontAwesomeIcon icon={faShoppingBag} size="3x"/>
                            <p>So'g'liqqa foydali mahsulotlar va dorilar uchun online xarid</p>
                        </div>
                        <div className="col-4">
                            <FontAwesomeIcon icon={faQuestionCircle} size="3x"/>
                            <p>Savollar va ularga tajribali shifokorlardan javoblar</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-5 col-xl-4 order-1 order-md-2">
                  <img src={require("../../../images/doctors.png")} style={{width:"100%"}} alt="doc"/>   
                </div>
            </div>
        </div>
    );
}

export default Body