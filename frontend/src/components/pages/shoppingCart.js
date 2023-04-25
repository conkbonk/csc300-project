import React, { useState, useEffect } from 'react';

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
    const itemIndex = newCartItems.findIndex(item => item.id === product.id);
    if (itemIndex > -1) {
      newCartItems[itemIndex].quantity += 1;
    } else {
      newCartItems.push({...product, quantity: 1});
    }
    setCartItems(newCartItems);
  }
  
  const handleRemoveFromCart = (product) => {
    const newCartItems = [...cartItems];
    const itemIndex = newCartItems.findIndex(item => item.id === product.id);
    if (itemIndex > -1) {
      if (newCartItems[itemIndex].quantity === 1) {
        newCartItems.splice(itemIndex, 1);
      } else {
        newCartItems[itemIndex].quantity -= 1;
      }
      setCartItems(newCartItems);
    }
  }
  
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  
  const mockConfirmPurchase = () => {
    const newPurchaseHistory = [...purchaseHistory, { items: cartItems, totalPrice: getTotalPrice() }];
    setPurchaseHistory(newPurchaseHistory);
    alert('Thank you for your purchase!');
    setCartItems([]);
  }
  

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Shopping Cart</h2>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {cartItems.map(item => (
          <li key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0' }}>
            <span>{item.name} - ${item.price} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}</span>
            <button onClick={() => handleRemoveFromCart(item)} style={{ marginLeft: '8px' }}>Remove</button>
          </li>
        ))}
      </ul>
      <p style={{ textAlign: 'right' }}>Total: ${getTotalPrice().toFixed(2)}</p>
      <button onClick={() => setCartItems([])} style={{ backgroundColor: '#dc3545', color: '#fff', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Clear cart</button>
      <hr />
      <h3>Products:</h3>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0' }}>
          <span>MBTA Pass - $90</span>
          <button onClick={() => handleAddToCart({id: 1, name: 'MBTA Pass', price: 90})} style={{ backgroundColor: '#007bff', color: '#fff', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
        </li>
        <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0' }}>
  <span>Orange Line Pass - $30</span>
  <button onClick={() => handleAddToCart({id: 2, name: 'Orange Line Pass', price: 30})} style={{ backgroundColor: '#007bff', color: '#fff', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
</li><li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0' }}>
  <span>Red Line Pass - $30</span>
  <button onClick={() => handleAddToCart({id: 3, name: 'Red Line Pass', price: 30})} style={{ backgroundColor: '#007bff', color: '#fff', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
</li><li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0' }}>
  <span>Blue Line Pass - $30</span><button onClick={() => handleAddToCart({id: 4, name: 'Blue Line Pass', price: 30})} style={{ backgroundColor: '#007bff', color: '#fff', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
</li><li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0' }}>
  <span>Ferry Pass - $50</span><button onClick={() => handleAddToCart({id: 5, name: 'Ferry Pass', price: 50})} style={{ backgroundColor: '#007bff', color: '#fff', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
</li></ul><hr /><h3>Purchase History:</h3><ul style={{ listStyleType: 'none', padding: '0' }}>
    {purchaseHistory.map((purchase, index) => (<li key={index} style={{ display: 'flex', flexDirection: 'column', padding: '8px 0' }}>
        <span style={{ fontWeight: 'bold' }}>Purchase #{index + 1}</span>
        <ul style={{ listStyleType: 'none', padding: '0', margin: '4px 0' }}>
          {purchase.items.map(item => (  <li key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 0' }}>  <span>{item.name} - ${item.price} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}</span>
            </li>))} </ul><span style={{ fontWeight: 'bold' }}>Total: ${purchase.totalPrice.toFixed(2)}</span>
        <hr />  </li>))} </ul></div>
);
}       
export default ShoppingCart;


