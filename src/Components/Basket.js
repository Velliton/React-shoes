function Basket({onClose, onRemove, items=[123]}) {
    
    return(
    <div className="overlay">
        <div className="basket">
        <h2 className="basket-header">Корзина<img onClick={onClose} className="close-btn" src="/img/close.svg"></img></h2>
            <div className="basket-content">
            {items.map((obj)=>(
                <div className="basket-item">
                    <div>
                        <img width={70} height={70}  src={obj.imageurl}  className="basket-item-logo"></img>
                        <div className="basket-item-text">
                            <p className="basket-item-name">{obj.name}</p>
                            <b className="basket-item-price">{obj.price}</b>
                        </div>
                        <img width={32} height={32} src="img/close.svg" className="basket-item-close" onClick={()=>onRemove(obj.id)}></img>
                    </div>
                </div>
                
                ))}

            
            </div>
        <div className="basket-footer">
            <div className="basket-footer-payment">
            <p>Итого</p>
            <div></div>
            <b>21 498</b>
            </div>
            <button className="basket_footer_button">Оформить заказ</button>
        </div> 
        </div>
    
    </div>);
}
export default Basket;