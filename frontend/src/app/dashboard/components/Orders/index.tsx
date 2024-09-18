"use client";

import { RefreshCw } from "lucide-react";
import styles from "./styles.module.scss";
import { OrderProps } from "@/lib/order.type";
import ModalOrder from "../Modal";
import { useContext } from "react";
import { OrderContext } from "@/provider/order";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Props {
  orders: OrderProps[];
}

export default function Orders({ orders }: Props) {
  const router = useRouter();
  const { isOpen, onRequestOpen } = useContext(OrderContext);

  async function handleDetailOrder(order_id: string) {
    onRequestOpen(order_id);
  }

  function handleRefresh() {
    router.refresh();
    toast.success("Pedidos atualizados com sucesso!");
  }

  return (
    <>
      <main className={styles.container}>
        <section className={styles.containerHeader}>
          <h1>Últimos pedidos</h1>
          <button onClick={handleRefresh}>
            <RefreshCw size={24} color="#3fffa3" />
          </button>
        </section>

        <section className={styles.listOrders}>
          {orders.length === 0 && (
            <span className={styles.emptyItem}>
              Nenhum Pedido aberto no momento...
            </span>
          )}

          {orders.map((order) => (
            <button
              key={order.id}
              className={styles.orderItem}
              onClick={() => handleDetailOrder(order.id)}
            >
              <div className={styles.tag}></div>
              <span>Mesa {order.table}</span>
            </button>
          ))}
        </section>
      </main>

      {isOpen && <ModalOrder />}
    </>
  );
}
