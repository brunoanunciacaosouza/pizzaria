"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import { LogOutIcon } from "lucide-react";

import logoImg from "../../../../../public/logo.svg";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  async function handleLogout() {
    deleteCookie("session", {
      path: "/",
    });

    router.replace("/");
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/dashboard">
          <Image
            src={logoImg}
            alt="Logo Sujeito Pizza"
            width={198}
            height={68}
            quality={100}
            priority={true}
          />
        </Link>

        <nav>
          <Link href="/dashboard/category">Categoria</Link>
          <Link href="/dashboard/product">Produto</Link>

          <form action={handleLogout}>
            <button type="submit">
              <LogOutIcon size={24} color="#fff" />
            </button>
          </form>
        </nav>
      </div>
    </header>
  );
}
