import React, { useState } from "react";
import '../styles/stylesCheckout.css';
import { useOrderSummary } from "../hooks/useOrderSummary";

export default function Checkout() {
  const { orderItems, subtotal, shipping, total } = useOrderSummary();

  // Estados para mostrar/ocultar dirección de facturación
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [placingOrder, setPlacingOrder] = useState(false);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setPlacingOrder(true);
    setTimeout(() => {
      alert("¡Pedido realizado con éxito! Gracias por su compra.");
      setPlacingOrder(false);

    }, 2000);
  };

  return (
    <>
        {/* Header */}

      {/* Checkout */}
      <div className="checkout-container">
        {/* Left Column: Checkout Form */}
        <form className="checkout-form" onSubmit={handlePlaceOrder}>
          {/* Shipping Address */}
          <div className="form-section">
            <h2 className="section-title">
              <i className="fas fa-truck"></i> Información de Envío
            </h2>
            <div className="form-group">
              <label htmlFor="fullName">Nombre Completo</label>
              <input type="text" id="fullName" className="form-control" placeholder="Nombre" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input type="email" id="email" className="form-control" placeholder="nombre@ejemplo.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Dirección</label>
              <input type="text" id="address" className="form-control" placeholder="Calle Principal" required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">Ciudad</label>
                <input type="text" id="city" className="form-control" placeholder="Ciudad" required />
              </div>
              <div className="form-group">
                <label htmlFor="zip">Código Postal</label>
                <input type="text" id="zip" className="form-control" placeholder="12345" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="country">País</label>
              <input type="text" id="country" className="form-control" placeholder="País" required />
            </div>
          </div>

          {/* Payment Method */}
          <div className="form-section">
            <h2 className="section-title">
              <i className="fas fa-credit-card"></i> Método de Pago
            </h2>
            <div className="payment-methods">
              <div className="payment-method active" id="creditCard">
                <i className="fas fa-credit-card"></i>
                <div>Tarjeta de Crédito</div>
              </div>
              <div className="payment-method" id="paypal">
                <i className="fab fa-paypal"></i>
                <div>PayPal</div>
              </div>
              <div className="payment-method" id="cash">
                <i className="fas fa-money-bill-wave"></i>
                <div>Efectivo</div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="cardNumber">Número de Tarjeta</label>
              <input type="text" id="cardNumber" className="form-control" placeholder="1234 5678 9012 3456" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="expiry">Fecha de Expiración</label>
                <input type="text" id="expiry" className="form-control" placeholder="MM/AA" />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" className="form-control" placeholder="123" />
              </div>
            </div>
            <div className="checkbox-group">
              <input type="checkbox" id="saveCard" />
              <label htmlFor="saveCard">Guardar información de tarjeta para futuras compras</label>
            </div>
          </div>

          {/* Billing Address */}
          <div className="form-section">
            <h2 className="section-title">
              <i className="fas fa-file-invoice-dollar"></i> Dirección de Facturación
            </h2>
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="sameAsShipping"
                checked={sameAsShipping}
                onChange={() => setSameAsShipping((v) => !v)}
              />
              <label htmlFor="sameAsShipping">Igual que la dirección de envío</label>
            </div>
            {!sameAsShipping && (
              <div id="billingAddress">
                <div className="form-group">
                  <label htmlFor="billingName">Nombre Completo</label>
                  <input type="text" id="billingName" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="billingAddressInput">Dirección</label>
                  <input type="text" id="billingAddressInput" className="form-control" />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="billingCity">Ciudad</label>
                    <input type="text" id="billingCity" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="billingZip">Código Postal</label>
                    <input type="text" id="billingZip" className="form-control" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>

        {/* Right Column: Order Summary */}
        <div className="order-summary">
          <h2 className="section-title">
            <i className="fas fa-receipt"></i> Resumen de Pedido
          </h2>
          <div className="order-items">
            {orderItems.length === 0 && (
              <div className="order-item">
                <div className="item-name">No hay productos</div>
                <div className="item-price"></div>
              </div>
            )}
            {orderItems.map((item) => (
              <div className="order-item" key={item.id}>
                <div className="item-name">{item.title}</div>
                <div className="item-price">${item.price.toFixed(2)}</div>
              </div>
            ))}
          </div>
          <div className="order-total">
            <div className="total-row">
              <div>Subtotal:</div>
              <div>${subtotal.toFixed(2)}</div>
            </div>
            <div className="total-row">
              <div>Envío:</div>
              <div>${shipping.toFixed(2)}</div>
            </div>
            <div className="total-row final">
              <div>Total:</div>
              <div>${total.toFixed(2)}</div>
            </div>
          </div>
          <button className="btn" id="placeOrder" onClick={handlePlaceOrder} disabled={placingOrder}>
            {!placingOrder ? (
              <span className="btn-text">Realizar Pedido</span>
            ) : (
              <span className="btn-spinner">
                <i className="fas fa-spinner fa-spin"></i> Procesando...
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Footer */}

    </>
  );
}