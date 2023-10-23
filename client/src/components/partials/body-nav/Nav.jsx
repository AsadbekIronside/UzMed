import { Link } from "react-router-dom"
import "./Nav.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeartPulse, faUserNurse } from "@fortawesome/free-solid-svg-icons"
import { useTranslation } from "react-i18next"

const Nav = () => {

    const { t } = useTranslation();
    
    return(
        <div className="d-flex flex-wrap justify-content-center column-gap-2 p-1 mx-0" id="serviceGroup">
            <Link className="services" to="/find-doctor"><FontAwesomeIcon icon={faUserNurse} color="green" className="me-1" size="lg"/> {t('findDoctors')}</Link>
            <Link className="services" to="/"><i className="bi bi-calendar-day me-1 fa-lg" style={{color:"brown"}}></i>{t('bookApp')}</Link>
            <Link className="services" to="/"><FontAwesomeIcon icon={faHeartPulse} color="red" className="me-1" size="lg"/> {t('treatment')}</Link>
            <Link className="services" to="/"><i className="fa-sharp fa-solid fa-question fa-lg" style={{color:"darkblue"}}></i> {t('askQuestion')}</Link>
            <Link className="services" to="/"><i className="bi bi-cart3 fa-lg me-1" style={{color:"darkorange"}}></i> {t('goodCart')}</Link>
            <Link className="services" to="/"><i className="bi bi-newspaper fa-lg me-1" style={{color:"purple"}}></i> {t('healthFeed')}</Link>
        </div>
    )

}

export default Nav