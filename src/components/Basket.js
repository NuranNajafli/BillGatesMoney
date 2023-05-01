import React from 'react'
import BasketItem from './BasketItem'

function Basket({basket, products, total, resetBasket}) {
  return (
    <div className='basket'>
     {
        basket.map((a,b)=>(
            <BasketItem item={a} key={b} product={products.find(e=>e.id===a.id)}/>
        ))
     }

     <div className='basket-bottom'>
     <div>
        Toplam: {
            total
        } AZN
     </div>
     <button onClick={resetBasket}>sebeti sifirla</button>
     </div>
   

    </div>
  )
}

export default Basket
