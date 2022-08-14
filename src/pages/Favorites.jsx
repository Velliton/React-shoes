import Card from "../Components/Card";




function Favorites({items,onAddToFavorite}){
   return(
    <div className="content">
        <div className="Content-title">
            <h1>мои закладки</h1>
        </div>
        <div className="sneakers">{ 
            items
                .map((item)=>(
                <Card 
                    key={item.id}
                    name={item.name} 
                    price={item.price} 
                    imageurl={item.imageurl} 
                    favorited={true}
                    onFavorite={onAddToFavorite}
                />
                )) } 

  

    

        </div>
    </div>
    );
    }

    export default Favorites;