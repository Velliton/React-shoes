import Card from "./Components/Card";
import Header from "./Components/Header";
import Basket from "./Components/Basket";
import Test from "./Components/Test";
import React from "react";



const arr=[
  { name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 10000, imageurl:'img/sneakers/3.jpg'},
  { name: 'Мужские Кроссовки Nike Air Max 270', price: 15000, imageurl:'img/sneakers/5.jpg'}
];

const arrTest1=[
  {city:'Moskow', street:'Lenina', text:'good street'},
  {city:'Peter', street:'sham', text:'bad street'},
  {city:'erw', street:'sds', text:'not street'},
  {city:'sdf', street:'hhhh', text:'fuck'}
]

function App() {

const [cartOpened,setCartOpened]=React.useState(false);


/*   const [count,setCount]=React.useState(5);
  


const plus=()=>{
  setCount(count+1);}

const minus=()=>{
  setCount(count-1);
} */

  return (
    <div className="Wrapper">
{/*       <center>
        <h1>{count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={()=>minus()}>-</button>
      </center> */}








      {cartOpened?<Basket onClose={()=>setCartOpened(false)}/>:null}
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
        
  


    {arr.map((obj)=>(
    <Card 
    name={obj.name} 
    price={obj.price} 
    imageurl={obj.imageurl} 
    onFavorite={()=>console.log('нрав')}
    addClick={()=>console.log('нажал')}/>
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
