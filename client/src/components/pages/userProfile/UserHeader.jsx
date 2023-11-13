import { useState } from "react";
import Language from "../../dropdowns/language";
import { NavLink, useNavigate } from "react-router-dom";
import "./UserProfile.css";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const UserHeader = () => {

    const [ toggleMenu, setToggleMenu ] = useState(false);
    const [ active, setActive ] = useState(parseInt(localStorage.getItem('page')));
    const navigate = useNavigate();

    const logOutAccount = () => {
        setActive(5);
        if(window.screen.availWidth<576)setToggleMenu(false); 
        Swal.fire({
            icon:'warning',
            title:"Akkountingizdan chiqishni qohlaysizmi?",
            text:'Agar akkountingizdan chiqsangiz qaytib kira olmaysiz.',
            showCancelButton:true,
            showConfirmButton:true,
            confirmButtonColor:'green',
            confirmButtonText:"Ha, tasdiqlayman",
            cancelButtonColor:"red",
            cancelButtonText:"Yo'q, bekor qil",
            background:"aliceblue",
            customClass:"delete-account"
        })
        .then(async(success) => {
            if(success.isConfirmed){
                await fetch('http://localhost:8000/delete-user',{
                    method:"DELETE",
                    credentials:"include"
                })
                .then(response => response.json())
                .then(response => {
                    if(response.ok){
                        window.close();
                        Cookies.remove('user');
                    }else  navigate('/error-500');
                })
                .catch(err => {
                    console.log(err);
                });
            }
            else if(success.isDismissed){
                Swal.fire({
                    icon:'info',
                    title:'Rad etildi!',
                    text:"To'g'ri qaror qildingiz.",
                    showConfirmButton:false,
                    customClass:"delete-account",
                    timer:1600
                })
            }
        })
        .catch(err => {
            console.log(err);
        });

    }

    return(
        <>
            <div className={toggleMenu?"user-sidebar-menu user-sidebar-canvas animated slideInLeft faster":"user-sidebar-menu"}>
                <div className="menu-logo">
                    <NavLink className="fw-bold logo" to="/">
                        UzMed
                    </NavLink>
                    <span onClick={() => {setToggleMenu(!toggleMenu);}}><i class="bi bi-x-lg"></i></span>
                </div>
                <ul>
                    <li>
                        <NavLink to="/user-profile/:dashboard" className={active===1?'active-link':''} onClick={() => {
                            setActive(1);if(window.screen.availWidth<576)setToggleMenu(false);
                            localStorage.setItem('page','1')}}><i className="bi bi-grid fa-lg"></i> <span>Bosh sahifa</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/user-profile/:cards" className={active===2?'active-link':''} onClick={() => {
                            setActive(2);if(window.screen.availWidth<576)setToggleMenu(false);
                            localStorage.setItem('page', '2')}}><i className="bi bi-credit-card-2-back fa-lg"></i> <span>Mening kartalarim</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/user-profile/:payment-history" className={active===3?'active-link':''} onClick={() => {
                            setActive(3);if(window.screen.availWidth<576)setToggleMenu(false);
                            localStorage.setItem('page', '3')}}><i className="bi bi-file-earmark-text fa-lg"></i> <span>To'lovlar tarixi</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/user-profile/:settings" className={active===4?'active-link':''} onClick={() => {
                            setActive(4);if(window.screen.availWidth<576)setToggleMenu(false);
                            localStorage.setItem('page', '4')}}><i className="bi bi-gear fa-lg"></i> <span>Sozlamalar</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="#" className={active===5?'active-link':''} style={{color:"red"}} onClick={logOutAccount}><i class="bi bi-box-arrow-left fa-lg"></i> <span>Chiqish</span></NavLink>
                    </li>
                </ul>
            </div>
            <div className="user-header">
                <button type="button" onClick={() => {setToggleMenu(true)}}><i class="bi bi-list fa-2x"></i></button>
                <Language/>
                <div><i class="fa-regular fa-comments fa-xl"></i></div>
            </div>
        </>
    );

}

export default UserHeader;