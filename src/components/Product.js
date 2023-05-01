import React from "react";

function Product({ product, basket, setBasket,total, money }) {
let basketCount=basket.find(a=>a.id===product.id)

  const addToBasket = () => {
    let checkBasket = basket.find((a) => a.id === product.id);
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([...basket.filter((a) => a.id !== product.id), checkBasket]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };

  const removeFromBaket=()=>{

    let currentBasket=basket.find((a) => a.id === product.id);
    let basketWithoutCurrent=basket.filter((a) => a.id !== product.id);
    currentBasket.amount-=1
    
    if(currentBasket.amount===0){
        setBasket([...basketWithoutCurrent])
    }else{
        setBasket([...basketWithoutCurrent,currentBasket])
    }

  }

  return (
    <div className="card">
      <div className="card-top">
        <img src={product.image} />
      </div>
      <div className="card-text">
        <h2>{product.name}</h2>
        <h3>{product.price} AZN</h3>
        <div className="event">
          <button onClick={addToBasket} disabled={total+product.price> money}> Al </button>
          <span> {basketCount && basketCount.amount || 0} </span>
          <button onClick={removeFromBaket} disabled={!basketCount}> Sat </button>
        </div>
      </div>
    </div>
     
  );
}

export default Product;
