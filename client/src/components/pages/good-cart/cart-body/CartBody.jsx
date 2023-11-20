import { useState } from "react";
import "./CartBody.css";
import { Outlet } from "react-router-dom";

const CartBody = () => {

    const [ cartHover, setCartHover ] = useState(0);
    const items =  [ 
        {id:1, img:"protein1.png", name:"beatXP EDIT 100% Whey Protein Powder 1Kg | Glanbia Source Whey Protein Concentrate", oldPrice:"780 000", newPrice:"300 000"},
        {id:2, img:"protein1.png", name:"beatXP EDIT 100% Whey Protein Powder 1Kg | Glanbia Source Whey Protein Concentrate", oldPrice:"680 000", newPrice:"300 000"},
        {id:3, img:"protein1.png", name:"beatXP EDIT 100% Whey Protein Powder 1Kg | Glanbia Source Whey Protein Concentrate", oldPrice:"780 000", newPrice:"300 000"},
        {id:4, img:"protein1.png", name:"beatXP EDIT 100% Whey Protein Powder 1Kg | Glanbia Source Whey Protein Concentrate", oldPrice:"780 000", newPrice:"300 000"},
        {id:5, img:"protein1.png", name:"beatXP EDIT 100% Whey Protein Powder 1Kg | Glanbia Source Whey Protein Concentrate", oldPrice:"780 000", newPrice:"300 000"},
        {id:6, img:"protein1.png", name:"beatXP EDIT 100% Whey Protein Powder 1Kg | Glanbia Source Whey Protein Concentrate", oldPrice:"780 000", newPrice:"300 000"},
        {id:7, img:"protein1.png", name:"beatXP EDIT 100% Whey Protein Powder 1Kg | Glanbia Source Whey Protein Concentrate", oldPrice:"780 000", newPrice:"300 000"},
        {id:8, img:"protein1.png", name:"beatXP EDIT 100% Whey Protein Powder 1Kg | Glanbia Source Whey Protein Concentrate", oldPrice:"780 000", newPrice:"300 000"},
        {id:9, img:"protein1.png", name:"beatXP EDIT 100% Whey Protein Powder 1Kg | Glanbia Source Whey Protein Concentrate", oldPrice:"780 000", newPrice:"300 000"},
        {id:10, img:"protein1.png", name:"beatXP EDIT 100% Whey Protein Powder 1Kg | Glanbia Source Whey Protein Concentrate", oldPrice:"780 000", newPrice:"300 000"},
        {id:11, img:"protein1.png", name:"beatXP EDIT 100% Whey Protein Powder 1Kg | Glanbia Source Whey Protein Concentrate", oldPrice:"780 000", newPrice:"300 000"},
        {id:12, img:"protein1.png", name:"beatXP EDIT 100% Whey Protein Powder 1Kg | Glanbia Source Whey Protein Concentrate", oldPrice:"780 000", newPrice:"300 000"},
        {id:13, img:"protein1.png", name:"beatXP EDIT 100% Whey Protein Powder 1Kg | Glanbia Source Whey Protein Concentrate", oldPrice:"780 000", newPrice:"300 000"},
        {id:14, img:"protein1.png", name:"beatXP EDIT 100% Whey Protein Powder 1Kg | Glanbia Source Whey Protein Concentrate", oldPrice:"780 000", newPrice:"300 000"},
        {id:15, img:"protein1.png", name:"beatXP EDIT 100% Whey Protein Powder 1Kg | Glanbia Source Whey Protein Concentrate", oldPrice:"780 000", newPrice:"300 000"},
        {id:16, img:"protein1.png", name:"beatXP EDIT 100% Whey Protein Powder 1Kg | Glanbia Source Whey Protein Concentrate", oldPrice:"780 000", newPrice:"300 000"},
        {id:17, img:"protein1.png", name:"beatXP EDIT 100% Whey Protein Powder 1Kg | Glanbia Source Whey Protein Concentrate", oldPrice:"780 000", newPrice:"300 000"},
        {id:18, img:"protein1.png", name:"beatXP EDIT 100% Whey Protein Powder 1Kg | Glanbia Source Whey Protein Concentrate", oldPrice:"780 000", newPrice:"300 000"},
        {id:19, img:"protein1.png", name:"beatXP EDIT 100% Whey Protein Powder 1Kg | Glanbia Source Whey Protein Concentrate", oldPrice:"780 000", newPrice:"300 000"},
        {id:20, img:"protein1.png", name:"beatXP EDIT 100% Whey Protein Powder 1Kg | Glanbia Source Whey Protein Concentrate", oldPrice:"780 000", newPrice:"300 000"},
        {id:21, img:"protein1.png", name:"beatXP EDIT 100% Whey Protein Powder 1Kg | Glanbia Source Whey Protein Concentrate", oldPrice:"780 000", newPrice:"300 000"},
        {id:22, img:"protein1.png", name:"beatXP EDIT 100% Whey Protein Powder 1Kg | Glanbia Source Whey Protein Concentrate", oldPrice:"780 000", newPrice:"300 000"},
        {id:23, img:"protein1.png", name:"beatXP EDIT 100% Whey Protein Powder 1Kg | Glanbia Source Whey Protein Concentrate", oldPrice:"780 000", newPrice:"300 000"},
        {id:24, img:"protein1.png", name:"beatXP EDIT 100% Whey Protein Powder 1Kg | Glanbia Source Whey Protein Concentrate", oldPrice:"780 000", newPrice:"300 000"},
        {id:25, img:"protein1.png", name:"beatXP EDIT 100% Whey Protein Powder 1Kg | Glanbia Source Whey Protein Concentrate", oldPrice:"780 000", newPrice:"300 000"},
        {id:26, img:"protein1.png", name:"beatXP EDIT 100% Whey Protein Powder 1Kg | Glanbia Source Whey Protein Concentrate", oldPrice:"780 000", newPrice:"300 000"},
        {id:27, img:"protein1.png", name:"beatXP EDIT 100% Whey Protein Powder 1Kg | Glanbia Source Whey Protein Concentrate", oldPrice:"780 000", newPrice:"300 000"},
        {id:28, img:"protein1.png", name:"beatXP EDIT 100% Whey Protein Powder 1Kg | Glanbia Source Whey Protein Concentrate", oldPrice:"780 000", newPrice:"300 000"},
        {id:29, img:"protein1.png", name:"beatXP EDIT 100% Whey Protein Powder 1Kg | Glanbia Source Whey Protein Concentrate", oldPrice:"780 000", newPrice:"300 000"},
        {id:30, img:"protein1.png", name:"beatXP EDIT 100% Whey Protein Powder 1Kg | Glanbia Source Whey Protein Concentrate", oldPrice:"780 000", newPrice:"300 000"},
        {id:31, img:"protein1.png", name:"beatXP EDIT 100% Whey Protein Powder 1Kg | Glanbia Source Whey Protein Concentrate", oldPrice:"780 000", newPrice:"300 000"},
        {id:32, img:"protein1.png", name:"beatXP EDIT 100% Whey Protein Powder 1Kg | Glanbia Source Whey Protein Concentrate", oldPrice:"780 000", newPrice:"300 000"}
    ];

    const liked = (id) => {
        var likedItems;
        var elem = document.getElementById("like"+id);

        if(localStorage.getItem("likedItems")){
            likedItems = localStorage.getItem("likedItems").split(',');
            likedItems.push(id);
            elem.classList.replace("fa-regular", "fa-solid");
        }
        else{
            likedItems = [id];
            elem.classList.replace("fa-solid", "fa-regular");
        }
        localStorage.setItem('likedItems', likedItems.toString());
    }

    return(
        <div className="cart-body">
            <div className="cart-body-items">
               {items.map(item =>  <div className="cart-item" onMouseOver={() => {setCartHover(item.id)}} onMouseLeave={() => {setCartHover(0)}}>
                                        <div className="cart-item-img">
                                            <img className={cartHover===item.id?"cart-item-hover":""} src={require("../../../../images/cart/proteins/"+item.img)} alt="alt" />
                                            <span onClick={() => {liked(item.id)}}><i id={"like"+item.id} className="fa-regular fa-heart fa-lg"></i></span>
                                        </div>
                                        <div className="cart-item-name">
                                            <p>{item.name}</p>
                                            <div className="cart-item-price">
                                                <div>
                                                    <small>{item.oldPrice} so'm</small>
                                                    <p>{item.newPrice} so'm</p>
                                                </div>
                                                <button type="button">
                                                <i className="bi bi-cart-plus fa-lg"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>)}
            </div>
            <Outlet/>
        </div>
    );

}

export default CartBody;