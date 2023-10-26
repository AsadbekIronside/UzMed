import { Link, useLocation } from 'react-router-dom'
import './Doctors.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faXmark, faStar, faPhone, faKeyboard, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import getLocationInfo from '../../../functions/getLocationInfo'
import { useState } from 'react';
import Breadcrumb  from "../../breadcrumbs/Breadcrumb"
import Pagination from '../../pagination/Pagination'

const Doctors = () => {

    const { state } = useLocation();
    const [ locat, setLocat ] = useState("");
    const [ focus, setFocus ] = useState(false);
    const [ pageNum, setPageNum ] = useState(0);

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
            <div className='doctors-filter'>Filters</div>
            <div>
                { doctors.filter((item, index) => index >= pageNum && index < pageNum+8)
                .map(item => <div key={item.id} className='find-doctor-div'>
                                <div className='find-doctor-profile'>
                                        <div className='find-doctor-img'><img src={require(`../../../images/doctors/${item.image}`)} alt={item.image}/></div>
                                        <div className='find-doctor-data'>
                                            <h5>{item.name}</h5>
                                            <p>{state}</p>
                                            <p>{item.experience} yillik tajriba</p>
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