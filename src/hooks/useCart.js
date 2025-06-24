import { useEffect, useState } from "react";

export function useCart() {
  const [cartProductIds, setCartProductIds] = useState([1, 2]); // IDs de ejemplo
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(5.0);
  const [total, setTotal] = useState(0);
  const [productCount, setProductCount] = useState(0);

  // Cargar productos del carrito
  useEffect(() => {
    fetch("/src/apis/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Actualizar items del carrito cuando cambian los productos o los IDs
  useEffect(() => {
    const items = cartProductIds
      .map((id) => {
        const product = products.find((p) => p.id === id);
        return product
          ? { ...product, quantity: 1 }
          : null;
      })
      .filter(Boolean);
    setCartItems(items);
  }, [products, cartProductIds]);

  // Calcular totales
  useEffect(() => {
    let sub = 0;
    let count = 0;
    cartItems.forEach((item) => {
      sub += item.price * (item.quantity || 1);
      count += item.quantity || 1;
    });
    setSubtotal(sub);
    setShipping(sub === 0 ? 0 : 5.0);
    setTotal(sub + (sub === 0 ? 0 : 5.0));
    setProductCount(count);
  }, [cartItems]);

  // Cambiar cantidad
  const updateQuantity = (id, quantity) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: quantity < 1 ? 1 : quantity } : item
      )
    );
  };

  // Eliminar producto
  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
    setCartProductIds((ids) => ids.filter((pid) => pid !== id));
  };

  return {
    cartItems,
    subtotal,
    shipping,
    total,
    productCount,
    updateQuantity,
    removeItem,
  };
}