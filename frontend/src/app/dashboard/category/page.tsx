import { api } from "@/services/api";
import Button from "../components/Button";
import styles from "./styles.module.scss";
import { getCookieServer } from "@/lib/cookieServer";
import { redirect } from "next/navigation";

export default function Category() {
  async function handleRegisterCategory(formData: FormData) {
    "use server";

    const name = formData.get("name");

    if (name === "") {
      return;
    }

    const token = getCookieServer();

    await api
      .post(
        "/category",
        { name },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .catch((error) => {
        console.log(error);
        return;
      });

    redirect("/dashboard");
  }

  return (
    <main className={styles.container}>
      <h1>Nova Categoria</h1>

      <form className={styles.form} action={handleRegisterCategory}>
        <input
          type="text"
          name="name"
          placeholder="Nome da categoria, ex: Pizzas"
          required
          className={styles.input}
        />

        <Button name="Cadastrar" />
      </form>
    </main>
  );
}
