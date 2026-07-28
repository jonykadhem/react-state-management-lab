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
const [warningMessage, setWarningMessage] = useState("");

function handleAddToCart(item) {
  if (availableBalance >= item.price) {
    setAvailableItems(availableItems.filter((i) => i.id !== item.id));
    setShoppingCart([...shoppingCart, item]);
    setAvailableBalance(availableBalance - item.price);
  } else {
    setWarningMessage("Insufficient funds. Your balance is too low to purchase this item");
    setTimeout(() => {
      setWarningMessage("");
    }, 4000);
  }
}
  function handleRemoveFromCart(item) {
    setShoppingCart(shoppingCart.filter((i) => i.id !== item.id));
    setAvailableItems([...availableItems, item]);
    setAvailableBalance(availableBalance + item.price);
  }

  return (
    <div>
    <h1>Zaids Closet</h1>

<h2>Your Balance: {availableBalance}</h2>

<h2>Available Items</h2>
{availableItems.length === 0 ? (
  <p>No items available.</p>
) : (
  availableItems.map((item) => (
    <div key={item.id}>
      <p>{item.name} - BD{item.price}</p>
      <button onClick ={()=>{handleAddToCart(item)}}>Add to Cart</button>
    </div>
    ))
  
)}

<h2>Shopping Cart</h2>
{shoppingCart.length === 0 ? (
  <p>Your shopping cart is empty.</p>
) : (
  shoppingCart.map((item) => (
    <div key={item.id}>
      <p>{item.name} - BD{item.price}</p>
      <button onClick ={()=>{handleRemoveFromCart(item)}}>Remove from Cart</button>

    </div>
  ))
)}
{warningMessage && <p style={{ color: "red" }}>{warningMessage}</p>}
</div>
  );

}

export default App
