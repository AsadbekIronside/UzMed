import "./CartNav.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const AllCategories = () => {

    const [ toggleDropdown, setToggleDropdown ] = useState(true);
    const [ toggleCategory, setToggleCategory ] = useState(0);

    const protein = [
        {name:"Massa Olish Uchun", url:"proteins/:gaining-mass"},
        {name:"Protein Bar", url:"proteins/:protein-bar"},
        {name:"Protein Tabletkalar", url:"proteins/:tablets"},
        {name:"Amino Mahsulotlar", url:"proteins/:amino"}
    ];
    const skinHair = [
        {name:"Soch Uchun Mahsulotlar", url:"skin-hair/:hair"},
        {name:"Teri Uchun Mahsulotlar", url:"skin-hair/:skin"},
        {name:"Tana Uchun Mahsulotlar", url:"skin-hair/:body"}
    ];
    const child = [
        {name:"Bola Terisi Uchun Mahsulotlar", url:"child/:skin"},
        {name:"Bola Sochi Uchun Champunlar", url:"child/:hair"},
        {name:"Bola Immunitetini Yaxshilash", url:"child/:immunity"},
        {name:"Bola Uchun Vitaminlar", url:"child/:vitamins"}
    ];
    const fitnes = {name:"Fitnes Uchun", lists:[
        {name:"Smart Soatlar", url:"fitnes/:smart-gadgets"},
        {name:"Fitnes O'yinchoqlar", url:"fitnes/:fitnes-toys"},
    ]};
    const sexualWelth = {name:"Jinsiy Salomatlik", lists:[
        {name:"Ayollar Jinsiy Salomatligi", url:"wellness/:women"},
        {name:"Erkaklar Jinsiy Salomatligi", url:"wellness/:men"}
    ]};
    const foodDrink = {name:"Ovqat & Ichimliklar", lists:[
        {name:"Sog'lom Nonushta", url:"drinks/:healthy-breakfast"},
        {name:"Asal, Saryog' & Murabbolar", url:"drinks/:honey"},
        {name:"Fastfood", url:"drinks/:fastfood"},
        {name:"Sog'lom Ichimliklar", url:"drinks/:healthy-drinks"},
        {name:"Yog'lar", url:"drinks/:oil"},
        {name:"Choy & Kofelar", url:"drinks/:tea-coffee"}
    ]};

    const vitamins = {name:"Vitamin & Qo'shimchalar", lists:[
        {name:"Vitaminlar", url:"vitamins/:vitamins"},
        {name:"Jigar Uchun Moddalar", url:"vitamins/:for-liver"},
        {name:"Suyak va Bo'g'imlar Uchun", url:"vitamins/:for-bones"},
        {name:"Immunitet Uchun", url:"vitamins/:immunity"},
        {name:"Miya Uchun", url:"vitamins/:for-brain"},
        {name:"Ko'z Uchun", url:"vitamins/:for-eyes"},
        {name:"Uyquni Yaxshilovchi Moddalar", url:"vitamins/:for-sleeping"},
        {name:"O'pka Uchun Moddalar", url:"vitamins/:for-lungs"},
        {name:"Soch To'kilishiga Qarshi Vositalar", url:"vitamins/:for-hair"}
    ]};
    const diabet = {name:"Vaznga Bog'liq", lists:[
        {name:"Ozish Uchun Ichimliklar", url:"diabet/:weight-drinks"},
        {name:"O'zish Uchun Ovqatlar", url:"diabet/:weight-meals"},
        {name:"Ozish Uchun Vositalar", url:"diabet/:weight-supplements"},
        {name:"Vazn yig'ish Uchun vositalar", url:"diabet/:weight-cut"}

    ]};

    return(
                <div className="cart-dropdown">
                    <button id="dropdown_btn1" className="text-white" type="button" onMouseOver={() => {setToggleDropdown(false)}} onMouseLeave={() => {setToggleDropdown(true); setToggleCategory(0)}}>
                        Hamma Kategoriyalar <i className={toggleDropdown?"fa-solid fa-angle-down":"fa-solid fa-angle-up"}></i>
                    </button>
                    <button id="dropdown_btn2" className="text-white" type="button" onClick={() => {setToggleDropdown(!toggleDropdown); setToggleCategory(0);}}>
                        Hamma Kategoriyalar &nbsp;<i className={toggleDropdown?"fa-solid fa-angle-down":"fa-solid fa-angle-up"}></i>
                    </button>
                    <ul className={toggleDropdown?"cart-dropdown-menu":"cart-dropdown-menu show"} onMouseOver={() => {setToggleDropdown(false)}} onMouseLeave={() => {setToggleDropdown(true)}}>
                        <li><Link to="#" onClick={(e)=>{e.preventDefault(); toggleCategory===1?setToggleCategory(0):setToggleCategory(1)}}>
                                <i className="fa fa-person-running fa-xl"></i>&nbsp; Fitnes uchun 
                                <span style={{float:"right"}}><i className={toggleCategory===1?"fa-solid fa-angle-up":"fa-solid fa-angle-down"}></i></span>
                            </Link>
                        </li>
                        {toggleCategory===1?<li><Link style={{textDecorationLine:"underline", textDecorationThickness:"1px"}} to="fitnes/:all">Hammasini Ko'rish</Link></li>:""}
                        {toggleCategory===1?fitnes.lists.map(el => <li><Link to={el.url}>{el.name}</Link></li>):""}
                        <li><Link to="#" onClick={(e)=>{e.preventDefault(); toggleCategory===2?setToggleCategory(0):setToggleCategory(2)}}>
                            <i className="fa fa-venus-mars fa-lg"></i> Jinsiy Salomatlik 
                            <span style={{float:"right"}}><i className={toggleCategory===2?"fa-solid fa-angle-up":"fa-solid fa-angle-down"}></i></span>
                            </Link>
                        </li>
                        {toggleCategory===2?<li><Link style={{textDecorationLine:"underline", textDecorationThickness:"1px"}} to="drinks/:all">Hammasini Ko'rish</Link></li>:""}
                        {toggleCategory===2?sexualWelth.lists.map(el => <li><Link to={el.url}>{el.name}</Link></li>):""}
                        <li><Link to="#" onClick={(e)=>{e.preventDefault(); toggleCategory===3?setToggleCategory(0):setToggleCategory(3)}}>
                            <i className="fa-solid fa-burger fa-lg"></i>&nbsp; Ovqat & Ichimliklar 
                            <span style={{float:"right"}}><i className={toggleCategory===3?"fa-solid fa-angle-up":"fa-solid fa-angle-down"}></i></span>
                            </Link>
                        </li>
                        {toggleCategory===3?<li><Link style={{textDecorationLine:"underline", textDecorationThickness:"1px"}} to="vitamins/:all">Hammasini Ko'rish</Link></li>:""}
                        {toggleCategory===3?foodDrink.lists.map(el => <li><Link to={el.url}>{el.name}</Link></li>):""}
                        <li><Link to="#" onClick={(e)=>{e.preventDefault(); toggleCategory===4?setToggleCategory(0):setToggleCategory(4)}}>
                            <i className="fa-solid fa-tablets fa-lg"></i> Vitamin & Qo'shimchalar &nbsp;&nbsp;&nbsp;
                            <span style={{float:"right"}}><i className={toggleCategory===4?"fa-solid fa-angle-up":"fa-solid fa-angle-down"}></i></span>
                            </Link>
                        </li>
                        {toggleCategory===4?<li><Link style={{textDecorationLine:"underline", textDecorationThickness:"1px"}} to="diabet/:all">Hammasini Ko'rish</Link></li>:""}
                        {toggleCategory===4?vitamins.lists.map(el => <li><Link to={el.url}>{el.name}</Link></li>):""}
                        <li><Link to="#" onClick={(e)=>{e.preventDefault(); toggleCategory===5?setToggleCategory(0):setToggleCategory(5)}}>
                            <i className="fa-solid fa-scale-unbalanced-flip fa-lg"></i>&nbsp; Vaznga bog'liq 
                            <span style={{float:"right"}}><i className={toggleCategory===5?"fa-solid fa-angle-up":"fa-solid fa-angle-down"}></i></span>
                            </Link>
                        </li>
                        {toggleCategory===5?<li><Link style={{textDecorationLine:"underline", textDecorationThickness:"1px"}} to="view-child-care">Hammasini Ko'rish</Link></li>:""}
                        {toggleCategory===5?diabet.lists.map(el => <li><Link to={el.url}>{el.name}</Link></li>):""}
                        <li><Link to="#" onClick={(e)=>{e.preventDefault(); toggleCategory===6?setToggleCategory(0):setToggleCategory(6)}}>
                            <i className="fa-solid fa-baby fa-lg"></i>&nbsp; Bola salomatligi uchun &nbsp; 
                            <span style={{float:"right"}}><i className={"fa-solid fa-angle-down"}></i></span>
                            </Link>
                        </li>
                        {toggleCategory===6?<li><Link style={{textDecorationLine:"underline", textDecorationThickness:"1px"}} to="proteins/:all">Hammasini Ko'rish</Link></li>:""}
                        {toggleCategory===6?child.map(el => <li><Link to={el.url}>{el.name}</Link></li>):""}
                        <li>
                            <Link to="#" onClick={(e)=>{e.preventDefault(); toggleCategory===7?setToggleCategory(0):setToggleCategory(7)}}>&nbsp;&nbsp;&nbsp;&nbsp; Teri & Soch salomatligi 
                                <span style={{float:"right", }}><i className={"fa-solid fa-angle-down"}></i></span>
                            </Link>
                        </li>
                        {toggleCategory===7?<li><Link style={{textDecorationLine:"underline", textDecorationThickness:"1px"}} to="skin-hair/:all">Hammasini Ko'rish</Link></li>:""}
                        {toggleCategory===7?skinHair.map(el => <li><Link to={el.url}>{el.name}</Link></li>):""}
                        <li><Link to="#" onClick={(e)=>{e.preventDefault(); toggleCategory===8?setToggleCategory(0):setToggleCategory(8)}}>
                            &nbsp;&nbsp;&nbsp;&nbsp; Protein &nbsp; 
                            <span style={{float:"right"}}><i className={"fa-solid fa-angle-down"}></i></span>
                            </Link>
                        </li>
                        {toggleCategory===8?<li><Link style={{textDecorationLine:"underline", textDecorationThickness:"1px"}} to="proteins/:all">Hammasini Ko'rish</Link></li>:""}
                        {toggleCategory===8?protein.map(el => <li><Link to={el.url}>{el.name}</Link></li>):""}
                    </ul>
                </div>
    );

}
export default AllCategories;