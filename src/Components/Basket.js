function Basket() {
    return(
    <div className="overlay">
        <div className="basket">
        <h2 className="basket-header">Корзина</h2>
            <div className="basket-content">
            <div className="basket-item">
                <img width={70} height={70}  src="img/sneakers/2.jpg"  className="basket-item-logo"></img>
                <div className="basket-item-text">
                <p className="basket-item-name">Мужские Кроссовки Nike Air Max 270</p>
                <b className="basket-item-price">13 000 руб.</b>
                </div>
                <img width={32} height={32} src="img/close.svg" className="basket-item-close"></img>
            </div>
            </div>
        <div className="basket-footer">
            <div className="basket-footer-payment">
            <p>Итого</p>
            <div></div>
            <b>21 498</b>
            </div>
            <button>Оформить заказ</button>
        </div> 
        </div>
    
    </div>);
}
export default Basket;