import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { IState } from "../..";
import api from "../../../services/api";
import { addProductToCartFailure, addProductToCartRequest, addProductToCartSuccess } from "./actions";
import { ActionType } from "./types";

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>;

interface IStockResponse{
  id: number;
  quantity: number;
}

function* checkProducStock({ payload }: CheckProductStockRequest) {
  const { product } = payload;

  const currentQuantity: number = yield select((state: IState) => {
    return (
      state.cart.items.find((item) => item.product.id === product.id)?.quantity ?? 0);
  });

  const availableStockResponse: AxiosResponse<IStockResponse> = yield call(api.get, `stock/${product.id}`);

  if(availableStockResponse.data.quantity > currentQuantity){
    //put tem a mesma função do dispatch
    yield put(addProductToCartSuccess(product))
  }else{
    yield put(addProductToCartFailure(product.id))
  }
}

//takeLatest: caso o usuario acione a mesma actions varias vezes
//ele só vai ignorar as outras e pegar apenas a ultima
export default all([
  takeLatest(ActionType.addProductToCartRequest, checkProducStock)
]);