import React, { useState } from "react";
function Card(props) {
    /* const onClickButton=()=>{alert(props.price);} */

    const [isAdded,setIsAdded]=React.useState(false);
    

    const onClickPlus=()=>{
        if (isAdded===true) {
            setIsAdded(false)
        } else {
            setIsAdded(true)
        }
        //setIsAdded(!isAdded);  тоже работает инвертирование
    }

    const [like,setLike]=React.useState(false);
    const onClickLike=()=>{
        setLike(!like);
    }

    console.log(isAdded);

    return (
        <div className="card">
            <div className="favorite" onClick={props.onFavorite}>
                <img onClick={onClickLike} src={like?"/img/like.svg":"/img/dislike.svg"} alt="likes"/>
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