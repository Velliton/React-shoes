import Card from "./Components/Card";
import Header from "./Components/Header";
function App() {
  return (
    <div className="Wrapper">
      <div className="overlay">
        <div className="drawer">
          <h2>Корзина</h2>
            <div className="drawer-item">
              <svg className="drawer-item-logo"></svg>
              <div className="drawer-item-text">
                <h5>Мужские Кроссовки Nike Air Max 270</h5>
                <b>13 000 руб.</b>
               <svg></svg> 
              </div>
            </div>



        </div>
        dddddd
      </div>

      <Header/>


      
      <div className="content">
        <div className="Content-title">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="img/search.svg" alt="search"/>
            <input placeholder="Поиск"></input>
          </div> 
        </div>
        <div className="sneakers">
        
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      



        </div>
        .....
      </div>
      
    </div>
  );
}

export default App;
