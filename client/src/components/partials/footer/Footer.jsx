import { Link } from "react-router-dom";
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTelegram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faClose, faMagnifyingGlass, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import $ from "jquery"
import { useState } from "react";
import getLocationInfo from "../../../functions/getLocationInfo";

const Footer = () => {
    
    const year = new Date().getFullYear();
    // hooks
    const [ showCanvas, setShowCanvas ] = useState(false);
    const [ location, setLocation ] = useState("");
 
    const searchClinic = () => {
        
        $('.search-clinic2').css({border:"1px solid black"});
        $('.search-clinic2').css({outline: "2px solid white"});
        if(showCanvas){
            $('#offcanvasSearch').addClass('hide');
            $('#offcanvasSearch').removeClass('show');
        }else{
            $('#offcanvasSearch').addClass('show');
            $('#offcanvasSearch').removeClass('hide');
        }
        setShowCanvas(!showCanvas);

    }
    const closeOffCanvas = () => {
        $('#offcanvasSearch').addClass('hide');
        $('#offcanvasSearch').removeClass('show');
        setShowCanvas(!showCanvas);
        $('.search-clinic2').css({border:"0"});
        $('.search-clinic2').css({outline: "none"});
    }
    const focusSearchClinic = (id) => {
        $('.search-input-search').css({outline: "3px solid white", border:"1px solid darkblue"});
        $('.search-location').css({outline: "3px solid white", border:"1px solid darkblue"});
        $('.search-btn-div').css({outline:"3px solid white", border:"1px solid darkblue"});
        if(id === 1){
            $('.search-input-search').css({backgroundColor: '#eeeeee'});
            $('.search-input-search input').css({backgroundColor: '#eeeeee'});
            $('.find-current-location').css({display:"none"});
            $('.search-input-search input').focus();
        }else{
            $('.search-location').css({backgroundColor: '#eeeeee'});
            $('.search-location input').css({backgroundColor: '#eeeeee'});
            $('.find-current-location').css({display:"block"});
            $('.search-location input').focus();
        }
    }
    $(document).on('click', (event) => {    

        const el = $('.search-location span');
        const el2 = $('.search-location input');
        const el3 = $('.search-input-search span');
        const el4 = $('.search-input-search input');

        if(!el.is(event.target) && !el2.is(event.target)){
            $('.find-current-location').css({display:"none"});
            $('.search-location').css({backgroundColor: 'white'});
            $('.search-location input').css({backgroundColor: 'white'});
        }
        if(!el3.is(event.target) && el4.is(event.target)){
            $('.search-input-search').css({backgroundColor: 'white'});
            $('.search-input-search input').css({backgroundColor: 'white'});
        }
        if(!el2.is(":focus") && !el4.is(":focus")){
            $('.search-input-search').css({outline: "none", border:"none", borderRight:"1px solid gray"});
            $('.search-location').css({outline: "none", border:"none"});
            $('.search-btn-div').css({outline: "none", border:"none"});
        }
    });

    const getCurrentPosition = () => {
        navigator.geolocation.getCurrentPosition(async(succ)=>{
           const data = await getLocationInfo(succ.coords.latitude, succ.coords.longitude);
           const county = data.county.split(' ')[0];
           setLocation(`${county}, ${data.city}`);
        },
        (err)=> {console.log(err);});
    }

    return (
       <div className="container-fluid">
         <div className="row">
            <div className="col-12 search-clinic">
                <h3>Doktorlar va klinikalar izlash</h3>
                <div className="d-flex mb-1" id="serachInput">
                    <div className="search-input-search">
                        <span onClick={() => {focusSearchClinic(1)}}>Doktorlarni kasallik, kategoriya bo'yicha izlash</span>
                        <input className="text-muted w-100" type="text" placeholder="E.g. Oshqozon og'rig'i" onFocus={() => {focusSearchClinic(1)}}></input>
                    </div>
                    <div className="search-location">
                       <span onClick={() => {focusSearchClinic(2)}}>Joylashuv</span>
                       <input className="text-muted w-100" type="text" placeholder="Shahar yoki tuman" onFocus={() => {focusSearchClinic(2)}} value={location}></input>
                    </div>
                    <div className="search-btn-div">
                        <button type="button" className="search-btn"><b>Search</b></button>
                    </div>
                </div>
                <div className="find-current-location">
                    <Link className="current-location" onClick={getCurrentPosition}><FontAwesomeIcon icon={faLocationDot} size="lg"/> Hozirgi joylashuv</Link>
                </div>
                <div className="search-clinic2 text-muted d-none" onClick={searchClinic}>
                    <span className="ms-2 ms-lg-4" style={{fontSize:"12px", width:"80%", display:"inline-block", paddingTop:"5px", overflowX:"hidden"}}>Doktorlarni kasallik, kategoriya bo'yicha izlash</span>
                    <span style={{position:"absolute", right:"15px"}}><FontAwesomeIcon icon={faMagnifyingGlass} size="lg" color="red"/></span>
                </div>
            </div>
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
         {/* offCanvas */}
         <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasSearch">
                  <div className="offcanvas-header" style={{backgroundColor:"rgb(21, 21, 142)", paddingBottom:"6px"}}>
                    <button type="button" onClick={closeOffCanvas} className="close-btn"><FontAwesomeIcon icon={faClose} size="xl" color="white"/></button>
                    <button type="button" className="search-btn-canvas"><b>Search</b></button>
                  </div>
                  <div className="offcanvas-form">
                        <label className="form-label" htmlFor="searchInput"> Doktorlarni kasallik va kategoriya bo'yicha izlash</label>
                        <input className="form-control" id="searchInput" type="text" placeholder="E.g. Oshqozon og'rig'i" onFocus={()=>{}}></input>
                        <label className="form-label" htmlFor="searchLocation">Joylashuv</label>
                        <input className="form-control text-muted" id="searchLocation" type="text" placeholder="Shahar yoki tuman" value={location}/>
                    </div>
                  <div className="offcanvas-body pt-3 ps-3">
                     <Link className="current-location" onClick={getCurrentPosition}><FontAwesomeIcon icon={faLocationDot} size="lg"/> Hozirgi joylashuv</Link>
                  </div>
         </div>
       </div>
    );
}

export default Footer