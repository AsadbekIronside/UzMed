import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import './Body.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPeopleGroup, faShoppingBag, faQuestionCircle, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Body = () => {

    const [ liked, setLiked ] = useState(false);
    const { t } = useTranslation();
    const categories = [
        {id:1, name:"Dermatologiya", img:"dermat.jpg", url:"/category/dermatology"},
        {id:2, name:"Psixoterapiya", img:"depression.jpg", url:"/category/psixotherapy"},
        {id:3, name:"Stomatologiya", img:"teeth.webp", url:"/category/stomatology"},
        {id:4, name:"Kardiologiya", img:"heart.jpg", url:"/category/cardiology"},
        {id:5, name:"Seksologiya", img:"medicine.webp", url:"/category/sexology"},
        {id:6, name:"Diabetologiya", img:"diabet.jpg", url:"/category/diabetology"},
    ];

    const question_answers = [
        {id:"qa-1", ques: "Meni yoshim 24 da. Oxirgi paytlarda sochim juda ko'p to'kilyapti. To'kilishni kamaytirish uchun nima qilishim kerak?", photo: "avatar-1.jpg", name:"Dr.Malika Qurbonova", speciality:"Dermatolog, Toshkent", advice:"Soch to'kilishiga asosiy sabab fenni ko'p ishlatish va qon tarkibini buzilishi. Davolashda qazg‘oqli dermatitda maxsus shampun, psor"},
        {id:"qa-2", ques: "Menga vazn yig'ish uchun to'g'ri yo'riqnoma va dorilar ro'yxati kerak", photo: "avatar-2.jpg", name:"Dr.Jasurbek Yo'ldoshev", speciality:"Dietolog, Toshkent", advice:"Vazn olishning poydevori — kaloriya ortiqchaligidir. Sarflayotgandan ko’ra ko’proq kaloriya qabul qiling. Agar siz ushbu asosda harkat qilsan"},
        {id:"qa-3", ques: "Anchadan buyon o'zimni ruhan siqilgan his qilyapman. Tushkunlikdan chiqishga yordam bering", photo: "avatar-8.jpg", name:"Dr.Maftuna Karimova", speciality:"Psixolog, Toshkent", advice:"Birinchidan yo'giz qolmaslikka harakat qiling. Hayotga boshqacha nigoh bilan qarashga intiling, o'tmishingizni kamroq o'ylang va kelajak sari ildam qad"}
    ];

    const likedQuesAns = (id) => {
        setLiked(!liked);
    }

    return(
        <div className="container-fluid p-0">
                <div className="row px-xl-0 px-md-5 px-1" id="backImage">
                    <div className="col-12 col-md-7 order-2 order-md-1 ms-xl-5">
                        <h3 className="mato">Sog'liqingizga g'amxo'r bo'ling va <span>online tibbiy xizmatlar</span> bilan kutishlarga ketadigan vaqtingizni tejang!</h3>
                        <div className="row text-white mx-md-1 mx-2">
                            <div className="col-4">
                                <span ><FontAwesomeIcon icon={faPeopleGroup} size="3x"/></span>
                                <p>Toshkentdagi deyarli har bir shifokorning profili</p>
                            </div>
                            <div className="col-4">
                                <FontAwesomeIcon icon={faShoppingBag} size="3x"/>
                                <p>So'g'liqqa foydali mahsulotlar va dorilar uchun online xarid</p>
                            </div>
                            <div className="col-4">
                                <FontAwesomeIcon icon={faQuestionCircle} size="3x"/>
                                <p>Savollar va ularga tajribali shifokorlardan javoblar</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 col-xl-4 order-1 order-md-2">
                        <img src={require("../../../images/doctors.png")} style={{width:"100%"}} alt="doc"/>   
                    </div>
                </div>
                <div className="categories row">
                    <h4 className="mb-3">TOP KATEGORIYALAR</h4>
                    { categories.map(cat => <div key={cat.id.toString()} className="col-6 col-md-4 col-lg-3 col-xl-2 mt-xl-0 category">
                                                <img className="category-img" src={require(`../../../images/${cat.img}`)} alt="categoryphoto"/>
                                                <Link to={cat.url}>{cat.name}</Link>
                                            </div>) }
                </div>
                <div className="question-answer p-2 p-md-3 p-xl-5">
                    <h4>SAVOLLAR & JAVOBLAR</h4>
                    <div className="row">
                        {question_answers.map(el => <div className="col-12 col-md-6">
                                                        <div className="question-card">
                                                            <p className="qc-question">{el.ques}</p>
                                                            <div className="py-3">
                                                                <div className="qc-doctor-profile mb-2">
                                                                        <span><img src={require('../../../images/doctors/'+el.photo)} alt={el.photo} /></span>
                                                                        <div>
                                                                            <Link to="/">{el.name}</Link>
                                                                            <p>{el.speciality}</p>
                                                                        </div>
                                                                </div>
                                                                <div className="qc-doctor-consult">
                                                                    <p>{el.advice}<span>...Davomini o'qish</span></p>
                                                                </div>
                                                            </div>
                                                            <div className="qc-footer">
                                                                <div><Link to="/">boshqa javoblar</Link></div>
                                                                <div><span onClick={() => {likedQuesAns(el.id)}}>{liked?<i className="fa-solid fa-heart fa-lg"></i>:<i className="fa-regular fa-heart fa-lg"></i>}</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                        <div className="col-12 col-md-6">
                            <div className="get-brief-answers">
                               <div className="d-flex gap-2">
                                    <div><FontAwesomeIcon icon={faEnvelope} color="rgb(226, 14, 14)" size="lg"/></div> 
                                    <div>
                                        <h5>Savol so'rash</h5>
                                        <p>Doktorlardan bepul maslahat oling</p>
                                    </div>
                               </div>
                                <form>
                                    <textarea cols="5" rows="4"></textarea>
                                </form>
                                <div className="d-flex justify-content-end">
                                    <button>Jo'natish</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="news">
                    <h4 className="mb-4">SO'NGI YANGILIKLAR</h4>
                    <div className="d-flex flex-wrap">
                        <iframe  width="540px" height="320px" className="news-video mx-auto mb-3" src="https://www.youtube.com/embed/eU6yF_JOblU?si=UqXF4kSyD4DVoqmd" 
                            title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <iframe width="540px" height="320px" className="news-video mx-auto" src="https://www.youtube.com/embed/KeeWyJULzoY?si=WJZ0Xc4dnKJDO58z" title="YouTube video player" frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
        </div>
    );
}

export default Body