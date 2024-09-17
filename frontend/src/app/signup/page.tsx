import logoImg from "../../../public/logo.svg";
import Image from "next/image";
import styles from "../page.module.scss";
import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo da pizzaria" />

        <section className={styles.login}>
          <h1>Criando sua conta</h1>
          <form>
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

            <button type="submit">Acessar</button>
          </form>

          <Link href="/" className={styles.text}>
            Já possui uma conta? Faça o login
          </Link>
        </section>
      </div>
    </>
  );
}
