import { useEffect, useState } from "react";

export function useOrderSummary() {
  const [cartProductIds] = useState([1, 2]);
  const [products, setProducts] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(5.0);
  const [total, setTotal] = useState(0);

  // Cargar productos
  useEffect(() => {
    fetch("/src/apis/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Calcular resumen de pedido
  useEffect(() => {
    const items = cartProductIds
      .map((id) => products.find((p) => p.id === id))
      .filter(Boolean);

    setOrderItems(items);

    let sub = 0;
    items.forEach((item) => {
      sub += item.price;
    });

    setSubtotal(sub);
    setShipping(sub === 0 ? 0 : 5.0);
    setTotal(sub + (sub === 0 ? 0 : 5.0));
  }, [products, cartProductIds]);

  return {
    orderItems,
    subtotal,
    shipping,
    total,
  };
}