import { products } from "@/data/products";
import { Product } from "@/types/product";
import { resolve } from "path";

export async function getAllProducts():Promise<Product[]> {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve(products)
    },2000)
  })
}