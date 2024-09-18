"use client";

import { getCookieCliente } from "@/lib/cookieClient";
import { api } from "@/services/api";
import { useRouter } from "next/navigation";
import { ReactNode, createContext, useState } from "react";
import { toast } from "sonner";

type OrderContextData = {
  isOpen: boolean;
  order: OrderItemProps[];
  onRequestOpen: (order_id: string) => Promise<void>;
  onRequestClose: () => void;
  finishOrder: (order_id: string) => Promise<void>;
};

type OrderProviderProps = {
  children: ReactNode;
};

export interface OrderItemProps {
  id: string;
  amount: string;
  created_at: string;
  order_id: string;
  product_id: string;
  product: {
    id: string;
    name: string;
    price: string;
    description: string;
    banner: string;
    category_id: string;
  };
  order: {
    id: string;
    table: number;
    name: string | null;
    draft: boolean;
    status: boolean;
  };
}

export const OrderContext = createContext({} as OrderContextData);

export function OrderProvider({ children }: OrderProviderProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [order, setOrder] = useState<OrderItemProps[]>([]);

  async function onRequestOpen(order_id: string) {
    const token = getCookieCliente();

    const response = await api.get("/order/detail", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        order_id: order_id,
      },
    });

    const order = response.data;

    setOrder(order);
    setIsOpen(true);
  }

  async function finishOrder(order_id: string) {
    const token = getCookieCliente();

    const data = {
      order_id: order_id,
    };

    try {
      await api.put("/order/finish", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
      toast.error("Não foi possível finalizar o pedido");
      return;
    }

    toast.success("Pedido finalizado com sucesso!");
    router.refresh();
    setIsOpen(false);
  }

  function onRequestClose() {
    setIsOpen(false);
  }

  return (
    <OrderContext.Provider
      value={{ isOpen, order, onRequestOpen, onRequestClose, finishOrder }}
    >
      {children}
    </OrderContext.Provider>
  );
}
