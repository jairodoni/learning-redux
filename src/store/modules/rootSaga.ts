import { all } from "redux-saga/effects";

import cart from "./cart/sagas";

//Função com Generators
//o  * e como o async
//e o yield é como o await
export default function* rootSaga(): any {
  return yield all([
    cart,
  ]);
}
