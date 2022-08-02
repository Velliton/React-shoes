function Card(props) {
    /* const onClickButton=()=>{alert(props.price);} */
   
   
   
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
                <button className="button" onClick={props.addClick}>
                    <img width={11} height={11} src="img/add.svg" alt="Plus"/>
                </button>
                </div>
            </div> 
        );    
    }
export default Card;