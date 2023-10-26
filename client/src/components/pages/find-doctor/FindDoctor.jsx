import { Link } from "react-router-dom"
import "./FindDoctor.css"
import { useState } from "react";
import Breadcrumb from "../../breadcrumbs/Breadcrumb";

const FindDoctor = () => {

    const [ expand, setExpand ] = useState(false);

    const specialities = [
        {categ:"A", items:[ "Akusherlik", "Ankologiya", "Alergologiya", "Andrologiya", "Angiologiya", "Anesteziologiya va reanimatologiya" ]},
        {categ:"B", items:[ "Bakterilogiya", "Balneoterapiya" ]},
        {categ:"D", items:[ "Dermatologiya", "Diabetologiya", "Defektologiya va surdologiya", "Diagnostika", "Dietologiya", "Doppler" ]},
        {categ:"E", items:[ "Emlash", "EKG", "Embriologiya", "Endokrinologiya", "Endoskopiya", "Epidemiologiya", "Epileptologiya" ]},
        {categ:"F", items:[ "Fizioterapiya", "Flebologiya", "Ftiziatriya", "Funktsional diagnostika" ]},
        {categ:"G", items:[ "Gastroenterologiya", "Gematologiya", "Genetika", "Gepatologiya", "Geriatriya va gerontologiya", "Ginekologiya", "Girudoterapiya", "Gomeopatiya" ]},
        {categ:"I", items:[ "Immunoferment tahlil", "Immunologiya", "Igna bilan davolash" ]},
        {categ:"J", items:[ "Jismoniy terapiya", "Jarrohlik" ]},
        {categ:"K", items:[ "Kardiologiya", "Kinesiologiya", "Koloproptologiya", "Kosmetologiya" ]},
        {categ:"l", items:[ "Labaratoriyalar", "LOR" ]},
        {categ:"M", items:[ "Mammologiya", "Manual terapiya", "Massaj", "Mikologiya", "Mikrobiologiya", "MRT" ]},
        {categ:"N", items:[ "Narkologiya", "Nevrologiya", "Nevropatologiya", "Neyropsixologiya", "Neyrofiziologiya", "Neonatologiya", "Nefrologiya", "Neyroxirurgiya" ]},
        {categ:"O", items:[ "Onkologiya", "Ortopediya", "Osteopatiya", "Oftalmologiya" ]},
        {categ:"P", items:[ "Parazitologiya", "Pediatriya", "Plastik jarrohlik", "Proktologiya", "Psixiatriya", "Pulmonologiya" ]},
        {categ:"R", items:[ "Reabilitatsiya", "Revmotologiya", "Rentgenologiya", "Reproduktiv salomatlik", "Refleksoterapiya" ]},
        {categ:"S", items:[ "Surdologiya", "Sport tibbiyoti", "Somnologiya", "Stomatologiya", "Skrining", "Statsionar" ]},
        {categ:"T", items:[ "Terapiya", "Transfusiologiya", "Trixologiya", "Toksikologiya", "Travmatologiya", "Transplantologiya" ]},
        {categ:"U", items:[ "Urologiya", "Ultratovush", "UZI (Ultratovush)" ]},
        {categ:"V", items:[ "Veneralogiya", "Vertebrologiya", "Virusologiya" ]},
        {categ:"Y", items:[ "Yuqumlio kasalliklar" ]}
    ];

    const illnesses = [
        "Bosh og'rig'i",
        "Tish og'rig'i",
        "Soch to'kilishi",
        "Holsizlik",
        "Uyqusizlik",
        "Stressga tushish",
        "Oshqozon og'rig'i",
        "Grip",
        "Suyak lat yeyishi",
        "Ich ketish",
        "Tajovvuskor bo'lish",
        "Teridagi kasalliklar",
        "Ko'p uxlash",
        "Xotira pasayishi",
        "Bosh aylanish"
    ]

    return(
        <div>
            <Breadcrumb items={[{name:"home", url:"/"}, {name:"findDoctors"}]}/>
            <div className="find-doctor">
                <h4 style={{fontFamily:"'Carter one'", color:"#565454"}}>Yo'nalishlar bo'yicha doktorlarni izlang</h4>
                <p>Quyidagi yo'nlishlardan birini tanlash orqali siz doktorlari orqali bog'lana olasiz va klinikalarda doktor qabuli uchun navbat ola olasiz.</p>
            </div>
            <div className="ps-md-3 ps-lg-0 ps-xl-5 pb-3">
                <ul className="list-speciality">
                    {expand? specialities.map(elem =><li key={elem.categ} className="speciality-group">
                                                        <h4><span>{elem.categ}</span></h4>
                                                        <ul>
                                                            {elem.items.map((el, index) => <li key={index.toString()}><Link to="doctors-list" state={el}>{el}</Link></li>)}
                                                        </ul>
                                                    </li> )
                           :specialities.filter(elem => elem.categ < "G")
                                        .map(elem => <li key={elem.categ} className="speciality-group">
                                                        <h4><span>{elem.categ}</span></h4>
                                                        <ul>
                                                            {elem.items.map((el, index) => <li key={index.toString()}><Link to="doctors-list" state={el}>{el}</Link></li>)}
                                                        </ul>
                                                    </li>)}

                </ul>
                <div className="d-flex justify-content-center"><button className="btn-expand" onClick={() => {setExpand(!expand)}}>{expand? "Qisqartirish":"Hammasini ko'rish"}</button></div>
            </div>
            <div className="find-doctor">
                <h5 style={{fontFamily:"'Carter one'", color:"#565454"}}>Kasallik yoki sog'liqdagi muammolar bo'yicha doktorlarni izlang</h5>
            </div>
            <div className="mb-5">
                <ul className="list-illnesses">
                    {illnesses.map((elem, index )=><li key={index.toString()}><Link>{elem}</Link></li> )}
                </ul>
            </div>
        </div>
    )
}

export default FindDoctor