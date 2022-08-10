import Card from "./Components/Card";
import Header from "./Components/Header";
import Basket from "./Components/Basket";
import Test from "./Components/Test";
import React from "react";
import axios from "axios";



function App() {
const [items,setItems] =React.useState([]);
const [cartItems,setCartItems]=React.useState([]);
const [cartOpened,setCartOpened]=React.useState(false);
const [searchValue, setSearchValue]=React.useState('');

/*  отправляем запрос к серверу получаем json */
React.useEffect(()=>{
/* const resp=fetch('https://62ebe5f9705264f263e31695.mockapi.io/items').then((res)=>{
  return res.json();
})
.then((json)=>{
  setItems(json);
}); */

axios.get('https://62ebe5f9705264f263e31695.mockapi.io/items').then ((res)=>{
  setItems(res.data);
});
axios.get('https://62ebe5f9705264f263e31695.mockapi.io/Card').then ((res)=>{
  setCartItems(res.data);
});
},[]);


const onAddToCart=(obj)=>{
  axios.post('https://62ebe5f9705264f263e31695.mockapi.io/Card',obj).then ((res)=>{
});
  setCartItems(prev=>[...prev,obj])
};

const onRemoveItem=(id)=>{
  console.log(id);
  /* axios.delete(`https://62ebe5f9705264f263e31695.mockapi.io/Card/${id}`) */
   setCartItems((prev)=>prev.filter(item=>item.id!==id));
}


const onChangeSearchInput =(event)=>
{
  
  setSearchValue(event.target.value);
}

  return (
    <div className="Wrapper">


      {cartOpened?<Basket items={cartItems} onClose={()=>setCartOpened(false)} onRemove={onRemoveItem}/>:null}
      <Header onClickCard={()=>setCartOpened(true)}/>
      <div className="content">
        <div className="Content-title">
          <h1>{searchValue?`поиск по запросу "${searchValue}"`:'все кроссовки'}</h1>
          <div className="search-block">
            <img src="img/search.svg" alt="search"/>
            {searchValue&&<img onClick={()=>setSearchValue('')} className="search-clear"src="img/close.svg" alt="close"></img>}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск"></input>
          </div> 
        </div>
        <div className="sneakers">
        
  
    {/* отрисовка компонента фильтрация по данным введенным в поиске */}

    { items.filter((item)=>item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item)=>(
    <Card 
    key={item.id}
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
