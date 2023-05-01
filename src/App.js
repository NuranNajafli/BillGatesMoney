import { useEffect, useState } from "react";
import Basket from "./components/Basket";
import Header from "./components/Header";
import Product from "./components/Product";
import products from "./products.json";

function App() {
  const [money, setMoney] = useState(100);
  const [basket, setBasket]=useState([])
  const [total, setTotal]=useState(0)


useEffect(()=>{
 setTotal(
   basket.reduce((a,b)=>{
  return a+(b.amount*(products.find(item=>item.id ===b.id).price))
},0),
)

},[basket])

const resetBasket=()=>{
  setBasket([])
}



  return (
    <div className="App">
     <div className="header"> <Header money={money} total={total} /></div>
      <div className="cards">
        {products.map((e) => (
          <Product product={e} key={e.id} basket={basket} setBasket={setBasket} money={money} total={total} />
        ))}
      </div>
    {
      total>0 &&   <Basket basket={basket} products={products} total={total} resetBasket={resetBasket}/>
    }
    
    </div>
  );
}

export default App;
