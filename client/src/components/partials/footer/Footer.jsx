import { Link } from "react-router-dom";
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTelegram, faYoutube} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {

    const year = new Date().getFullYear();

    return (
       <div className="container-fluid">
         <div className="row">
             <div className="col-12 col-sm-8 col-md-10 d-flex flex-wrap footer">
                <span className="footer-link"><Link to="/">Biz haqimizda</Link></span>
                <span className="footer-link"><Link to="/">Biz bilan bog'lanish uchun</Link></span>
                <span className="footer-link"><Link to="/">Hamkorlik qilish</Link></span>
            </div>
            <div className="col-12 col-sm-4 col-md-2 footer-media">
                <h6>Ijtimoiy tarmoqlarda</h6>
                <p>
                    <Link to='/'><FontAwesomeIcon icon={faInstagram} size="xl"/></Link>
                    <Link to='/'><FontAwesomeIcon icon={faTelegram} size="xl"/></Link>
                    <Link to='/'><FontAwesomeIcon icon={faYoutube} size="xl"/></Link>
                </p>
            </div>
            <div className="col-12 rights"><p>&copy; {year} <b>UzMed</b>. Barcha huquqlar himoyalangan.</p></div>
        </div>
       </div>
    );
}

export default Footer