function Card() {
    return (
        <div className="card">
            <img width={133} height={112} src="img/sneakers/2.jpg" alt="Sneakers1"></img>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="cardBottom_price">
                <span>Цена:</span>
                <b>5000 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/add.svg" alt="Plus"/>
              </button>
            </div>
        </div> 
    );    
}
export default Card;