import { getCookieServer } from "@/lib/cookieServer";
import Form from "../components/Form";
import { api } from "@/services/api";

export default async function Product() {
  const token = getCookieServer();
  const response = await api.get("/category", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return (
    <main>
      <Form categories={response.data} />
    </main>
  );
}
