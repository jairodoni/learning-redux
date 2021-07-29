import { ActionType, IProduct } from "./types";

//type: nome descritivo da ação que esta sendo criada
//payload: qualquer função adicional para executar a ação (o parametros em outras palavras)

export function addProductToCartRequest(product: IProduct) {
  return {
    type: ActionType.addProductToCartRequest,
    payload: {
      product,
    },
  };
}
export function addProductToCartSuccess(product: IProduct) {
  return {
    type: ActionType.addProductToCartSuccess,
    payload: {
      product,
    },
  };
}
export function addProductToCartFailure(productId: number) {
  return {
    type: ActionType.addProductToCartFailure,
    payload: {
      productId,
    },
  };
}
