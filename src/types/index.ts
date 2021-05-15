interface Product {
  name: string;
  price: number;
  imageSrc: string;
}

interface ProductsObject {
  products: {
    [key: string]: Product;
  };
}

interface Id {
  id: string;
}

interface CartItem extends Product, Id {
  quantity: number;
}

interface Cart {
  cart: CartItem[];
}

interface OrderItem extends Product, Id {
  quantity: number;
}

interface Order extends Id {
  itemList: OrderItem[];
}

interface OrderList {
  orderList: Order[];
}

interface RequestError {
  requestErrorMessage: string | null;
}

interface Loading {
  loading: boolean;
}

interface Animation {
  animation: {
    isShow: boolean;
  };
}

export { Product, ProductsObject, Id, CartItem, Cart, Order, OrderList, RequestError, Loading, Animation };
