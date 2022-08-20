function Basket({onClose, onRemove, items=[]}) {
    /* в items были 1,2,3 зачем хз */

    return(
    <div className="overlay">
        <div className="basket">
            <div className="basket-header">
                <h2 className="basket-name">Корзина </h2>
                <img onClick={onClose} className="close-btn" src="/img/close.svg" width='32px' height='32px'></img>
                
            </div>
           


            <div className="basket-content">
                {items.length>0?(<div>{items.map((obj)=>(
                    <div key={obj.id}>
                        <div className="basket-item">
                            <img width={70} height={70}  src={obj.imageurl}  className="basket-item-logo"></img>
                            <div className="basket-item-text">
                                <p className="basket-item-name">{obj.name}</p>
                                <b className="basket-item-price">{obj.price}</b>
                            </div>
                            <img width={32} height={32} src="img/close.svg" className="basket-item-close" onClick={()=>onRemove(obj.id)}></img>
                        </div>
                        
                    </div>
                                  ))
                }</div>):(<div className="basket-empty">
                                    <img src="img/empty.jpg" width={120} height={120}></img>
                                    <h2>Корзина пустая</h2>
                                    <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
                                    <button onClick={onClose}>Вернуться назад</button>
                </div>)}
                
                
            </div>

            <div className="basket-footer">
                <div className="basket-footer-payment">
                    <p>Итого</p>
                    <b>21 498</b>
                </div>
                <button className="basket_footer_button">Оформить заказ</button>
            </div> 
        </div>
    
    </div>);
}
export default Basket;