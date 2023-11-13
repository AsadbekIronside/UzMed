import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Radio from '../../radios/Radio';

const UserSettings = () => {

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

    const genderCheck = (e) => {

    }

    return (
        <div className="user-settings">
            <div className='d-flex justify-content-center w-100'>
                <div className="user-settings-img">
                    <img src={require('../../../images/default_user.png')} alt="user-settings-img" />
                </div>
            </div>
            <div className="user-settings-form">
                    <div>
                        <label className='user-settings-label' htmlFor="first_name">Ism</label>
                        <input className='user-settings-input' id='first_name' name='f_name' value={userData.f_name}/>
                    </div>
                    <div>
                        <label className='user-settings-label' htmlFor="last_name">Familiya</label>
                        <input className='user-settings-input' id='last_name' name='l_name' value={userData.l_name}/>
                    </div>
                    <div>
                        <label className='user-settings-label' htmlFor="phone_num">Telefon raqam</label>
                        <input className='user-settings-input' id='phone_num' value={'+'.concat(userData.phone)}/>
                    </div>
                    <div>
                        <label className='user-settings-label' htmlFor='birthdate'>Tug'ilgan sana</label>
                        <input className='user-settings-input' id='birthdate' type='date'/>
                    </div>
                    <div>
                        <span className='user-settings-label'>Jins</span>
                        <Radio props={{name:"sex", values:['Erkak', 'Ayol'], changeHandler:genderCheck}}/>
                    </div>
                    <div>
                        <button>Saqlash</button>
                    </div> 
            </div>
        </div>
    );

}

export default UserSettings;