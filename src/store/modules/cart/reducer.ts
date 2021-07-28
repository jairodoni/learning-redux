import { Reducer } from "redux";
import produce from "immer";
import { ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  items: [],
};

//Esta em "arrow function" para poder tipar a função como reducer
const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  //baseado nas actions, os states vão ser atualidados com os dados das actions

  //o produce(immer) automatiza o tratamento da imutabilidade do estado para alteralo
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_PRODUCT_TO_CART": {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(
          (item) => item.product.id === product.id
        );

        //se o item ja existe então aumenta a quantidade
        //se não existe ele adiciona um novo item
        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }

        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default cart;
