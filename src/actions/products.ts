import { ProductsObject, RequestError } from "../interface";
import { createAction, ActionType } from "typesafe-actions";

const products = {
  get: {
    request: createAction("products/get/request")(),
    success: createAction("products/get/success", (products: ProductsObject) => products)<ProductsObject>(),
    failure: createAction(
      "products/get/failure",
      (requestErrorMessage: RequestError) => requestErrorMessage
    )<RequestError>(),
  },
};

type productsActionType = ActionType<typeof products.get>;

export default products;
export { productsActionType };
