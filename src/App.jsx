import { useState } from "react";


function App() {

  const [availableItems, setAvailableItems] = useState([
  {
    id: 1,
    name: "Black T shirt",
    price: 5
  },
  {
    id: 2,
    name: "Hanger Set",
    price: 8
  },
  {
    id: 3,
    name: "Thoub",
    price: 12
  },
  {
    id: 4,
    name: "Computer Bag",
    price: 20
  },
  {
    id: 5,
    name: "Couch",
    price: 50
  },
  {
    id: 6,
    name: "Gaming Chair",
    price: 70
  }
]
);
const [shoppingCart, setShoppingCart] = useState([]);
const [availableBalance, setAvailableBalance] = useState(100);

  return (
    <div>
    <h1>Zaids Closet</h1>

<h2>Your Balance: {availableBalance}</h2>

<h2>Available Items</h2>

<h2>Shopping Cart</h2>
</div>
  );
}

export default App
