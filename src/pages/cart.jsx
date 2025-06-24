import React from "react";
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import '../styles/stylesCart.css';

export default function Cart() {
  const {
    cartItems,
    subtotal,
    shipping,
    total,
    updateQuantity,
    removeItem
  } = useCart();
  const navigate = useNavigate();

  return (
    <main>
      <section className="cart-container">
        <h2>Carrito de Compras</h2>
        <div className="cart-items">
          {cartItems.map((product) => (
            <div className="cart-item" key={product.id}>
              <img src={product.image} alt={product.title} />
              <div className="item-details">
                <h3>{product.title}</h3>
                <p>
                  <strong>Categoría:</strong> {product.category}
                </p>
                <p>
                  <strong>Nuevo:</strong> {product.isNew ? "Sí" : "No"}
                </p>
                <p>Talla: M</p>
                <p>Color: Negro</p>
                <p>
                  Precio: $<span className="item-price">{product.price}</span>
                </p>
                <div className="item-quantity">
                  <label htmlFor={`qty-${product.id}`}>Cantidad:</label>
                  <input
                    type="number"
                    id={`qty-${product.id}`}
                    value={product.quantity}
                    min="1"
                    onChange={(e) => updateQuantity(product.id, parseInt(e.target.value, 10))}
                  />
                </div>
                <button
                  className="remove-item"
                  onClick={() => removeItem(product.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <div className="summary-row">
            <span>Subtotal:</span>${subtotal.toFixed(2)}
          </div>
          <div className="summary-row">
            <span>Envío:</span>${shipping.toFixed(2)}
          </div>
          <div className="summary-row total">
            <span>Total:</span>${total.toFixed(2)}
          </div>
          <button
            className="checkout-button"
            onClick={() => navigate('/checkout')}
          >
            Proceder al Pago
          </button>
        </div>
      </section>
    </main>
  );
}