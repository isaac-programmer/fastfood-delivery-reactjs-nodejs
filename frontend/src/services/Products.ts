import axios from "axios";
import { Product } from "../types";
import { Dispatch, SetStateAction } from "react";

// Obtém todos os produtos
export const getProducts = async (
  setLoading: Dispatch<SetStateAction<boolean>>,
  setProducts: Dispatch<SetStateAction<Product[]>>
) => {
  try {
    const result = await axios.get<Product[]>(`${import.meta.env.VITE_FASTFOOD_DELIVERY_API}/products`);
    setProducts(result.data);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};
