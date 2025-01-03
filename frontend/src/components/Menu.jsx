import React from 'react';
import { data } from '../restApi.json';
import { useCart } from '../context/CartContext';

const Menu = () => {
  const { addToCart } = useCart();

  return (
    <section className='menu' id='menu'>
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">POPULAR DISHES</h1>
          <p>
            Fuel Feast is celebrated for its flavorful, nutrient-packed meals, designed with fitness and wellness in mind...
          </p>
        </div>
        <div className="dishes_container">
          {data[0].dishes.map((dish) => (
            <div className="card" key={dish.id}>
              <img src={dish.image} alt={dish.title} />
              <h3>{dish.title}</h3>
              <p>Price: ₹{dish.price}</p>
              <button onClick={() => addToCart(dish)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;