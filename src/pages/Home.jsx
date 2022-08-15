import Card from "../Components/Card";




function Home({items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart}){
   return(
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
    id={item.id}
    name={item.name} 
    price={item.price} 
    imageurl={item.imageurl} 
    onFavorite={(obj)=>onAddToFavorite(obj)}
    addClick={(obj)=>onAddToCart(obj)}/>
    )) } 

        </div>
    </div>
    )
    }

    export default Home;