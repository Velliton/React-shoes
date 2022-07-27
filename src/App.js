import Card from "./Components/Card";
import Header from "./Components/Header";
import Basket from "./Components/Basket";

const arr=[
  { name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 10000, imageurl:'img/sneakers/3.jpg'},
  { name: 'Мужские Кроссовки Nike Air Max 270', price: 15000, imageurl:'img/sneakers/5.jpg'}
];


function App() {
  return (
    <div className="Wrapper">
      <Basket/>
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
        
  


    {arr.map((obj)=>(
    <b><Card name={obj.name} price={obj.price} imageurl={obj.imageurl}/></b>
    )) } 



      
        </div>
        .....
      </div>
      
    </div>
  );
}

export default App;
