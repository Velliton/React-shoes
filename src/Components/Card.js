import React, { useState } from "react";
function Card({onFavorite, imageurl, price, name, addClick, id, favorited=false}) {
    /* const onClickButton=()=>{alert(props.price);} */

    const [isAdded,setIsAdded]=React.useState(false);
    

    const onClickPlus=()=>{
        addClick({
            imageurl, 
            price,
            name
        });
        
        setIsAdded(!isAdded);  
    }

    

    const [like,setLike]=React.useState(favorited);
    const onClickLike=()=>{
        setLike(!like);
    }
    const onClickFav=()=>{
        onFavorite({
            id,
            imageurl, 
            price,
            name
        });
        
        setLike(!like);  
    }

   

    return (
        <div className="card">
            <div className="favorite" onClick={onClickLike}>
                <img  onClick={onClickFav} src={like?"/img/like.svg":"/img/dislike.svg"} alt="likes"/>
            </div>
            <img width={133} height={112} src={imageurl} alt="Sneakers1"></img>
            <h5>{name}</h5>
            <div className="cardBottom">
                <div className="cardBottom_price">
                    <span>Цена:</span>
                    <b>{price}</b>
                </div>
        
                    <img className='plus' onClick={onClickPlus}  src={isAdded ? "/img/ok.svg" : "/img/add.svg"} alt="Plus"/>
        
                </div>
            </div> 
        );    
    }
export default Card;