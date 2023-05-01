import React from 'react'

function Header({total, money}) {
  return (
    <div>
     {
      total>0 && (
        <div>Xerceleye bileceyin {money-total} azn pulun var</div>
      )||
      <div>Xerceleye bileceyin {money} azn pulun var</div>
     }

   
    </div>
  )
}

export default Header
