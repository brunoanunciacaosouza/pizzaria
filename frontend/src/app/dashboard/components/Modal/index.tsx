import { X } from "lucide-react";
import styles from "./style.module.scss";

export default function ModalOrder() {
  return (
    <dialog className={styles.dialogContainer}>
      <section className={styles.dialogContent}>
        <button className={styles.dialogBack}>
          <X size={40} color="#ff3f4b" />
        </button>

        <article className={styles.container}>
          <h2>Detalhes do pedido</h2>

          <span className={styles.table}>
            Mesa <b>1</b>
          </span>

          <section className={styles.item}>
            <span>
              1 - <b>Fritas</b>
            </span>
            <span className={styles.description}>
              Lorem ipsum dolor sit amet.
            </span>
          </section>

          <section className={styles.item}>
            <span>
              1 - <b>Fritas</b>
            </span>
            <span className={styles.description}>
              Lorem ipsum dolor sit amet.
            </span>
          </section>

          <button className={styles.buttonOrder}>Concluir pedido</button>
        </article>
      </section>
    </dialog>
  );
}
