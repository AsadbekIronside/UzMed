import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./UserProfile.css";

const UserDashboard = () => {

    const [ userData, setUserData ] = useState({ id:"", f_name:"", l_name:"", phone:"" });
    const navigate = useNavigate();
    // getUserData
    useEffect(() => {
        fetch("http://localhost:8000/get-user-data", {
          credentials:'include',
          headers: {  
            Accept: "application/json"  
          } 
        })
        .then(response => response.json())
        .then(response => {
          if(response.ok){
            setUserData({...userData, ...response.result});
          }else{
            navigate('/error-500');
          }
        })
        .catch(err => {
          console.log(err);
        });
    },[]);



    return(

        <>
          <div className="user-profile-data">
                <div>
                    <img src={require('../../../images/default_user.png')} alt="userPhoto"></img>
                </div>
                <div className="pt-2">
                    <h4 className="mb-sm-3 mb-2">{userData.f_name.concat(' ').concat(userData.l_name)}</h4>
                    <p><i class="bi bi-telephone fa-lg text-success" style={{fontSize:"23px"}}></i>&nbsp;<span className="text-muted"> {'+'.concat(userData.phone)}</span></p>
                    <button className="mt-2" type="button"><i class="bi bi-cash-coin fa-lg"></i>&nbsp; Hisobni to'ldirish</button>
                </div>
            </div>
            <div className="user-ask-question">
                <h3 className="user-h">Sizni nima bezovta qiladi?</h3>
                <div>
                    <h6>Savolingizga top shifokorlordan bepul maslahat oling.</h6>
                    <textarea cols={5} rows={3}></textarea>
                    <button type="button" className="">So'rash</button>
                </div>
            </div>

        </>
    );

}

export default UserDashboard;