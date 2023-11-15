import "./CartNav.css";
import DropHover from "../../../dropdowns/DropHover";
import AllCategories from "./AllCategories";
import { useEffect, useState } from "react";

const CartNav = () => {

    const [ toggleSearch, setToggleSearch ] = useState(false);

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
    useEffect(() => {
        console.log('Multed!');
        console.log(window.location.href);
    })

    return (
        <div className="cart-nav">
            <div className="cart-nav-body" id="cart_nav1">
                <AllCategories/>
                <DropHover props={fitnes}/>
                <DropHover props={sexualWelth}/>
                <DropHover props={foodDrink}/>
                <DropHover props={vitamins}/>
                <div className="last-cart-menu">
                     <DropHover props={diabet}/>
                </div>
            </div>
            <div className="cart-nav-body" id="cart_nav2">
                <AllCategories/>
                <button type="button" style={toggleSearch?{color:"red"}:{color:"white"}} onClick={() => {setToggleSearch(!toggleSearch)}}><i class="fa fa-search fa-lg" aria-hidden="true"></i></button>
            </div>
            <div className={toggleSearch?"search-nav-input input-group show animated bounceInLeft":"search-nav-input input-group"}>
               <input type="text" placeholder="Mahsulotni qidiring"/>
               <button>Search</button>
            </div>
        </div>
    );

}

export default CartNav;