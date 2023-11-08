import { useTranslation } from "react-i18next";
import { Link, NavLink, useNavigate } from "react-router-dom";
import './Header.css'
import Language from "../../dropdowns/language";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';

const Header = () => {

    const [ phoneVal, setPhoneVal ] = useState("");
    const [ toggleLogin, setToggleLogin ] = useState(false);
    const [ isValid, setIsValid ] = useState(false);
    const [ valid1, setValid1 ] = useState(false);
    const [ valid2, setValid2 ] = useState(false);
    const [ showSMS, setShowSMS ] = useState(true);
    const [ showCode, setShowCode ] = useState(false);
    const [ showName, setShowName ] = useState(false);
    const [ code, setCode ] = useState('');
    const [ codeMatched, setCodeMatched ] = useState(false);
    const [ timer, setTimer ] = useState(150);
    const [ codeLen, setCodeLen ] = useState(false);
    const [ user, setUser ] = useState('');
    const [ userData, setUserData ] = useState({});

    const { t } = useTranslation();
    const navigate = useNavigate();

    useEffect(()=>{
      if(showCode){
        var intervalTimer = setTimeout(()=>{
          if(parseInt(timer)>0){
            setTimer(timer-1);
          }
          else clearTimeout(intervalTimer);
        }, 1000);
      }else{
        setTimer(150);
      }
      return () => clearInterval(intervalTimer);
    }, [showCode, timer]);

    const changeNumber = (e) => {
      var val = e.target.value;
      if(val.length>=9 && !val.includes(' ')){
        val = val.substring(val.length-9);
        val = val.substring(0,2)+' '+val.substring(2,5)+'-'+val.substring(5,7)+'-'+val.substring(7);
      }
      if(val.length === 3 && val.charAt(2)!==' ') val = val.substring(0,2)+' '+val.substring(2);
      if(val.length === 7 && val.charAt(6)!=='-') val = val.substring(0,6)+'-'+val.substring(6);
      if(val.length === 10 && val.charAt(9)!=='-' ) val = val.substring(0,9)+'-'+val.substring(9);

      setPhoneVal(val);
      if(isValid) setIsValid(false);
      if(valid1) setValid1(false);
      if(valid2) setValid2(false);
    }
    useEffect(() => {
      if(window.screen.availWidth<=500)!toggleLogin?document.body.style.overflow="hidden":document.body.style.overflow="scroll";
      else toggleLogin?document.body.style.overflow="hidden":document.body.style.overflow="scroll";
    },[toggleLogin]);

    useEffect(() => {
      document.getElementById('phone_number').addEventListener('keydown', (e)=> {
        if(e.key === "Enter"){
          document.querySelector('.login-modal-body button').click();
        }
      });
      var userData = JSON.parse(decodeURIComponent(document.cookie).split('=')[1]);
      setUser(userData['f_name']+' '+userData['l_name']);
    }, []);

    const sendNum = async() => {
      // +998934515547
      const num ="998"+phoneVal.replace(" ", '').replace(/-/g, '');
      if(num.length !== 12){
        setIsValid(true);
        setValid2(true);
        return;
      }
      if(num.search(/\d{12}/) !== 0){
        setIsValid(true);
        setValid1(true);
        return;
      }
      await fetch('http://localhost:8000/auth/send-sms', {
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
          to:num
        })
      })
      .then(response => response.json())
      .then(async(response) => {
        if(response.ok){
          setShowSMS(false);
          setShowCode(true);
        }else{
          navigate('/error-500');
        }
      })
      .catch(err => {
        console.log(err);
      });
    }

    const sendCode = async() => {
      const kode = document.getElementById('sms_code').value;
      if(kode.length === 0){
        setIsValid(true);
        return;
      }
      if(kode.length<5){
        setCodeLen(true);
        return;
      }
      await fetch('http://localhost:8000/auth/send-code', {
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
          code:kode
        })
      })
      .then(response => response.json())
      .then(async(response) => {
        if(response.ok){
          if(response.isMatched){
            setShowCode(false);
            if(!response.result) 
              setShowName(true);
            else{
                Swal.fire({
                text:"Saytga muvaffaqiyatli kirdingiz!",
                showConfirmButton:false,
                showCancelButton:false,
                position:"top-right",
                timer:2000,
                padding:"10px",
                width:'fit-content',
                background:"green",
                color:"white",
                hideClass:{
                  popup:"animated bounceOutRight"
                },
                showClass:{
                  popup:'animated bounceInRight faster'
                }
                });
                setToggleLogin(false);
              }
          }else{
            setCodeMatched(true);
            setIsValid(!isValid);
          }
        }
        else navigate('/error-500');
      })
      .catch(err => {
        console.log(err);
      });

    }

    const sendFullName = async() => {
      const f_name = document.getElementById('first_name').value;
      const l_name = document.getElementById('last_name').value;
      await fetch("http://localhost:8000/auth/send-name", {
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
          f_name:f_name,
          l_name:l_name
        })
      })
      .then(response => response.json())
      .then(async(res) => {
        if(res.ok){
          setShowName(false);
          Swal.fire({
            text:"Saytda muvaffaqiyatli ro'yxatdan o'tdingiz",
            position:"top-right",
            timer:2000,
            showConfirmButton:false,
            showCancelButton:false,
            background:"green",
            color:"white",
            padding:"10px",
            width:"fit-content",
            hideClass:{
              popup:"animated bounceOutRight"
            },
            showClass:{
              popup:'animated bounceInRight faster'
            }
          });     
          setToggleLogin(false);
        }
        else navigate('/error-500');
      })
      .catch(err => {
        console.log(err);
      });
    };  

    // login function
    const fn_login = () => {
      setToggleLogin(!toggleLogin);
      setShowSMS(true); 
      setShowCode(false); 
      setShowName(false); 
      setPhoneVal(""); 
      setCode(''); 
      setCodeMatched(false);
    }
    // getUserData
    const getUserData = async() => {
      await fetch('http://localhost:8000/get-user-data', {
        method:"get",
        credentials:'include', 
        mode:"cors"
      })
      // .then(response => response.json())
      .then(response => {
        if(response.ok){
          setUserData(response.result);
          console.log('type of result = '+typeof response.result);
        }else{
          console.log(response);
          navigate('/error-500');
        }
      })
      .catch(err => {
        console.log(err);
      });
    }

    return (
       <div>
         <nav className="navbar navbar-expand-sm">
          <NavLink className="navbar-brand fw-bold" to="/" id="logo">
            UzMed
          </NavLink>
              <button className="navbar-toggler border-0" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
                <span className="navbar-toggler-icon"></span>
              </button>
               <div className="collapse navbar-collapse justify-content-end gap-4" id="navbarText"> 
                   <NavLink className="btn border-0 text-muted hover-blue" to="/">{t('forDoctors')}</NavLink>
                    <div className="list-group-item">
                      <Language/>
                    </div>
                    <div className={!user?'d-block':'d-none'}>
                      <NavLink className="logIn btn border border-1 my-2 my-sm-0 text-muted" to="javascript:void(0);" 
                      onClick={fn_login}>
                        {t('login')}
                      </NavLink>
                    </div>
                    <div className={user?"user-profile hover-blue d-block":"d-none"}>
                      <NavLink to="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#user_profile"
                      onClick={getUserData}><i className="bi bi-person-fill fa-xl hover-blue" style={{color:"rgb(90, 90, 90)"}}></i></NavLink>
                    </div>
                </div>
              </nav>
               {/* offCanvas */}
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                  <div className="offcanvas-header">
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body">
                    <ul className="list-group">
                      <li className="list-group-item border-0"><Link className="btn border-0 text-muted hover-blue" to="/">{t('forDoctors')}</Link></li>
                      <li className="list-group-item border-0 ms-2"><Language/></li>
                      <li className={!user?"list-group-item border-0 ms-2 d-block":"d-none"}>
                        <Link className="logIn btn border border-1 my-2 my-sm-0 text-muted" data-bs-dismiss="offcanvas" 
                          onClick={fn_login} to='javascript:void(0);'>{t('login')}</Link>
                      </li>
                      <li className={user?"list-group-item border-0 d-block ps-3":"d-none"}>
                        <div className={"user-profile hover-blue"} style={{width:'fit-content',display:"inline-block", marginLeft:"5px"}}
                         data-bs-toggle="modal" data-bs-target="#user_profile">
                          <NavLink to="javascript:void(0);"><i className="bi bi-person-fill fa-xl hover-blue" style={{color:"rgb(90, 90, 90)"}}></i></NavLink>
                        </div>
                        <span className={user?'ms-1 d-inline hover-blue':'d-none'} style={{cursor:"pointer", fontWeight:"400", opacity:"0.8"}}>{user?user:''}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Login modal */}
                <div className="login-modal" style={toggleLogin?{display:"block"}:{display:"none"}}>
                  <div className="login-modal-dialog">
                    <div className="login-modal-content">
                      <div className="login-modal-header">
                        <h4>Kirish/Ro'yxatdan o'tish</h4>
                        <button type="button"><FontAwesomeIcon icon={faXmark} size="lg" onClick={()=>{setToggleLogin(false)}}/></button>
                      </div>
                      <div className="login-modal-body">
                        <form>
                          <div style={showSMS?{display:"block"}:{display:"none"}}>
                          {/* <div className="d-none"> */}
                            <label className="login-label" htmlFor="phone_number">
                              Telefon Raqam
                            </label>
                            <input className="login-input me-2" id="phone_code" value="+998" disabled style={isValid?{marginBottom:"0"}:{marginBottom:"20px"}}></input>
                            <input className="login-input w-75" value={phoneVal} onChange={changeNumber} maxLength={12} id="phone_number"
                            placeholder="Raqamingizni kiriting" style={isValid?{border:"1px solid red", marginBottom:"3px"}:{border:"1px solid rgb(198, 198, 198)"}} required></input>
                            <div className="ps-3 ps-sm-5 input-valid">
                              <small style={{color:"red", marginBottom:"20px"}} className={valid1?"d-block":"d-none"}>Nomer faqat raqamlardan iborat bo'lishi kerak.</small>
                              <small style={{color:"red", marginBottom:"20px"}} className={valid2?"d-block":"d-none"}>Nomer 9 ta raqamdan iborat bo'lishi kerak.</small>
                            </div>
                            <button type="button" onClick={sendNum}>SMS kod olish</button>
                          </div>
                          <div style={showCode?{display:"block"}:{display:"none"}}>
                          {/* <div> */}
                            <label className="login-label" htmlFor="sms_code">
                              SMS kodni kiriting:
                            </label>
                            <input className="login-input mb-2" id="sms_code" maxLength={5} style={isValid?{border:"1px solid red"}:{border:"1px solid rgb(198, 198, 198)"}}
                            placeholder="5 xonali kod" required value={code} onChange={(e)=>{
                              setCode(e.target.value); 
                              if(codeMatched)setCodeMatched(false);
                              if(codeLen)setCodeLen(false);
                              }}></input>
                            <div className="d-flex justify-content-left flex-wrap column-gap-3 ms-1 mb-2">
                              <p className={timer===0?'d-none':'d-block'}><i className="bi bi-clock"></i> <span>{timer}</span> sec.</p>
                              <p id="send-another-code" className={timer===0?'d-block':'d-none'} onClick={()=>{sendNum(); setTimer(150);}}>Boshqa kod yuborish</p>
                              <p className={codeMatched?"d-block":"d-none"} style={{color:"red", fontSize:"15px", fontWeight:"500", opacity:"0.7"}}>Kod xato kiritilgan.</p>
                              <p className={codeLen?"d-block":"d-none"} style={{color:"red", fontSize:"15px", fontWeight:"500", opacity:"0.7"}}>Kode 5 ta raqamdan iborat bo'lishi kerak.</p>
                            </div>
                            <button type="button" onClick={sendCode}>Kirish</button>
                          </div>
                          <div style={showName?{display:"block"}:{display:"none"}}>
                            <label className="login-label" htmlFor="first_name">Ism</label>
                            <input className="login-input" id="first_name" placeholder="Ismingizni kiriting" required></input>
                            <label className="login-label" htmlFor="last_name">Familiya</label>
                            <input className="login-input" id="last_name" placeholder="Familiyangizni kiriting" required></input>
                            <button type="button" onClick={sendFullName}>Ro'yxatdan o'tish</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  Modal user profile */}
                <div className="modal fade" id="user_profile" tabIndex={-1} aria-hidden="true">
                  <div className="modal-dialog modal-fullscreen-sm-down">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Mening Profilim
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                      </div>
                      <div className="modal-body">
                        <div className="d-flex flex-nowrap">
                          <div className="user-img">
                            <img src={require('../../../images/default_user.png')} alt="user-img"></img>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

       </div>
    );
}

export default Header