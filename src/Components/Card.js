import React, { useState } from "react";
import ContentLoader from "react-content-loader"
function Card({onFavorite, imageurl, price, name, addClick, id, favorited=false, added=false, Loading=false}) {
    /* const onClickButton=()=>{alert(props.price);} */

    const [isAdded,setIsAdded]=React.useState(added);
    

    const onClickPlus=()=>{
        addClick({
            id,
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
            {
                Loading? (<ContentLoader 
                    speed={0}
                    width={150}
                    height={265}
                    viewBox="0 0 150 265"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                 >
                    <rect x="0" y="0" rx="10" ry="10" width="150" height="90" /> 
                    <rect x="0" y="103" rx="5" ry="5" width="150" height="15" /> 
                    <rect x="4" y="134" rx="5" ry="5" width="93" height="15" /> 
                    <rect x="0" y="163" rx="5" ry="5" width="93" height="22" /> 
                    <rect x="117" y="154" rx="0" ry="0" width="32" height="32" />
  </ContentLoader>):(<><div className="favorite" onClick={onClickLike}>
                <img  onClick={onClickFav} src={like?"/img/like.svg":"/img/dislike.svg"} alt="likes"/>
            </div>
            <img width='100%' height={112} src={imageurl} alt="Sneakers1"></img>
            <h5>{name}</h5>
            <div className="cardBottom">
                <div className="cardBottom_price">
                    <span>Цена:</span>
                    <b>{price}</b>
                </div>
        
                    <img className='plus' onClick={onClickPlus}  src={isAdded ? "/img/ok.svg" : "/img/add.svg"} alt="Plus"/>
                    </div>)
            


            
        
                </>
                )}    
            
            </div> 
        );    
    }
export default Card;