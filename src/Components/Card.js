function Card(props) {
    return (
        <div className="card">
            <img width={133} height={112} src={props.imageurl} alt="Sneakers1"></img>
            <h5>{props.name}</h5>
            <div className="cardBottom">
                <div className="cardBottom_price">
                    <span>Цена:</span>
                    <b>{props.price}</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="img/add.svg" alt="Plus"/>
                </button>
                </div>
            </div> 
        );    
    }
export default Card;