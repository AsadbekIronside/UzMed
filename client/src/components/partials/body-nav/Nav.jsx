import { Link } from "react-router-dom"
import "./Nav.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeartPulse, faLocationCrosshairs, faUserNurse, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import getLocationInfo from "../../../functions/getLocationInfo"

const Nav = () => {

    const [ toggModal, setToggleModal ] = useState(false);
    const [ city, setCity ] = useState('Bukhara');
    const [ district, setDistrict ] = useState('');
    const [ getDis, setGetDis ] = useState(false);

    const { t } = useTranslation();

    const toggleBookApp = (e) => {
        e.preventDefault();
        setToggleModal(prev => !prev);
    }
    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(async({ coords })=>{
            const result = await getLocationInfo(coords.latitude, coords.longitude);
            setCity(result.city);
            setDistrict(result.county.split(' ')[0]);
        }, err => {console.log(err);});
        setGetDis(true);
    }
    
    return(
        <>
         <div className="d-flex flex-wrap justify-content-center column-gap-2 p-1 mx-0" id="serviceGroup">
            <Link className="services" to="/find-doctor"><FontAwesomeIcon icon={faUserNurse} color="green" className="me-1" size="lg"/> {t('findDoctors')}</Link>
            <Link className="services" to="#" onClick={toggleBookApp}><i className="bi bi-calendar-day me-1 fa-lg" style={{color:"brown"}}></i>{t('bookApp')}</Link>
            <Link className="services" to="/"><FontAwesomeIcon icon={faHeartPulse} color="red" className="me-1" size="lg"/> {t('treatment')}</Link>
            <Link className="services" to="/"><i className="fa-sharp fa-solid fa-question fa-lg" style={{color:"darkblue"}}></i> {t('askQuestion')}</Link>
            <Link className="services" to="/good-cart"><i className="bi bi-cart3 fa-lg me-1" style={{color:"darkorange"}}></i> {t('goodCart')}</Link>
            <Link className="services" to="/"><i className="bi bi-newspaper fa-lg me-1" style={{color:"purple"}}></i> {t('healthFeed')}</Link>
        </div>
        <div className={toggModal?"login-modal":"d-none"}>
            <div className="login-modal-dialog" style={{paddingTop:"100px"}}>
                <div className="login-modal-content">
                    <div className="login-modal-header">
                        <h4>Uchrashuv belgilash</h4>
                        <button type="button"><FontAwesomeIcon icon={faXmark} size="lg" onClick={()=>{setToggleModal(false)}}/></button>
                    </div>
                    <div className="login-modal-body">
                        <div className="book-search">
                            <div>
                                <input id="book_search" placeholder="Mutaxasislik/kasallik/doktor/klinika"/>
                            </div>
                            <div>
                                <span className="search-btn">
                                    Qidirish
                                </span>
                            </div>
                        </div>
                        <div className="book-location">
                            <div>
                                <input id="book_city" value={getDis?city:"Bukhara"}/>
                                <span onClick={()=>{document.getElementById('book_city').value=""; document.getElementById('book_city').focus()}}><FontAwesomeIcon icon={faXmark} size="xl" color="#9a9494"/></span>
                            </div>
                            <div>
                                <input placeholder="Tumanni kiriting" value={getDis?district:""}/>
                                <span onClick={getLocation}><FontAwesomeIcon icon={faLocationCrosshairs} size="lg" color="#9a9494"/></span>
                            </div>
                        </div>
                    </div>
                    <div className="common-issues">
                        <ul>
                            <li><Link to="#" onClick={(e)=>{e.preventDefault()}} className="list-disabled">Ko'p Uchraydigan Muammolar</Link></li>
                            <li><Link to={"/book-app?search=hair&city="+city+"&dist="+district} onClick={()=>{setToggleModal(false)}}>Soch To'kilishi</Link></li>
                            <li><Link to={"/book-app?search=weight&city="+city+"&dist="+district} onClick={()=>{setToggleModal(false)}}>Vazn Yo'qotish</Link></li>
                            <li><Link to={"/book-app?search=depression&city="+city+"&dist="+district} onClick={()=>{setToggleModal(false)}}>Depressiya, Stress</Link></li>
                            <li><Link to={"/book-app?search=sleeping&city="+city+"&dist="+district} onClick={()=>{setToggleModal(false)}}>Uyqusizlik</Link></li>
                            <li><Link to={"/book-app?search=pregnancy&city="+city+"&dist="+district} onClick={()=>{setToggleModal(false)}}>Xomiladorlik</Link></li>
                            <li><Link to={"/book-app?search=join&city="+city+"&dist="+district} onClick={()=>{setToggleModal(false)}}>Bo'g'imlar Og'rig'i</Link></li>
                            <li><Link to={"/book-app?search=childcare&city="+city+"&dist="+district} onClick={()=>{setToggleModal(false)}}>Bola G'amxo'rligi</Link></li>
                            <li><Link to={"/book-app?search=diabet&city="+city+"&dist="+district} onClick={()=>{setToggleModal(false)}}>Diabet</Link></li>
                            <li><Link to={"/book-app?search=bovur&city="+city+"&dist="+district} onClick={()=>{setToggleModal(false)}}>Bovur Qilish Muammolari</Link></li>
                            <li><Link to={"/book-app?search=dermatolog&city="+city+"&dist="+district} onClick={()=>{setToggleModal(false)}}>Teridagi Toshmalar</Link></li>
                            <li><Link to="#" onClick={(e)=>{e.preventDefault()}} className="list-disabled">Ko'p Qidiriladigan Mutaxasisliklar</Link></li>
                            <li><Link to={"/book-app?search=dermatolog&city="+city+"&dist="+district} onClick={()=>{setToggleModal(false)}}>Dermatolog</Link></li>
                            <li><Link to={"/book-app?search=dentist&city="+city+"&dist="+district} onClick={()=>{setToggleModal(false)}}>Tish Shifokori</Link></li>
                            <li><Link to={"/book-app?search=sexolog&city="+city+"&dist="+district} onClick={()=>{setToggleModal(false)}}>Sexsolog</Link></li>
                            <li><Link to={"/book-app?search=dieta&city="+city+"&dist="+district} onClick={()=>{setToggleModal(false)}}>Dieta Shifokori</Link></li>
                            <li><Link to={"/book-app?search=ginekolog&city="+city+"&dist="+district} onClick={()=>{setToggleModal(false)}}>Ginekolog</Link></li>
                            <li><Link to={"/book-app?search=ortopedist&city="+city+"&dist="+district} onClick={()=>{setToggleModal(false)}}>Ortopedist</Link></li>
                            <li><Link to={"/book-app?search=psixolog&city="+city+"&dist="+district} onClick={()=>{setToggleModal(false)}}>Psixolog</Link></li>
                            <li><Link to="#" onClick={(e)=>{e.preventDefault()}} className="list-disabled">Ko'p Qidiriladigan Davolashlar</Link></li>
                            <li><Link to={"/book-app?search=join&city="+city+"&dist="+district} onClick={()=>{setToggleModal(false)}}>Tizza Og'rig'ini davolash</Link></li>
                            <li><Link to={"/book-app?search=hair&city="+city+"&dist="+district} onClick={()=>{setToggleModal(false)}}>Soch Ekish</Link></li>
                            <li><Link to={"/book-app?search=eye&city="+city+"&dist="+district} onClick={()=>{setToggleModal(false)}}>Ko'z Nurini Yaxshilash</Link></li>
                            <li><Link to={"/book-app?search=depression&city="+city+"&dist="+district} >Stressni Yo'qotish</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}

export default Nav