import React, { useState, useEffect } from 'react';
import { Spinner, Button } from 'react-bootstrap';

const ShoppingCart = () => {
const [cartItems, setCartItems] = useState([]);
const [purchaseHistory, setPurchaseHistory] = useState([]);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
}, []);

const handleAddToCart = (product) => {
  const newCartItems = [...cartItems];
  const itemIndex = newCartItems.findIndex((item) => item.id === product.id);
  if (itemIndex > -1) {
    newCartItems[itemIndex].quantity += 1;
  } else {
    newCartItems.push({ ...product, quantity: 1 });
  }
  setCartItems(newCartItems);
};

const handleRemoveFromCart = (product) => {
  const newCartItems = [...cartItems];
  const itemIndex = newCartItems.findIndex((item) => item.id === product.id);
  if (itemIndex > -1) {
    if (newCartItems[itemIndex].quantity === 1) {
      newCartItems.splice(itemIndex, 1);
    } else {
      newCartItems[itemIndex].quantity -= 1;
    }
    setCartItems(newCartItems);
  }
};

const getTotalPrice = () => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

const mockConfirmPurchase = () => {
  const newPurchaseHistory = [
  ...purchaseHistory,
  { items: cartItems, totalPrice: getTotalPrice() },
  ];
  setPurchaseHistory(newPurchaseHistory);
  alert('Thank you for your purchase!');
  setCartItems([]);
};

if (isLoading) {
  return (
  <div className="d-flex justify-content-center align-items-center vh-100">
  <Spinner animation="border" role="status">
  <span className="sr-only">Loading...</span>
  </Spinner>
  </div>
  );
}
return (
  <div className="container-lg">
    <h2 className="text-center mt-5">Shopping Cart</h2>
    <ul className="list-unstyled">
      {cartItems.map((item) => (
        <li
          key={item.id}
          className="d-flex align-items-center justify-content-between py-2"
        >
          <span>
            {item.name} - ${item.price} x {item.quantity} = $
            {(item.price * item.quantity).toFixed(2)}
          </span>
          <button
            onClick={() => handleRemoveFromCart(item)}
            className="btn btn-danger ml-2"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
    <p className="text-right">Total: ${getTotalPrice().toFixed(2)}</p>
    <Button
      onClick={() => setCartItems([])}
      variant="danger"
      className="mb-4"
    >
      Clear cart
    </Button>
    <hr />
    <h3 className="my-4">Products:</h3>
    <div className="d-flex justify-content-between">
      <Button
        onClick={() =>
          handleAddToCart({ id: 1, name: "Orange Line Pass", price: 25 })
        }
        variant="primary"
      >
        Orange Line - $25
      </Button>
      <Button
        onClick={() =>
          handleAddToCart({ id: 2, name: "Red Line Pass", price: 25 })
        }
        variant="danger"
      >
        Red Line - $25
      </Button>
      <Button
        onClick={() =>
          handleAddToCart({ id: 3, name: "Blue Line Pass", price: 25 })
        }
        variant="info"
      >
        Blue Line - $25
      </Button>
      <Button
        onClick={() =>
          handleAddToCart({ id: 4, name: "Ferry Pass", price: 50 })
        }
        variant="secondary"
      >
        Ferry - $50
      </Button>
    </div>
    {purchaseHistory.map((purchase, index) => (
      <div key={index} style={{ marginBottom: "16px" }}>
        <h4>Purchase {index + 1}:</h4>
        <ul style={{ listStyleType: "none", padding: "0" }}>
          {purchase.items.map((item) => (
            <li
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 0",
              }}
            >
              <span>
                {item.name} - ${item.price} x {item.quantity} = $
                {(item.price * item.quantity).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
        <p style={{ textAlign: "right" }}>
          Total: ${purchase.totalPrice.toFixed(2)}
        </p>
      </div>
    ))}
  </div>
);

  
}       
export default ShoppingCart;


