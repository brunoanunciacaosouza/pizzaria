import logoImg from "../../../public/logo.svg";
import Image from "next/image";
import styles from "../page.module.scss";
import Link from "next/link";
import { redirect } from "next/navigation";

import { api } from "@/services/api";

export default function SignUp() {
  async function handleRegister(formData: FormData) {
    "use server";
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (name === "" || email === "" || password === "") {
      return;
    }

    try {
      await api.post("/user", {
        name,
        email,
        password,
      });
    } catch (error) {
      console.log(error);
    }

    redirect("/");
  }

  return (
    <>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo da pizzaria" />

        <section className={styles.login}>
          <h1>Criando sua conta</h1>
          <form action={handleRegister}>
            <input
              type="name"
              required
              name="name"
              placeholder="Digite o seu nome..."
              className={styles.input}
            />

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

            <button type="submit">Cadastrar</button>
          </form>

          <Link href="/" className={styles.text}>
            Já possui uma conta? Faça o login
          </Link>
        </section>
      </div>
    </>
  );
}
