import React, { useState } from "react";
function Card(props) {
    /* const onClickButton=()=>{alert(props.price);} */

    const [isAdded,setIsAdded]=React.useState(false);
    console.log(useState);

    const onClickPlus=()=>{
        if (isAdded===true) {
            setIsAdded(false)
        } else {
            setIsAdded(true)
        }
        //setIsAdded(!isAdded);  тоже работает инвертирование
    }

    console.log(isAdded);

    return (
        <div className="card">
            <div className="favorite" onClick={props.onFavorite}>
                <img src="img/dislike.svg"/>
            </div>
            <img width={133} height={112} src={props.imageurl} alt="Sneakers1"></img>
            <h5>{props.name}</h5>
            <div className="cardBottom">
                <div className="cardBottom_price">
                    <span>Цена:</span>
                    <b>{props.price}</b>
                </div>
        
                    <img className='plus' onClick={onClickPlus}  src={isAdded ? "/img/ok.svg" : "/img/add.svg"} alt="Plus"/>
        
                </div>
            </div> 
        );    
    }
export default Card;