import {Link} from 'react-router-dom'
function Header(props){
  console.log(props);
return(
<header>
        <Link to='/'>
        <div className="headerLeft">
          <img width={40} height={40} src="img/logo.png"/>
          <div className="title">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        </Link>
          <ul className="menu">
            <li className="menu-basket" onClick={props.onClickCard}>
            <img  width={18} height={18} src="img/cart.svg" alt="корзина"/>
              <span>1205 р.</span>
            </li>
            <li className="menu-favorites">
              <Link to="/favorites"><img  width={18} height={18} src="img/heart.svg" alt="закладки"/></Link>
            </li>
            <li>
              <img  width={18} height={18} src="img/user.svg" alt="пользователи"/>
            </li>
          </ul>
      </header>);

}
export default Header;