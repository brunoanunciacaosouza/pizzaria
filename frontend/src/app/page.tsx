import Image from "next/image";
import Link from "next/link";

import logoImg from "../../public/logo.svg";
import styles from "./page.module.scss";
import { api } from "@/services/api";
import { redirect } from "next/navigation";

export default function Page() {
  async function handleLogin(formData: FormData) {
    "use server";

    const email = formData.get("email");
    const password = formData.get("password");

    if (email === "" || password === "") {
      return;
    }

    try {
      const response = await api.post("/session", {
        email,
        password,
      });

      if (!response.data.token) {
        return;
      }
    } catch (error) {
      console.log(error);
    }

    redirect("/dashboard");
  }

  return (
    <>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo da pizzaria" width={309} priority />

        <section className={styles.login}>
          <form action={handleLogin}>
            <input
              type="email"
              required
              name="email"
              placeholder="Digite o seu email..."
              className={styles.input}
            />

            <input
              type="password"
              required
              name="password"
              placeholder="**********"
              className={styles.input}
            />

            <button type="submit">Acessar</button>
          </form>

          <Link href="/signup" className={styles.text}>
            Não possui um conta? Cadastre-se
          </Link>
        </section>
      </div>
    </>
  );
}
