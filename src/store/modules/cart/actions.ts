import { IProduct } from "./types";

//type: nome descritivo da ação que esta sendo criada
//payload: qualquer função adicional para executar a ação (o parametros em outras palavras)

export function addProductToCart(product: IProduct) {
  return {
    type: "ADD_PRODUCT_TO_CART",
    payload: {
      product,
    },
  };
}
