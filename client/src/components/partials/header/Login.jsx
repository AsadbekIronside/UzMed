import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import { useTranslation } from "react-i18next";
import "./Header.css";

const Login = () => {

    const [ showSMS, setShowSMS ] = useState(true);
    const [ showCode, setShowCode ] = useState(false);
    const [ showName, setShowName ] = useState(false);
    const [ code, setCode ] = useState('');
    const [ codeMatched, setCodeMatched ] = useState(false);
    const [ timer, setTimer ] = useState(150);
    const [ codeLen, setCodeLen ] = useState(false);
    const [ phoneVal, setPhoneVal ] = useState("");
    const [ toggleLogin, setToggleLogin ] = useState(false);
    const [ isValid, setIsValid ] = useState(false);
    const [ valid1, setValid1 ] = useState(false);
    const [ valid2, setValid2 ] = useState(false);

    const navigate = useNavigate();
    const { t } = useTranslation();

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
        if(window.screen.availWidth<=500){toggleLogin?document.body.style.overflow="hidden":document.body.style.overflow="scroll";}
        else toggleLogin?document.body.style.overflow="hidden":document.body.style.overflow="scroll";
    },[toggleLogin]);
  
    useEffect(() => {
        document.getElementById('phone_number').addEventListener('keydown', (e)=> {
          if(e.key === "Enter"){
            document.querySelector('.login-modal-body button').click();
          }
        });
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
          credentials:'include',
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
          credentials:'include',
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

    return (
      <>
        <NavLink id="login" className="logIn btn border border-1 my-2 my-sm-0 text-muted" to="javascript:void(0);" 
        onClick={fn_login}>
         {t('login')}
       </NavLink>
        <div className="login-modal" style={toggleLogin?{display:"block"}:{display:"none"}}>
            <div className="login-modal-dialog">
            <div className="login-modal-content animated zoomIn faster">
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

      </>
    );

}

export default Login;