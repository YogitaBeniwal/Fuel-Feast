import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const calculateTotal = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cart }),
      });
      const data = await response.json();
      window.location.href = data.url;
    } catch (error) {
      console.error('Checkout error:', error);
    }
  };

  return (
    <section className="cart">
      <div className="container">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>Price: ₹{item.price}</p>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value))
                }
              />
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))
        )}
        <h2>Total: ₹{calculateTotal()}</h2>
        {cart.length > 0 && <button onClick={handleCheckout}>Proceed to Payment</button>}
      </div>
    </section>
  );
};

export default Cart;