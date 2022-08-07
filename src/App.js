import Card from "./Components/Card";
import Header from "./Components/Header";
import Basket from "./Components/Basket";
import Test from "./Components/Test";
import React from "react";




function App() {
const [items,setItems] =React.useState([]);
const [cartItems,setCartItems]=React.useState([]);
const [cartOpened,setCartOpened]=React.useState(false);


React.useEffect(()=>{
const resp=fetch('https://62ebe5f9705264f263e31695.mockapi.io/items').then((res)=>{
  return res.json();
})
.then((json)=>{
  setItems(json);
});
},[]);


const onAddToCart=(obj)=>{
  setCartItems(prev=>[...prev,obj])
};

console.log(cartItems);



  return (
    <div className="Wrapper">


      {cartOpened?<Basket items={cartItems} onClose={()=>setCartOpened(false)}/>:null}
      <Header onClickCard={()=>setCartOpened(true)}/>
      <div className="content">
        <div className="Content-title">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="img/search.svg" alt="search"/>
            <input placeholder="Поиск"></input>
          </div> 
        </div>
        <div className="sneakers">
        
  


    {items.map((item)=>(
    <Card 
    name={item.name} 
    price={item.price} 
    imageurl={item.imageurl} 
    onFavorite={()=>console.log('нрав')}
    addClick={(obj)=>onAddToCart(item)}/>
    )) } 
    
        </div>
           
{/*     {
      arrTest1.map((obj2)=>(
        <Test key={obj2.key} city={obj2.city} street1={obj2.street} text={obj2.text}/>
      ))
    }

<Test city="PIZDEC" street1='atat' text='ebana' />  */}
        .....
      </div>
      
    </div>
  );
}

export default App;
