import { useState } from "react";
import { useTranslation } from "react-i18next";

const Language = () => {

    const { i18n } = useTranslation();
    const [ lan, setLan ] = useState({id:"uz", name:"O'zbekcha", src:"uz-flag.webp"});
    const languages = [
      {id:"uz", name:"O'zbekcha", src:"uz-flag.webp"},
      {id:"ru", name:"Русский", src:"ru-flag.webp"},
      {id:"kr", name:"Крилча", src:"uz-flag.webp"},
      {id:"en", name:"English", src:"us-flag.webp"},
    ]
    const changeLang = ( lan ) => {
      // console.log(lan);
      switch(lan){
        case 'ru': 
        i18n.changeLanguage('ru'); setLan({id:"ru", name:"Русский", src:"ru-flag.webp"});break;
        case 'en': i18n.changeLanguage('en'); setLan({id:"en", name:"English", src:"us-flag.webp"}); break;
        case 'kr': i18n.changeLanguage('kr'); setLan( {id:"kr", name:"Крилча", src:"uz-flag.webp"}); break;
        default: i18n.changeLanguage('uz'); setLan({id:"uz", name:"O'zbekcha", src:"uz-flag.webp"});
      }
    }

    return(
        <>
           <div className="baseline" data-bs-toggle="dropdown" aria-expanded="false">
                <span>
                    <img className="flag" src={require('../../images/'+lan.src)} alt="uz-flag"></img>
                </span>
                <span className="text-muted hover-blue">{lan.name}</span>
            </div>
            <ul className="dropdown-menu" style={{minWidth:"125px"}}>
                { languages.map(item => {if(item.id !== lan.id) return <li><span className="dropdown-item text-muted" onClick={() => { changeLang(item.id) }}><img className="flag" src={require('../../images/'+item.src)} alt="uz-flag"></img>{item.name}</span></li>} )}
            </ul>
        </>
    )

}

export default Language