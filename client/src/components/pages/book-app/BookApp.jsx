import { Link, useSearchParams } from "react-router-dom";
import Breadcrumb from "../../breadcrumbs/Breadcrumb";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs, faXmark } from "@fortawesome/free-solid-svg-icons";
import getLocationInfo from "../../../functions/getLocationInfo";
import "./BookApp.css";
import Checkbox from "../../checkbox/Ckeckbox";
import Radio from "../../radios/Radio";
import Cookie from "js-cookie"

const BookApp = () => {

    const parms = useSearchParams();
    
    var categ = parms['0'].get('search');
    var city = parms['0'].get('city');
    var dist = parms['0'].get('dist');

    // states
    const [category, setCategory ] = useState(categ);
    const [ cit, setCit] = useState(city);
    const [ district, setDistrict ] = useState(dist);
    const [ toggleModal, setToggleModal ] = useState(false);
    const [ active, setActive ] = useState(1);

    const districts = {
        "Bukhara":["Buxoro", "Qorako'l", "Jondor", "Olot", "Peshku", "Qoravulbozor", "Vobkent", "G'ijduvon", "Kogon", "Romitan", "Shofirkon"]
    };
    const weekdays = ["Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba", "Yakshanba"];
    const price = ["50-100 ming so'm", "100-150 ming so'm", "150-300 ming so'm", "500-800 ming so'm", "800 ming so'mdan yuqori"];
    const gender = ["Farqi yo'q", "Erkak", "Ayol"];

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(async({ coords })=>{
            const result = await getLocationInfo(coords.latitude, coords.longitude);
            setCit(result.city);
            setDistrict(result.county.split(' ')[0]);
        }, err => {console.log(err);});
    }
    const changeCategory = (e) => {
        let val = e.target.value;
        setCategory(val);
    }
    const changeCity = (e) => {
        let val = e.target.value;
        setCit(val);
    }
    const changeDist = (e) => {
        let val = e.target.value;
        setDistrict(val);
    }
    const changeDistCheck = (e) => {
        console.log(e.target.checked);
    }
    const changeWeekdays = (e) => {

    }
    const changePrice = (e) => {

    }
    const changeGender = (e) => {

    }
    const clearAll = () => {
        var name;
        switch(active){
            case 1:name="district"; break;
            case 2:name="weekdays"; break;
            case 3:name="price"; break;
            case 4:name="gender"; break;
            default: break;
        }
        const elements = document.querySelectorAll(`[name="${name}"]`);
        elements.forEach(el => {if(el.checked)el.checked=false;});
    }

    useEffect(() => {
        setCategory(parms['0'].get('search'));
        setDistrict(parms['0'].get('dist'));
        setCit(parms['0'].get('city'));
    }, [window.location.href]);
    useEffect(() => {
        if(toggleModal) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'auto';
    }, [toggleModal]);

    return(
        <div className="book-body">
            <Breadcrumb items={[{name:"home", url:"/"}, {name:"bookApp"}]}/>
            <div className="book-body-search">
                <div className="book-location mt-0">
                    <div>
                        <input className="book_city" placeholder="Shaharni kiriting" value={cit} onChange={changeCity}/>
                        <span onClick={()=>{document.querySelector('.book_city').value=""; document.querySelector('.book_city').focus()}}><FontAwesomeIcon icon={faXmark} size="xl" color="#9a9494"/></span>
                    </div>
                    <div>
                        <input placeholder="Tumanni kiriting" value={district} onChange={changeDist}/>
                        <span onClick={getLocation}><FontAwesomeIcon icon={faLocationCrosshairs} size="lg" color="#9a9494"/></span>
                    </div>
                </div>            
                <div className="book-search">
                    <div>
                        <input id="book_search_categ" placeholder="Mutaxasislik/kasallik/doktor/klinika" value={category} onChange={changeCategory}/>
                        <span onClick={()=>{document.querySelector('#book_search_categ').value=""; document.querySelector('#book_search_categ').focus()}}><FontAwesomeIcon icon={faXmark} size="xl" color="#9a9494"/></span>
                    </div>
                    <div>
                        <span className="search-btn"> Qidirish</span>
                    </div>
                </div>
            </div>
            <h4 className="mt-3">{cit.concat(' ',district)}da {categ} bo'yicha 234+ ta shifokorlar topildi.</h4>
            <div className="book-doctors">
                <div className="book-doctors-div">
                    <div className="book-doctors-filter">
                        <button onClick={() => {setToggleModal(true); setActive(1)}}><i class="fa-solid fa-sliders fa-rotate-90"></i> Filterlar <i className="fa-solid fa-angle-down"></i></button>
                        <button onClick={() => {setToggleModal(true); setActive(1)}}>Yaqin Tumanlar <i className="fa-solid fa-angle-down"></i></button>
                        <button onClick={() => {setToggleModal(true); setActive(2)}}>Uchrashuv Vaqti <i className="fa-solid fa-angle-down"></i></button>
                        <button onClick={() => {setToggleModal(true); setActive(3)}}>Narxlar <i className="fa-solid fa-angle-down"></i></button>
                        <button onClick={() => {setToggleModal(true); setActive(4)}}>Shifokor Jinsi <i className="fa-solid fa-angle-down"></i></button>
                    </div>
                    <div className="book-doctors-body">

                    </div>
                </div>
                <div className="book-login">
                    <h5>Uchrashuv belgilash uchun hoziroq regstratsiyadan o'ting!</h5>
                    <form>
                        <label><span>Ism*</span>
                            <input placeholder="Ismingizni kiriting"/>
                        </label>
                        <label><span>Tel Raqam*</span>
                            <input placeholder="Telefon raqamingizni kiriting"/>
                        </label>
                        <label><span>Shahar*</span>
                            <input placeholder="Shaharni kiriting."/>
                        </label>
                        <button type="button">Registratsiyadan o'tish</button>
                    </form>
                </div>
            </div>
            <div className={toggleModal?"login-modal":"d-none"}>
                <div className="login-modal-dialog">
                    <div className="login-modal-content animated zoomIn faster" style={{animationDuration:"0.3s"}}>
                        <div className="login-modal-header">
                            <h4 className="mb-0">Filterlar</h4>
                            <button style={{top:"9px"}}><FontAwesomeIcon icon={faXmark} size="lg" onClick={()=>{setToggleModal(false)}}/></button>
                        </div>
                        <div className="login-modal-body p-0" style={{minHeight:"270px"}}>
                            <div className="filter-sidebar">
                                <span className={active===1?"filter-active":""} onClick={()=>{setActive(1)}}>Yaqin Tumanlar</span>
                                <span className={active===2?"filter-active":""} onClick={()=>{setActive(2)}}>Uchrashuv Vaqti</span>
                                <span className={active===3?"filter-active":""} onClick={()=>{setActive(3)}}>Narxlar</span>
                                <span className={active===4?"filter-active":""} onClick={()=>{setActive(4)}}>Shifokor Jinsi</span>
                            </div>
                            <div className="filter-body">
                                <div className={active===1?"show":"d-none"}>
                                    <Checkbox props={{name:"district", values:districts['Bukhara'], changeHandler:changeDistCheck}}/>
                                </div>
                                <div className={active===2?"show":"d-none"}>
                                    <Checkbox props={{name:"weekdays", values:weekdays, changeHandler:changeWeekdays}}/>
                                </div>
                                <div className={active===3?"show":"d-none"}>
                                    <Radio props={{name:"price", values:price, changeHandler:changePrice}}/>
                                </div>
                                <div className={active===4?"show":"d-none"}>
                                    <Radio props={{name:"gender", values:gender, changeHandler:changeGender}}/>
                                </div>
                                <span className="filter-clear" onClick={clearAll}>Tozalash</span>
                            </div>
                        </div>
                        <div className="filter-footer">
                            <button>Filterlash</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookApp;