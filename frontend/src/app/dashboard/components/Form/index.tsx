"use client";

import { UploadCloud } from "lucide-react";
import styles from "./styles.module.scss";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import Button from "../Button";
import { api } from "@/services/api";
import { getCookieCliente } from "@/lib/cookieClient";

interface CategoryProps {
  id: string;
  name: string;
}

interface Props {
  categories: CategoryProps[];
}

export default function Form({ categories }: Props) {
  const [image, setImage] = useState<File>();
  const [previewImage, setPreviewImage] = useState("");

  function handleFile(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    if (event.target.files && event.target.files[0]) {
      const image = event.target.files[0];

      if (image.type !== "image/png" && image.type !== "image/jpeg") {
        console.log("Formato proibido");
        return;
      }

      setImage(image);
      setPreviewImage(URL.createObjectURL(image));
    }
  }

  async function handleRegisterProduct(formData: FormData) {
    const categoryIndex = formData.get("category");
    const name = formData.get("name");
    const price = formData.get("price");
    const description = formData.get("description");

    if (!categoryIndex || !name || !price || !description || !image) {
      return;
    }

    const data = new FormData();

    data.append("name", name);
    data.append("price", price);
    data.append("description", description);
    data.append("category_id", categories[Number(categoryIndex)].id);
    data.append("file", image);

    const token = getCookieCliente();

    await api
      .post("/product", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  }

  return (
    <main className={styles.container}>
      <h1>Novo produto</h1>

      <form className={styles.form} action={handleRegisterProduct}>
        <label className={styles.labelImage}>
          <span>
            <UploadCloud size={24} color="#fff" />
          </span>

          <input
            type="file"
            accept="image/png, image/jpeg"
            required
            onChange={handleFile}
          />

          {previewImage && (
            <Image
              alt="Imagem de preview"
              src={previewImage}
              className={styles.preview}
              fill={true}
              quality={100}
              priority={true}
            />
          )}
        </label>

        <select name="category">
          {categories.map((category, index) => (
            <option key={category.id} value={index}>
              {category.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="name"
          placeholder="Digite o nome do produto"
          required
          className={styles.input}
        />

        <input
          type="text"
          name="price"
          placeholder="Preço do produto"
          required
          className={styles.input}
        />

        <textarea
          name="description"
          className={styles.input}
          required
          placeholder="Digite a descrição do produto..."
        ></textarea>

        <Button name="Cadastrar Produto" />
      </form>
    </main>
  );
}
