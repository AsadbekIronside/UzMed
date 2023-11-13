import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const UserCards = () => {

    const [ userData, setUserData ] = useState({ id:"", f_name:"", l_name:"", phone:"" });

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
            Navigate('/error-500');
          }
        })
        .catch(err => {
          console.log(err);
        });
    },[]);

    
    const copyCard = async() => {
        let num = document.getElementById('card_number').innerHTML;
        await navigator.clipboard.writeText(num.replaceAll(' ',''));
        console.log('Nusxa olindi');
    }

    return (
        <div className="user-cards">
            <h3 className="user-h">Mening kartalarim</h3>
            <div className="user-card-img">
                <img src={require('../../../images/card-back.jpg')} alt="card" />
            </div>
            <p>{userData.f_name.concat(' ', userData.l_name)}</p>
            <p id="card_number">1111 2222 3333 4444</p>
            <button>To'ldirish</button>
            <span>5,000 UZS</span>
            <span title="Karta raqamidan nusxa olish" onClick={copyCard}><i class="bi bi-copy"></i></span>
        </div>
    )

}

export default UserCards;