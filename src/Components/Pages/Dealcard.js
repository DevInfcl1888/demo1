
import React from 'react';
import gamepadImg from '../Images/remotecontrol.jpg';
import keyboardImg from '../Images/dekstop.png';
import monitorImg from '../Images/keyboard.jpg';
import chairImg from '../Images/chairs.jpg';

const products = [
  {
    id: 1,
    discount: 40,
    name: "HAVIT HV-G92 Gamepad",
    oldPrice: 160,
    price: 120,
    rating: 4,
    reviews: 88,
    image: gamepadImg,
  },
  {
    id: 2,
    discount: 35,
    name: "AK-900 Wired Keyboard",
    oldPrice: 1160,
    price: 960,
    rating: 4,
    reviews: 75,
    image: keyboardImg,
  },
  {
    id: 3,
    discount: 30,
    name: "IPS LCD Gaming Monitor",
    oldPrice: 400,
    price: 370,
    rating: 4,
    reviews: 99,
    image: monitorImg,
  },
  {
    id: 4,
    discount: 25,
    name: "S-Series Comfort Chair",
    oldPrice: 400,
    price: 375,
    rating: 4,
    reviews: 99,
    image: chairImg,
  },
  {
    id: 5,
    discount: 25,
    name: "S-Series Comfort Chair",
    oldPrice: 400,
    price: 375,
    rating: 4,
    reviews: 99,
    image: chairImg,
  }
];

const ProductCards = () => {
  return (
    <div style={{marginTop:'23rem'}} className="container  overflow-auto">
      <div className="d-flex flex-nowrap gap-3">
        {products.map((product) => (
          <div key={product.id} className="card text-center" style={{ width: '200px', flex: '0 0 auto' }}>
            <span className="badge bg-warning text-dark position-absolute m-2">
              -{product.discount}%
            </span>
            <img
              src={product.image}
              className="card-img-top p-3"
              alt={product.name}
              style={{ height: '100px', objectFit: 'contain' }}
            />
            <div className="card-body">
              <h6 className="card-title">{product.name}</h6>
              <p className="card-text mb-1">
                <s>${product.oldPrice}</s> <strong>${product.price}</strong>
              </p>
              <p className="text-warning mb-0">
                {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)} ({product.reviews})
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;

