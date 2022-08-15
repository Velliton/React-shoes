
import Header from "./Components/Header";
import Basket from "./Components/Basket";
import React from "react";
import axios, { Axios } from "axios";
import {Route, Link, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";


function App() {
const [items,setItems] =React.useState([]);
const [cartItems,setCartItems]=React.useState([]);
const [cartOpened,setCartOpened]=React.useState(false);
const [searchValue, setSearchValue]=React.useState('');
const [favorites,setFavorites]=React.useState([]);

<Route path="/test">это тестовая инфа</Route>

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

axios.get('https://62ebe5f9705264f263e31695.mockapi.io/Favorites').then ((res)=>{
  setFavorites(res.data);
});
},[]);
console.log(favorites);

const onAddToCart=(obj)=>{
  axios.post('https://62ebe5f9705264f263e31695.mockapi.io/Card',obj).then ((res)=>{
});
  setCartItems(prev=>[...prev,obj])
};

const onRemoveItem=(id)=>{
  console.log(id);
   axios.delete(`https://62ebe5f9705264f263e31695.mockapi.io/Card/${id}`); 
   setCartItems((prev)=>prev.filter(item=>item.id!==id));
}

const onAddToFavorite=async(obj)=>{
  try {
if (favorites.find((favObj)=>favObj.id==obj.id)) {
  axios.delete(`https://62ebe5f9705264f263e31695.mockapi.io/Favorites/${obj.id}`); 
   
} else {
 const [data]= await axios.post(`https://62ebe5f9705264f263e31695.mockapi.io/Favorites`,obj);
  setFavorites((prev)=>[...prev,data]);
}
  } catch(error){alert('не удалось добавить в фавориты')}
}


const onChangeSearchInput =(event)=>
{
  
  setSearchValue(event.target.value);
}

  return (

   
    <div className="Wrapper">
       

      {cartOpened?<Basket items={cartItems} onClose={()=>setCartOpened(false)} onRemove={onRemoveItem}/>:null}
      <Header onClickCard={()=>setCartOpened(true)}/>
      <Routes>
        <Route 
          path="/" exact
          element={
            <Home 
              items={items} 
                searchValue={searchValue} 
                setSearchValue={setSearchValue} 
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
            />
           } />
      </Routes>
      <Routes>
        <Route 
          path="/favorites" exact
          element={
            <Favorites 
            items={favorites}
            onAddToFavorite={onAddToFavorite}/>
           } />
      </Routes>
     


      
      
    </div>
  );
}

export default App;
