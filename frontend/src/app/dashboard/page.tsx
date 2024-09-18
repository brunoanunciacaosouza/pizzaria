import { api } from "@/services/api";
import Orders from "./components/Orders";
import { getCookieServer } from "@/lib/cookieServer";
import { OrderProps } from "@/lib/order.type";

async function getOrders(): Promise<OrderProps[] | []> {
  try {
    const token = getCookieServer();

    const response = await api.get("/orders", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data || [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function Dashboard() {
  const orders = await getOrders();

  console.log(orders);
  return (
    <>
      <Orders orders={orders} />
    </>
  );
}
