import { OrderItemProps } from "@/provider/order";

export function calculateTotalOrder(orders: OrderItemProps[]) {
  return orders.reduce((total, item) => {
    const itemTotal = parseFloat(item.product.price) * parseInt(item.amount);

    return total + itemTotal;
  }, 0);
}
