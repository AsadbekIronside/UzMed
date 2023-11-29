import { useNavigate, useSearchParams } from "react-router-dom";
import Breadcrumb from "../../breadcrumbs/Breadcrumb";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs, faLocationDot, faStar, faXmark } from "@fortawesome/free-solid-svg-icons";
import getLocationInfo from "../../../functions/getLocationInfo";
import "./BookApp.css";
import Checkbox from "../../checkbox/Ckeckbox";
import Radio from "../../radios/Radio";
import Cookie from "js-cookie";
import Swal from "sweetalert2";

const BookApp = () => {

    const parms = useSearchParams();
    const navigate = useNavigate();
    
    var categ = parms['0'].get('search');
    var city, dist;

    parms[0].has('city')?city = parms['0'].get('city'):city = "";
    parms[0].has('dist')?dist = parms['0'].get('dist'):dist = "";
    // states
    const [category, setCategory ] = useState(categ);
    const [ cit, setCit] = useState(city);
    const [ district, setDistrict ] = useState(dist);
    const [ toggleModal, setToggleModal ] = useState(false);
    const [ active, setActive ] = useState(1);
    const [ searchCity, setSearchCity ] = useState('');
    const [ searchDist, setSearchDist ] = useState('');
    const [ searchCateg, setSearchCateg ] = useState('');
    const [ pageStart, setPageStart ] = useState(1);
    const [ seeTimings, setSeeTimings ] = useState(false);
    const [ doctorData, setDoctorData ] = useState({id:0, name:"", speciality:"", price:"", img:"avatar-1.jpg"});
    const [ dateIndex, setDateIndex ] = useState(1);
    const [ dates, setDates ] = useState([{ date:'', weekday:'', month:'', dateNum:"" }]);
    const [ selectedDate, setSelectedDate ] = useState(1);
    const [ bookApp, setBookApp] = useState(false);
    const [ selectedTime, setSelectedTime ] = useState('');
    const [ user, setUser ] = useState({name:"", phone:""});
    const [ toggleCall, setToggleCall ] = useState(false);
    
    const districts = {
        "Bukhara":["Buxoro", "Qorako'l", "Jondor", "Olot", "Peshku", "Qoravulbozor", "Vobkent", "G'ijduvon", "Kogon", "Romitan", "Shofirkon"]
    };
    const weekdays = ["Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba", "Yakshanba"];
    const price = ["50-100 ming so'm", "100-150 ming so'm", "150-300 ming so'm", "500-800 ming so'm", "800 ming so'mdan yuqori"];
    const gender = ["Farqi yo'q", "Erkak", "Ayol"];
    const doctors = [
        {id:1, name:"Karimova Maftuna", exp:"Dermatolog 14 yillik tajriba", workplace:"Clinika: Dr. Hasan Oilaviy Klinika, Olmazor Shahar Poliklinikasi", rayting:'3.4', votes:19, locat:"Qorako'l Bukhara", dist:'2.4 km', time:"12:00 - 15:00", img:"avatar-1.jpg"},
        {id:2, name:"Asadbek Shariyorov", exp:"Dermatolog 14 yillik tajriba", workplace:"Clinika: Dr. Hasan Oilaviy Klinika, Olmazor Shahar Poliklinikasi", rayting:'3.4', votes:19, locat:"Qorako'l Bukhara", dist:'2.4 km', time:"12:00 - 15:00", img:"avatar-2.jpg"},
        {id:3, name:"Asadbek Shariyorov", exp:"Dermatolog 14 yillik tajriba", workplace:"Clinika: Dr. Hasan Oilaviy Klinika, Olmazor Shahar Poliklinikasi", rayting:'3.4', votes:19, locat:"Qorako'l Bukhara", dist:'2.4 km', time:"12:00 - 15:00", img:"avatar-3.jpg"},
        {id:4, name:"Asadbek Shariyorov", exp:"Dermatolog 14 yillik tajriba", workplace:"Clinika: Dr. Hasan Oilaviy Klinika, Olmazor Shahar Poliklinikasi", rayting:'3.4', votes:19, locat:"Qorako'l Bukhara", dist:'2.4 km', time:"12:00 - 15:00", img:"avatar-4.jpg"},
        {id:5, name:"Asadbek Shariyorov", exp:"Dermatolog 14 yillik tajriba", workplace:"Clinika: Dr. Hasan Oilaviy Klinika, Olmazor Shahar Poliklinikasi", rayting:'3.4', votes:19, locat:"Qorako'l Bukhara", dist:'2.4 km', time:"12:00 - 15:00", img:"avatar-5.jpg"},
        {id:6, name:"Asadbek Shariyorov", exp:"Dermatolog 14 yillik tajriba", workplace:"Clinika: Dr. Hasan Oilaviy Klinika, Olmazor Shahar Poliklinikasi", rayting:'3.4', votes:19, locat:"Qorako'l Bukhara", dist:'2.4 km', time:"12:00 - 15:00", img:"avatar-6.jpg"},
        {id:7, name:"Asadbek Shariyorov", exp:"Dermatolog 14 yillik tajriba", workplace:"Clinika: Dr. Hasan Oilaviy Klinika, Olmazor Shahar Poliklinikasi", rayting:'3.4', votes:19, locat:"Qorako'l Bukhara", dist:'2.4 km', time:"12:00 - 15:00", img:"avatar-7.jpg"},
        {id:8, name:"Asadbek Shariyorov", exp:"Dermatolog 14 yillik tajriba", workplace:"Clinika: Dr. Hasan Oilaviy Klinika, Olmazor Shahar Poliklinikasi", rayting:'3.4', votes:19, locat:"Qorako'l Bukhara", dist:'2.4 km', time:"12:00 - 15:00", img:"avatar-8.jpg"},
        {id:9, name:"Asadbek Shariyorov", exp:"Dermatolog 14 yillik tajriba", workplace:"Clinika: Dr. Hasan Oilaviy Klinika, Olmazor Shahar Poliklinikasi", rayting:'3.4', votes:19, locat:"Qorako'l Bukhara", dist:'2.4 km', time:"12:00 - 15:00", img:"avatar-8.jpg"},
        {id:10, name:"Asadbek Shariyorov", exp:"Dermatolog 14 yillik tajriba", workplace:"Clinika: Dr. Hasan Oilaviy Klinika, Olmazor Shahar Poliklinikasi", rayting:'3.4', votes:19, locat:"Qorako'l Bukhara", dist:'2.4 km', time:"12:00 - 15:00", img:"default_m.jpg"},
        {id:11, name:"Shuhrat Mamarajabov", exp:"Dermatolog 14 yillik tajriba", workplace:"Clinika: Dr. Hasan Oilaviy Klinika, Olmazor Shahar Poliklinikasi", rayting:'3.4', votes:19, locat:"Qorako'l Bukhara", dist:'2.4 km', time:"12:00 - 15:00", img:"avatar-3.jpg"},
        {id:12, name:"Asadbek Shariyorov", exp:"Dermatolog 14 yillik tajriba", workplace:"Clinika: Dr. Hasan Oilaviy Klinika, Olmazor Shahar Poliklinikasi", rayting:'3.4', votes:19, locat:"Qorako'l Bukhara", dist:'2.4 km', time:"12:00 - 15:00", img:"avatar-5.jpg"},
        {id:13, name:"Asadbek Shariyorov", exp:"Dermatolog 14 yillik tajriba", workplace:"Clinika: Dr. Hasan Oilaviy Klinika, Olmazor Shahar Poliklinikasi", rayting:'3.4', votes:19, locat:"Qorako'l Bukhara", dist:'2.4 km', time:"12:00 - 15:00", img:"avatar-2.jpg"},
        {id:14, name:"Asadbek Shariyorov", exp:"Dermatolog 14 yillik tajriba", workplace:"Clinika: Dr. Hasan Oilaviy Klinika, Olmazor Shahar Poliklinikasi", rayting:'3.4', votes:19, locat:"Qorako'l Bukhara", dist:'2.4 km', time:"12:00 - 15:00", img:"avatar-7.jpg"},
        {id:15, name:"Asadbek Shariyorov", exp:"Dermatolog 14 yillik tajriba", workplace:"Clinika: Dr. Hasan Oilaviy Klinika, Olmazor Shahar Poliklinikasi", rayting:'3.4', votes:19, locat:"Qorako'l Bukhara", dist:'2.4 km', time:"12:00 - 15:00", img:"default_w.jpg"},
        {id:16, name:"Asadbek Shariyorov", exp:"Dermatolog 14 yillik tajriba", workplace:"Clinika: Dr. Hasan Oilaviy Klinika, Olmazor Shahar Poliklinikasi", rayting:'3.4', votes:19, locat:"Qorako'l Bukhara", dist:'2.4 km', time:"12:00 - 15:00", img:"avatar-8.jpg"},
        {id:17, name:"Asadbek Shariyorov", exp:"Dermatolog 14 yillik tajriba", workplace:"Clinika: Dr. Hasan Oilaviy Klinika, Olmazor Shahar Poliklinikasi", rayting:'3.4', votes:19, locat:"Qorako'l Bukhara", dist:'2.4 km', time:"12:00 - 15:00", img:"avatar-2.jpg"},
        {id:18, name:"Asadbek Shariyorov", exp:"Dermatolog 14 yillik tajriba", workplace:"Clinika: Dr. Hasan Oilaviy Klinika, Olmazor Shahar Poliklinikasi", rayting:'3.4', votes:19, locat:"Qorako'l Bukhara", dist:'2.4 km', time:"12:00 - 15:00", img:"avatar-7.jpg"},
        {id:19, name:"Asadbek Shariyorov", exp:"Dermatolog 14 yillik tajriba", workplace:"Clinika: Dr. Hasan Oilaviy Klinika, Olmazor Shahar Poliklinikasi", rayting:'3.4', votes:19, locat:"Qorako'l Bukhara", dist:'2.4 km', time:"12:00 - 15:00", img:"default_w.jpg"},
        {id:20, name:"Asadbek Shariyorov", exp:"Dermatolog 14 yillik tajriba", workplace:"Clinika: Dr. Hasan Oilaviy Klinika, Olmazor Shahar Poliklinikasi", rayting:'3.4', votes:19, locat:"Qorako'l Bukhara", dist:'2.4 km', time:"12:00 - 15:00", img:"avatar-8.jpg"},
        {id:21, name:"Fazliddin Azizov", exp:"Dermatolog 14 yillik tajriba", workplace:"Clinika: Dr. Hasan Oilaviy Klinika, Olmazor Shahar Poliklinikasi", rayting:'3.4', votes:19, locat:"Qorako'l Bukhara", dist:'2.4 km', time:"12:00 - 15:00", img:"default_w.jpg"},
        {id:22, name:"Asadbek Shariyorov", exp:"Dermatolog 14 yillik tajriba", workplace:"Clinika: Dr. Hasan Oilaviy Klinika, Olmazor Shahar Poliklinikasi", rayting:'3.4', votes:19, locat:"Qorako'l Bukhara", dist:'2.4 km', time:"12:00 - 15:00", img:"avatar-8.jpg"}
    ];

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(async({ coords })=>{
            const result = await getLocationInfo(coords.latitude, coords.longitude);
            setCit(result.city);
            setDistrict(result.county.split(' ')[0]);
            setSearchCity(result.city);
            setSearchDist(result.county.split(' ')[0]);
        }, err => {console.log(err);});
    }
    const changeCategory = (e) => {
        let val = e.target.value;
        setSearchCateg(val);
    }
    const changeCity = (e) => {
        let val = e.target.value;
        setSearchCity(val);
    }
    const changeDist = (e) => {
        let val = e.target.value;
        setSearchDist(val);
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
    const searchFn = () => {
        setCit(searchCity);
        setCategory(searchCateg);
        setDistrict(searchDist);
    }
    const prev = () => {
        if(pageStart <= doctors.length-9 && pageStart > 10){
            setPageStart(pageStart - 10);
        }else if(pageStart>10){
            setPageStart(doctors.length - doctors.length%10 - 9);
        }
        // console.log(pageStart);
    }
    const next = () => {
        if(pageStart <= doctors.length - 10){
            setPageStart(pageStart+10);
        }
        // console.log(pageStart);
    }
    const seeAllTimes = (id) => {
        setSeeTimings(true); 
        setDoctorData({id:id, name:doctors[id-1].name, speciality:doctors[id-1].exp, price:"200 ming so'm", img:doctors[id-1].img});
        var arr = [];
        var date, arrDate, arrDay, arrMonth;
        for(let i = 0; i < 20; i++){
            date = new Date(Date.now()+i*24*60*60*1000);
            arrDate = date.getDate();
            arrDay = date.getDay();
            arrMonth = date.getMonth();
            switch(arrDay){
                case 0: arrDay = "Sun"; break;
                case 1: arrDay = "Mon"; break;
                case 2: arrDay = "Tue"; break;
                case 3: arrDay = "Wed"; break;
                case 4: arrDay = "Thu"; break;
                case 5: arrDay = "Fri"; break;
                case 6: arrDay = "Sat"; break;
                default:break;
            }
            switch(arrMonth){
                case 0: arrMonth = "Jan"; break;
                case 1: arrMonth = "Feb"; break;
                case 2: arrMonth = "Mar"; break;
                case 3: arrMonth = "Apr"; break;
                case 4: arrMonth = "May"; break;
                case 5: arrMonth = "Jun"; break;
                case 6: arrMonth = "Jul"; break;
                case 7: arrMonth = "Aug"; break;
                case 8: arrMonth = "Sep"; break;
                case 9: arrMonth = "Oct"; break;
                case 10: arrMonth = "Nov"; break;
                case 11: arrMonth = "Dec"; break;
                default:break;
            }
            arr.push({ id:i+1, date:arrDate, weekday:arrDay, month:arrMonth, dateNum:date.getMonth()+1 });
        }
        setDates(arr);
    }
    const prevDate = () => {
        if(dateIndex>1) setDateIndex(dateIndex-1);
        setSelectedDate(dateIndex-1);
    }
    const nextDate = () => {
        if(dateIndex<18) setDateIndex(dateIndex+1);
        setSelectedDate(dateIndex+1);
    }
    const bookAppointment = async() => {
        await fetch("http://localhost:8000/book-app/book-appointment", {
            method:"POST", 
            credentials:"include",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({doctor:doctorData.id, date:selectedDate, time:selectedTime})
        })
        .then(response => response.json())
        .then(response => {
            if(response.result){
                Swal.fire({
                    title:"Uchrashuv muvaffaqiyatli belgilandi!",
                    showConfirmButton:false,
                    showCancelButton:false,
                    icon:"success",
                    timer:2700
                });
            }else {
                Swal.fire({
                    title:"Noma'lum xato yuz berdi!",
                    text:"Iltimos, qayta urinib ko'ring.",
                    icon:"error",
                    showCancelButton:false,
                    showConfirmButton:false,
                    timer:2700
                });
            }
        })
        .catch(err => {
            console.log(err);
            navigate('/error-500');
        });
    }
    const callDoctor = (id) => {
        if(Cookie.get('user')){

        }else{
            setToggleCall(true);
        }
    }
    useEffect(() => {
        setCategory(parms['0'].get('search'));
        setDistrict(parms['0'].get('dist'));
        setCit(parms['0'].get('city'));
        setSearchCateg(parms['0'].get('search'));
        setSearchCity(parms['0'].get('city'));
        setSearchDist(parms['0'].get('dist'));
    }, [window.location.href]);

    useEffect(() => {
        if(toggleModal) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'auto';
    }, [toggleModal]);

    useEffect(() => {
        seeTimings?document.body.style.overflow = 'hidden':document.body.style.overflow = 'auto';
    }, [seeTimings]);

    useEffect(() => {
        if(Cookie.get('user')){
            const userData = JSON.parse(Cookie.get('user'));
            setUser({name:userData['name'], phone:userData['phone']});
        }
        // Cookie.set('user', JSON.stringify({name:"Asadbek", surname:"Shariyorov", phone:"934515547"}));
    }, []);

    useEffect(() => {
        toggleCall?document.body.style.overflow="hidden":document.body.style.overflow="auto";
    }, [toggleCall]);
   
    return(
        <div className="book-body">
            <Breadcrumb items={[{name:"home", url:"/"}, {name:"bookApp"}]}/>
            <div className="book-body-search">
                <div className="book-location mt-0">
                    <div>
                        <input className="book_city" placeholder="Shaharni kiriting" value={searchCity} onChange={changeCity}/>
                        <span onClick={()=>{document.querySelector('.book_city').value=""; document.querySelector('.book_city').focus()}}><FontAwesomeIcon icon={faXmark} size="xl" color="#9a9494"/></span>
                    </div>
                    <div>
                        <input placeholder="Tumanni kiriting" value={searchDist} onChange={changeDist}/>
                        <span onClick={getLocation}><FontAwesomeIcon icon={faLocationCrosshairs} size="lg" color="#9a9494"/></span>
                    </div>
                </div>            
                <div className="book-search">
                    <div>
                        <input id="book_search_categ" placeholder="Mutaxasislik/kasallik/doktor/klinika" value={searchCateg} onChange={changeCategory}/>
                        <span onClick={()=>{document.querySelector('#book_search_categ').value=""; document.querySelector('#book_search_categ').focus()}}><FontAwesomeIcon icon={faXmark} size="xl" color="#9a9494"/></span>
                    </div>
                    <div>
                        <span className="search-btn" onClick={searchFn}> Qidirish</span>
                    </div>
                </div>
            </div>
            {cit?<h4 className="mt-3">{cit.concat(' ',district)}da {category} bo'yicha 234+ ta shifokorlar topildi.</h4>:<></>}
            <div className="book-doctors">
                <div className="book-doctors-div">
                    <div className="book-doctors-filter">
                        <button onClick={() => {setToggleModal(true); setActive(1)}}><i className="fa-solid fa-sliders fa-rotate-90"></i> Filterlar <i className="fa-solid fa-angle-down"></i></button>
                        <button className="filter_btns" onClick={() => {setToggleModal(true); setActive(1)}}>Yaqin Tumanlar <i className="fa-solid fa-angle-down"></i></button>
                        <button className="filter_btns" onClick={() => {setToggleModal(true); setActive(2)}}>Uchrashuv Vaqti <i className="fa-solid fa-angle-down"></i></button>
                        <button className="filter_btns" onClick={() => {setToggleModal(true); setActive(3)}}>Narxlar <i className="fa-solid fa-angle-down"></i></button>
                        <button className="filter_btns" onClick={() => {setToggleModal(true); setActive(4)}}>Shifokor Jinsi <i className="fa-solid fa-angle-down"></i></button>
                    </div>
                    <div className="book-doctors-body">
                        {doctors.map(el =>{
                                        if(el.id>=pageStart && el.id<pageStart+10)
                                        return <div key={el.id} className="book-doctor">
                                            <div className='find-doctor-div'>
                                                <div className='find-doctor-profile'>
                                                        <div className='find-doctor-img'><img src={require(`../../../images/doctors/${el.img}`)} alt="kjasbhdjhab"/></div>
                                                        <div className='find-doctor-data'>
                                                            <h5>{el.name}</h5>
                                                            <p>{el.exp}</p>
                                                            <p style={{lineHeight:"20px"}}>{el.workplace}</p>
                                                            <span><FontAwesomeIcon icon={faStar} color='gold'/> <b>{el.rayting}</b> <small>({el.votes} ta baholash)</small></span>
                                                            <p className="mt-2 mb-0"><i className="fa-regular fa-money-bill-1"></i> Bepul</p>
                                                            <div className='d-flex'>
                                                                <div className='find-doctor-locat'>
                                                                    <p><FontAwesomeIcon icon={faLocationDot} color='rgb(12, 12, 213)'/></p>
                                                                    <small>{el.dist}</small>
                                                                </div>
                                                                <div className='find-doctor-addres'>
                                                                    <p>{el.locat}</p>
                                                                </div>
                                                            </div>
                                                            <div className="available-time">
                                                                <i className="fa-regular fa-calendar"></i> <span>Bugungi Bo'sh Vaqti:</span> {el.time}
                                                                <p><i className="fa-regular fa-clock"></i> <span onClick={()=>{seeAllTimes(el.id); setBookApp(false)}}>Hamma Vaqtlarni Ko'rish</span></p>
                                                            </div>
                                                        </div>
                                                </div>
                                                <div className="book-app-btn">
                                                    <button onClick={()=>{callDoctor(el.id)}}>Qo'ng'iroq qilish</button>
                                                    <button onClick={()=>{seeAllTimes(el.id); setBookApp(false)}}>Uchrashuv belgilash</button>
                                                </div>    
                                            </div>
                                        </div>
                                      return ''})}
                    </div>
                    <div className="book-doctors-pages">
                        <button onClick={prev} className={pageStart === 1?"btn-disabled":""}><i className="fa fa-arrow-left" aria-hidden="true"></i> Oldingi</button>
                        <button onClick={next} className={pageStart >= doctors.length-1?"btn-disabled":""}>Keyingi <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
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
            {/* see all times login*/}
            <div className={seeTimings?"login-modal":"d-none"}>
                <div className="login-modal-dialog">
                    <div className="login-modal-content animated zoomIn faster pt-0" style={{animationDuration:"0.3s"}}>
                        <div className="p-4 doctor-modal-header">
                            <div className='find-doctor-profile flex-nowrap'>
                                <div className='find-doctor-img' style={{width:"80px", height:"90px"}}><img src={require(`../../../images/doctors/${doctorData.img}`)} alt="a"/></div>
                                    <div className='find-doctor-data'>
                                        <h5 className="text-secondary">{doctorData.name}</h5>
                                        <p>{doctorData.speciality}</p>
                                        <p className="mt-2 mb-0"><span style={{color:"goldenrod", fontWeight:500}}><i className="fa-regular fa-money-bill-1"></i> Uchrashuv Narxi:</span> {doctorData.price}</p>
                                    </div>
                            </div>
                            <button id="close_aval_time" style={{top:"9px"}}><FontAwesomeIcon icon={faXmark} size="xl" onClick={()=>{setSeeTimings(false)}}/></button>
                        </div>
                        <div className={bookApp?"d-none":"d-block"}>
                            <div className="timings-date">
                                <span onClick={prevDate}><i className="fas fa-angle-left fa-lg"></i></span>
                                <span onClick={nextDate}><i className="fas fa-angle-right fa-lg"></i></span>
                                { dates.map(el => { if(el.id>=dateIndex && el.id<dateIndex+3)
                                                    return <div className="timings-date-item" style={el.id===selectedDate?{borderBottom:"1.5px solid rgb(202, 4, 4)", color:"rgb(202, 4, 4)"}:{}}
                                                                onClick={()=>{setSelectedDate(el.id);}}>
                                                                <h1>{el.date}</h1>
                                                                <div>
                                                                    <p>{el.weekday}</p>
                                                                    <p>{el.month}</p>
                                                                </div>
                                                            </div>
                                                        return <></>}) }
                            </div>
                            <div className="timings-time">
                                <h5>Tushlikgacha</h5>
                                <div className="timings-time-morning">
                                    <span onClick={(e)=>{setBookApp(true);setSelectedTime(e.currentTarget.innerHTML)}}>10:00</span>
                                    <span onClick={(e)=>{setBookApp(true);setSelectedTime(e.currentTarget.innerHTML)}}>10:30</span>
                                    <span onClick={(e)=>{setBookApp(true);setSelectedTime(e.currentTarget.innerHTML)}}>11:00</span>
                                    <span onClick={(e)=>{setBookApp(true);setSelectedTime(e.currentTarget.innerHTML)}}>11:30</span>
                                </div>
                                <h5>Tushlikdan So'ng</h5>
                                <div className="timings-time-morning">
                                    <span onClick={(e)=>{setBookApp(true);setSelectedTime(e.currentTarget.innerHTML)}}>13:00</span>
                                    <span onClick={(e)=>{setBookApp(true);setSelectedTime(e.currentTarget.innerHTML)}}>13:30</span>
                                    <span onClick={(e)=>{setBookApp(true);setSelectedTime(e.currentTarget.innerHTML)}}>14:00</span>
                                    <span onClick={(e)=>{setBookApp(true);setSelectedTime(e.currentTarget.innerHTML)}}>14:30</span>
                                    <span onClick={(e)=>{setBookApp(true);setSelectedTime(e.currentTarget.innerHTML)}}>15:00</span>
                                    <span onClick={(e)=>{setBookApp(true);setSelectedTime(e.currentTarget.innerHTML)}}>15:30</span>
                                    <span onClick={(e)=>{setBookApp(true);setSelectedTime(e.currentTarget.innerHTML)}}>16:00</span>
                                    <span onClick={(e)=>{setBookApp(true);setSelectedTime(e.currentTarget.innerHTML)}}>16:30</span>
                                    <span onClick={(e)=>{setBookApp(true);setSelectedTime(e.currentTarget.innerHTML)}}>17:00</span>
                                    <span onClick={(e)=>{setBookApp(true);setSelectedTime(e.currentTarget.innerHTML)}}>17:30</span>
                                </div>
                            </div>
                        </div>
                        <div className={bookApp?"d-block book-app-final":"d-none"}>
                            <h6><span>Uchrashuv vaqti va sanasi:</span> {selectedTime}, {dates[selectedDate-1].date+'/'+dates[selectedDate-1].dateNum+'/'+new Date().getFullYear()}</h6>
                            <div className={user.name?'d-none':'d-block'}>
                                <label htmlFor="time_name">Ism*</label>
                                <input id="time_name" placeholder="Ismingizni kiriting"></input>
                                <label htmlFor="time_phone">Tel Raqam*</label>
                                <input value={'+998'} readOnly id="country_code"></input>
                                <input id="time_phone" placeholder="E.g. 931234567"></input>
                                <p><small>Bu raqamga SMS kode yuboriladi.</small></p>
                                <button onClick={bookAppointment}>Uchrashuv Belgilash</button>
                            </div>
                            <div className={user.name?"d-block":"d-none"}>
                                <h6><span>Mijoz Ismi:</span> {user.name}</h6>
                                <h6><span>Mijoz Tel Raqami:</span> {user.phone}</h6>
                                <button onClick={bookAppointment}>Uchrashuv Belgilash</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={toggleCall?"login-modal":"d-none"}>
                <div className="login-modal-dialog">
                    <div className="login-modal-content animated zoomIn faster" style={{animationDuration:"0.3s"}}>
                        <div className="login-modal-header">
                            <h4 className="mb-0">Shifokor Bilan Bog'lanish</h4>
                            <button style={{top:"9px"}}><FontAwesomeIcon icon={faXmark} size="lg" onClick={()=>{setToggleCall(false)}}/></button>
                        </div>
                        <div className="login-modal-body call-doctor">
                            <label >Ism*</label>
                            <input placeholder="Ismingizni kiriting"/>
                            <label>Tel Raqam*</label>
                            <div className="contact-phone">
                                <input value="+998" readOnly/>
                                <input placeholder="E.g. 934515547"/>
                            </div>
                            <button className="contact-submit">Bog'lanish</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookApp;