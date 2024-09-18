"use client";

import { getCookieCliente } from "@/lib/cookieClient";
import { api } from "@/services/api";
import { ReactNode, createContext, useState } from "react";

type OrderContextData = {
  isOpen: boolean;
  order: OrderItemProps[];
  onRequestOpen: (order_id: string) => Promise<void>;
  onRequestClose: () => void;
};

type OrderProviderProps = {
  children: ReactNode;
};

interface OrderItemProps {
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

  function onRequestClose() {
    setIsOpen(false);
  }

  return (
    <OrderContext.Provider
      value={{ isOpen, order, onRequestOpen, onRequestClose }}
    >
      {children}
    </OrderContext.Provider>
  );
}
