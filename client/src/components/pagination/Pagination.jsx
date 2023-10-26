import { useState } from "react";
import "./Pagination.css"

const Pagination = ( { props } ) => {

    const [ isActive, setIsActive ] = useState(1);
    const { numberOfPages, nextPages, prevPages, randomPages } = props;
    const count = [];
    for(let i = 1; i <= numberOfPages; i++){
        count.push(i);
    }
    
    return (
        <div class="pagination">
            <button onClick={() => {prevPages(); if(isActive > 1){setIsActive(isActive-1)}}}>Prev</button>
            {count.map((item, index) => <button className={item === isActive?"active":""} style={{borderWidth:"1px 1px 1px 0"}} onClick={()=>{randomPages(item); setIsActive(item)}}>{item}</button>)}
            <button style={{borderWidth:"1px 1px 1px 0"}} onClick={() => {nextPages(); if(isActive < numberOfPages){setIsActive(isActive+1)}}}>Next</button>
        </div>
    )

}

export default Pagination