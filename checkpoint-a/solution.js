import { findAllOrders, findOrderById } from "./orders-db.js";

export async function loadOrders() {
  return await findAllOrders();
}

export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Giza" && order.status === "paid"
  );
}

export function summarize(orders) {
  return orders.reduce(
    (highest, order) => Math.max(highest, order.price),
    0
  );
}

export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.student} ordered ${order.quantity} x ${order.item}`;
  } catch (error) {
    return `Missing order: ${id}`;
  }
}

export function toJsonLines(orders) {
  const simplifiedOrders = orders.map(({ item, price }) => ({
    item,
    price,
  }));

  return JSON.stringify(simplifiedOrders);
}
