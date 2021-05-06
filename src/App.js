import React, { useState } from 'react';

const App = props => {

  const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)

  return (
    <>
      <p>現在の名前は{name}は、{price}です</p>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>-1</button>
      <button onClick={() => setPrice(props.price)}>Price Reset</button>
      <button onClick={() => setName(props.name)}>Name Reset</button>
      <input value={name} onChange={e => setName(e.target.value)}/>
    </>
  )
}

App.defaultProps = {
  name: 'taro',
  price: 1000
}

export default App;
