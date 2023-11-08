import { Link, useLocation } from 'react-router-dom'
import './Doctors.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faXmark, faStar, faPhone, faKeyboard, faCalendarDays, faChevronDown, faFilter, faSliders } from '@fortawesome/free-solid-svg-icons'
import getLocationInfo from '../../../functions/getLocationInfo'
import { useCallback, useState } from 'react';
import Breadcrumb  from "../../breadcrumbs/Breadcrumb"
import Pagination from '../../pagination/Pagination'
import Radio from '../../radios/Radio'
import Checkbox from '../../checkbox/Ckeckbox'

const Doctors = () => {

    const { state } = useLocation();
    const [ locat, setLocat ] = useState("");
    const [ focus, setFocus ] = useState(false);
    const [ pageNum, setPageNum ] = useState(0);
    const [ button, setButton ] = useState(0);
    const [ checked, setChecked ] = useState(false);
    const [ checkedRadio, setCheckedRadio ] = useState(false);
    const [ width, setWidth ] = useState(window.screen.availWidth);

    const doctors = [
        { id:"1", name:"Asadbek Shariyorov", experience:14, image:"default_m.jpg", rayting:4.7, votes:12, distance:2.5, address:"106 A, Sebzor st, Olmazor" },
        { id:"2", name:"Fazliddin Azizov", experience:10, image:"avatar-2.jpg", rayting:4.5, votes:22, distance:5.5, address:"16 A, Abdulla Qodiriy st, Olmazor" },
        { id:"3", name:"Xurshid Yo'ldoshev", experience:24, image:"avatar-3.jpg", rayting:4.3, votes:42, distance:10, address:"10 A, Amir temur st, Yunusobod" },
        { id:"4", name:"Maftuna Karimova", experience:34, image:"default_w.jpg", rayting:4, votes:92, distance:9, address:"106 A, Sebzor st, Olmazor" },
        { id:"5", name:"Malika Berdiyeva", experience:14, image:"avatar-5.jpg", rayting:4.7, votes:12, distance:2.5, address:"106 A, Sebzor st, Olmazor" },
        { id:"6", name:"Nozim Shonazarov", experience:14, image:"avatar-6.jpg", rayting:4.7, votes:12, distance:2.5, address:"106 A, Sebzor st, Olmazor" },
        { id:"7", name:"Zulfizar Hamdamova", experience:14, image:"avatar-8.jpg", rayting:4.7, votes:12, distance:2.5, address:"106 A, Sebzor st, Olmazor" },
        { id:"8", name:"Putin Vladimirov", experience:14, image:"default_m.jpg", rayting:4.7, votes:12, distance:2.5, address:"106 A, Sebzor st, Olmazor" },
        { id:"9", name:"Abbos Qambarov", experience:14, image:"default_m.jpg", rayting:4.7, votes:12, distance:2.5, address:"106 A, Sebzor st, Olmazor" },
        { id:"10", name:"Kate Winslet", experience:14, image:"avatar-4.jpg", rayting:4.7, votes:12, distance:2.5, address:"106 A, Sebzor st, Olmazor" },
        { id:"11", name:"Asadbek Shariyorov", experience:14, image:"default_m.jpg", rayting:4.7, votes:12, distance:2.5, address:"106 A, Sebzor st, Olmazor" },
        { id:"12", name:"Fazliddin Azizov", experience:10, image:"avatar-2.jpg", rayting:4.5, votes:22, distance:5.5, address:"16 A, Abdulla Qodiriy st, Olmazor" },
        { id:"13", name:"Xurshid Yo'ldoshev", experience:24, image:"avatar-3.jpg", rayting:4.3, votes:42, distance:10, address:"10 A, Amir temur st, Yunusobod" },
        { id:"14", name:"Maftuna Karimova", experience:34, image:"default_w.jpg", rayting:4, votes:92, distance:9, address:"106 A, Sebzor st, Olmazor" },
        { id:"15", name:"Malika Berdiyeva", experience:14, image:"avatar-5.jpg", rayting:4.7, votes:12, distance:2.5, address:"106 A, Sebzor st, Olmazor" },
        { id:"16", name:"Nozim Shonazarov", experience:14, image:"avatar-6.jpg", rayting:4.7, votes:12, distance:2.5, address:"106 A, Sebzor st, Olmazor" },
        { id:"17", name:"Zulfizar Hamdamova", experience:14, image:"avatar-8.jpg", rayting:4.7, votes:12, distance:2.5, address:"106 A, Sebzor st, Olmazor" },
        { id:"18", name:"Putin Vladimirov", experience:14, image:"default_m.jpg", rayting:4.7, votes:12, distance:2.5, address:"106 A, Sebzor st, Olmazor" },
        { id:"19", name:"Abbos Qambarov", experience:14, image:"default_m.jpg", rayting:4.7, votes:12, distance:2.5, address:"106 A, Sebzor st, Olmazor" },
        { id:"20", name:"Kate Winslet", experience:14, image:"avatar-4.jpg", rayting:4.7, votes:12, distance:2.5, address:"106 A, Sebzor st, Olmazor" },
        { id:"21", name:"Asadbek Shariyorov", experience:14, image:"default_m.jpg", rayting:4.7, votes:12, distance:2.5, address:"106 A, Sebzor st, Olmazor" },
        { id:"22", name:"Fazliddin Azizov", experience:10, image:"avatar-2.jpg", rayting:4.5, votes:22, distance:5.5, address:"16 A, Abdulla Qodiriy st, Olmazor" },
        { id:"23", name:"Xurshid Yo'ldoshev", experience:24, image:"avatar-3.jpg", rayting:4.3, votes:42, distance:10, address:"10 A, Amir temur st, Yunusobod" },
        { id:"24", name:"Maftuna Karimova", experience:34, image:"default_w.jpg", rayting:4, votes:92, distance:9, address:"106 A, Sebzor st, Olmazor" },
        { id:"25", name:"Malika Berdiyeva", experience:14, image:"avatar-5.jpg", rayting:4.7, votes:12, distance:2.5, address:"106 A, Sebzor st, Olmazor" },
        { id:"26", name:"Nozim Shonazarov", experience:14, image:"avatar-6.jpg", rayting:4.7, votes:12, distance:2.5, address:"106 A, Sebzor st, Olmazor" },
        { id:"27", name:"Zulfizar Hamdamova", experience:14, image:"avatar-8.jpg", rayting:4.7, votes:12, distance:2.5, address:"106 A, Sebzor st, Olmazor" },
        { id:"28", name:"Putin Vladimirov", experience:14, image:"default_m.jpg", rayting:4.7, votes:12, distance:2.5, address:"106 A, Sebzor st, Olmazor" },
        { id:"29", name:"Abbos Qambarov", experience:14, image:"default_m.jpg", rayting:4.7, votes:12, distance:2.5, address:"106 A, Sebzor st, Olmazor" },
        { id:"30", name:"Kate Winslet", experience:14, image:"avatar-4.jpg", rayting:4.7, votes:12, distance:2.5, address:"106 A, Sebzor st, Olmazor" },
    ];
    var numberOfPages;
    if(doctors.length % 8 === 0) numberOfPages = doctors.length/8;
    else numberOfPages = Math.ceil(doctors.length/8);

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(
            async(success) => {
                const data = await getLocationInfo(success.coords.latitude, success.coords.longitude);
                const county = data.county.split(' ')[0];
                setLocat(`${county}, ${data.city}`);
            },
            err => {
                console.log(err);
            });
    }

    const nextPages = () => {
        if(pageNum+8 <= doctors.length){
            setPageNum(pageNum+8);
        }
    }
    const prevPages = () => {
        if(pageNum-8 >= 0){
            setPageNum(pageNum-8);
        }
    }
    const randomPages = (id) => {
        setPageNum((id-1)*8);
    }

    const focusSearch = (id) => {
        if(id === 1 )document.getElementById("find-doctor-search").parentNode.style.outline = 'lightgrey solid 2px';
        else document.getElementById("find-doctor-locat").parentNode.style.outline = 'lightgrey solid 2px';
    }

    const changeChek = (e) => {
        if(e.target.checked) setChecked(true);
    }
    const changeRadio = (e) => {
        if(e.target.checked) setCheckedRadio(true);
    }
    window.addEventListener("resize", ()=> {
        setWidth(window.screen.availWidth);
    });
    return(
        <div>
            <Breadcrumb items={[{name:"home", url:"/"}, {name:"findDoctors", url:"/find-doctor"} , {name:state}]}/>
            <form className='find-dcotors-form'>
                <div className='d-flex flex-wrap column-gap-3 p-3 pb-lg-4 px-xl-5 justify-content-center'>
                    <div className='find-doctors-search'>
                        <label htmlFor='find-doctor-search'>Qidiring</label>
                        {focus?<input type='text' placeholder="E.g. Virusologiya" id='find-doctor-search' onFocus={() => focusSearch(1)}></input>:<input type='text' id='find-doctor-search' placeholder={state} onFocus={() => focusSearch(1)}></input>}
                        <span><FontAwesomeIcon icon={faXmark} size='lg' onClick={() => {setFocus(!focus)}}/></span>
                    </div>
                    <div className='find-doctors-search'>
                        <label htmlFor='find-doctor-locat'>Joylashuv</label>
                        <input type='text' placeholder='shahar yoki tuman' value={locat} id='find-doctor-locat' onFocus={() => focusSearch(2)}></input>
                        <span onClick={getLocation}><FontAwesomeIcon icon={faLocationDot} size='lg'/></span>
                    </div>
                    <div>
                        <button className='search-doctors-list'>Search</button>
                    </div>
                </div>
            </form>
            <div className='searching-doctors'>
                <h3>{locat===""?"Butun O'zbekiston bo'yicha":locat+" yaqinida"} {state} uchun 34 ta qidiruv natijalari</h3>
            </div>
            <div className='doctors-filter'>
                <div>
                    <p><span className='all-filter'>Filtrlar</span> <FontAwesomeIcon icon={faSliders} rotation={90}/></p>
                </div>
                <div style={{position:'relative'}}>
                        <button 
                        className={button===1?"border-blue":""} 
                        onClick={()=>{
                            button!==1?setButton(1):setButton(0); 
                            setCheckedRadio(false); 
                            document.querySelectorAll('[name="distance"]').forEach(el => el.checked=false)}}>Masofa <FontAwesomeIcon icon={faChevronDown} rotation={button === 1? 180:0}/></button>
                        <div className={width>735?"drop-menu":"drop-menu-modal"} style={button!==1?{display:"none"}:{display:"block"}}>
                            <div className={width>735?"":"drop-menu-content"}>
                                <div className='d-flex justify-content-between'>
                                    <h6>Masofa</h6>
                                    <button className='btn-close' onClick={()=>{setButton(0); }}></button>
                                </div>
                                {<Radio props={{name:"distance", values:["1 km", "5 km", "10 km", "25 km", "50 km", "100 km", "O'zbekiston bo'ylab"], changeHandler:changeRadio}}/>}
                                <div className='d-flex justify-content-end px-2 pt-3'>
                                    <span className={checkedRadio?"btn-filter":"show-btn-filter"}><small>Filter</small></span>
                                </div>
                            </div>
                        </div>
                </div>
                <div style={{position:'relative'}}>
                    <button 
                    className={button===2?"border-blue":""} 
                    onClick={()=>{
                        button!==2?setButton(2):setButton(0); setCheckedRadio(false)
                        document.querySelectorAll('[name="reyting"]').forEach(el => el.checked=false)}}>Reyting <FontAwesomeIcon icon={faChevronDown} rotation={button === 2? 180:0}/></button>
                    <div className={width>735?"drop-menu":"drop-menu-modal"} style={button!==2?{display:"none"}:{display:"block"}}>
                        <div className={width>735?"":"drop-menu-content"}>
                            <div className='d-flex justify-content-between'>
                                <h6>Reyting</h6>
                                <button className='btn-close' onClick={()=>{setButton(0); }}></button>
                            </div>
                            <div className='form-check'>
                                <input className='form-check-input' id="reyting1" name="reyting" type='radio' onChange={changeRadio}></input>
                                <label className='form-check-label' htmlFor="reyting1">
                                    <FontAwesomeIcon icon={faStar} color='gold'/>
                                    <FontAwesomeIcon icon={faStar} color='gold'/>
                                    <FontAwesomeIcon icon={faStar} color='gold'/>
                                    <FontAwesomeIcon icon={faStar} color='gold'/>
                                    <FontAwesomeIcon icon={faStar} color='gold'/>
                                </label>
                            </div>
                            <div className='form-check'>
                                <input className='form-check-input' id="reyting1" name="reyting" type='radio' onChange={changeRadio}></input>
                                <label className='form-check-label' htmlFor="reyting1">
                                    <FontAwesomeIcon icon={faStar} color='gold'/>
                                    <FontAwesomeIcon icon={faStar} color='gold'/>
                                    <FontAwesomeIcon icon={faStar} color='gold'/>
                                    <FontAwesomeIcon icon={faStar} color='gold'/>
                                    <FontAwesomeIcon icon={faStar} color='lightgray'/> va yuqori
                                </label>
                            </div>
                            <div className='form-check'>
                                <input className='form-check-input' id="reyting1" name="reyting" type='radio' onChange={changeRadio}></input>
                                <label className='form-check-label' htmlFor="reyting1">
                                    <FontAwesomeIcon icon={faStar} color='gold'/>
                                    <FontAwesomeIcon icon={faStar} color='gold'/>
                                    <FontAwesomeIcon icon={faStar} color='gold'/>
                                    <FontAwesomeIcon icon={faStar} color='lightgray'/>
                                    <FontAwesomeIcon icon={faStar} color='lightgray'/> va yuqori
                                </label>
                            </div>
                            <div className='form-check'>
                                <input className='form-check-input' id="reyting1" name="reyting" type='radio' onChange={changeRadio}></input>
                                <label className='form-check-label' htmlFor="reyting1">
                                    <FontAwesomeIcon icon={faStar} color='gold'/>
                                    <FontAwesomeIcon icon={faStar} color='gold'/>
                                    <FontAwesomeIcon icon={faStar} color='lightgray'/>
                                    <FontAwesomeIcon icon={faStar} color='lightgray'/>
                                    <FontAwesomeIcon icon={faStar} color='lightgray'/> va yuqori
                                </label>
                            </div>
                            <div className='form-check'>
                                <input className='form-check-input' id="reyting1" name="reyting" type='radio' onChange={changeRadio}></input>
                                <label className='form-check-label' htmlFor="reyting1">
                                    <FontAwesomeIcon icon={faStar} color='gold'/>
                                    <FontAwesomeIcon icon={faStar} color='lightgray'/>
                                    <FontAwesomeIcon icon={faStar} color='lightgray'/>
                                    <FontAwesomeIcon icon={faStar} color='lightgray'/>
                                    <FontAwesomeIcon icon={faStar} color='lightgray'/> va yuqori
                                </label>
                            </div>
                            <div className='d-flex justify-content-end px-2 pt-3'>
                            <span className={checkedRadio?"btn-filter":"show-btn-filter"}><small>Filter</small></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{position:'relative'}}>
                    <button className={button===3?"border-blue":""} 
                    onClick={()=>{
                        button!==3?setButton(3):setButton(0);
                        document.querySelectorAll('[name="gender"]').forEach(el => el.checked=false)}}>Shifokor jinsi <FontAwesomeIcon icon={faChevronDown} rotation={button === 3? 180:0}/></button>
                    <div className={width>735?"drop-menu":"drop-menu-modal"} style={button!==3?{display:"none"}:{display:"block"}}>
                        <div className={width>735?"":"drop-menu-content"}>
                            <div className='d-flex justify-content-between mb-2'>
                                <h6>Shifokor jinsi</h6>
                                <button className='btn-close' onClick={()=>{setButton(0); }}></button>
                            </div>
                            {<Radio props={{name:"gender", values:["Erkak", "Ayol"], changeHandler:changeRadio}}/>}
                            <div className='d-flex justify-content-end px-2 pt-3'>
                                <span className={checkedRadio?"btn-filter":"show-btn-filter"}><small>Filter</small></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{position:"relative"}}>
                    <button className={button===4?"border-blue":""} 
                    onClick={()=>{button!==4?setButton(4):setButton(0); setChecked(false);
                    document.querySelectorAll('[name="age"]').forEach(el => el.checked=false)}}>Shifokor yoshi <FontAwesomeIcon icon={faChevronDown} rotation={button === 4? 180:0}/></button>
                    <div className={width>735?"drop-menu":"drop-menu-modal"} style={button!==4?{display:"none"}:{display:"block"}}>
                        <div className={width>735?"":"drop-menu-content"}>
                            <div className='d-flex justify-content-between mb-2'>
                                <h6>Shifokor yoshi</h6>
                                <button className='btn-close' onClick={()=>{setButton(0); }}></button>
                            </div>
                            {<Checkbox props={{name:"age", values:["40 dan past", "41-50", "51-60", "61-70","70 dan yuqori"], changeHandler:changeChek}}/>}
                            <div className='d-flex justify-content-end px-2 pt-3'>
                                <span className={checked?"btn-filter":"show-btn-filter"}><small>Filter</small></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{position:"relative"}}>
                    <button className={button===5?"border-blue":""} 
                    onClick={()=>{button!==5?setButton(5):setButton(0); setCheckedRadio(false);
                    document.querySelectorAll('[name="language"]').forEach(el => el.checked=false)}}>So'zlashuv tili <FontAwesomeIcon icon={faChevronDown} rotation={button === 5? 180:0}/></button>
                    <div className={width>735?"drop-menu":"drop-menu-modal"} style={button!==5?{display:"none", right:"-50px", minWidth:"200px"}:{display:"block", right:"-50px", minWidth:"200px"}}>
                        <div className={width>735?"":"drop-menu-content"}>
                            <div className='d-flex justify-content-between mb-2'>
                                <h6>So'zlashuv tili</h6>
                                <button className='btn-close' onClick={()=>{setButton(0); }}></button>
                            </div>
                            {<Radio props={{name:"language", values:["O'zbekcha", "Русский", "English"], changeHandler:changeRadio}}/>}
                            <div className='d-flex justify-content-end px-2 pt-3'>
                                <span className={checkedRadio?"btn-filter":"show-btn-filter"}><small>Filter</small></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                { doctors.filter((item, index) => index >= pageNum && index < pageNum+8)
                .map(item => <div key={item.id} className='find-doctor-div'>
                                <div className='find-doctor-profile'>
                                        <div className='find-doctor-img'><img src={require(`../../../images/doctors/${item.image}`)} alt={item.image}/></div>
                                        <div className='find-doctor-data'>
                                            <h5>{item.name}</h5>
                                            <p>{state}</p>
                                            <p style={{fontWeight:"350"}}>{item.experience} yillik tajriba</p>
                                            <span><FontAwesomeIcon icon={faStar} color='gold'/> <b>{item.rayting}</b> <small>({item.votes} ta baholash)</small></span>
                                            <div className='d-flex'>
                                                <div className='find-doctor-locat'>
                                                    <p><FontAwesomeIcon icon={faLocationDot} color='rgb(12, 12, 213)'/></p>
                                                    <small>{item.distance} km</small>
                                                </div>
                                                <div className='find-doctor-addres'>
                                                    <p>{item.address}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='find-doctor-contact'>
                                            <p><button className='btn btn-outline-success'><FontAwesomeIcon icon={faPhone}/> Qo'ng'iroq qilish</button></p>
                                            <p><button className='btn btn-outline-danger'><FontAwesomeIcon icon={faKeyboard} /> Text yozish</button></p>
                                            <p><button className='btn btn-outline-secondary'><FontAwesomeIcon icon={faCalendarDays}/> Uchrashuv belgilash</button></p>
                                        </div>
                                </div>
                            </div>)} 
            </div>
            <div className='d-flex justify-content-center'>
                {doctors.length>8?<Pagination props={{numberOfPages, nextPages, prevPages, randomPages}}/>:""}
            </div>
        </div>
    );

}

export default Doctors