"use client";

import { X } from "lucide-react";
import styles from "./style.module.scss";
import { useContext } from "react";
import { OrderContext } from "@/provider/order";

export default function ModalOrder() {
  const { order, onRequestClose, finishOrder } = useContext(OrderContext);

  async function handleFinishOrder() {
    await finishOrder(order[0].order_id);
  }

  return (
    <dialog className={styles.dialogContainer}>
      <section className={styles.dialogContent}>
        <button className={styles.dialogBack} onClick={onRequestClose}>
          <X size={40} color="#ff3f4b" />
        </button>

        <article className={styles.container}>
          <h2>Detalhes do pedido</h2>

          <span className={styles.table}>
            Mesa <b>{order[0].order.table}</b>
          </span>

          {order[0].order?.name && (
            <span className={styles.name}>
              <b>{order[0].order.name}</b>
            </span>
          )}

          {order.map((item) => (
            <section className={styles.item} key={item.id}>
              <span>
                {item.amount} - <b>{item.product.name}</b>
              </span>
            </section>
          ))}

          <button className={styles.buttonOrder} onClick={handleFinishOrder}>
            Concluir pedido
          </button>
        </article>
      </section>
    </dialog>
  );
}
