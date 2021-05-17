import React, { useEffect, VFC } from "react";
import { useDispatch, useSelector } from "react-redux";

import actions from "../../actions";
import { CartAnimation, Product } from "../../Components";
import { RootState } from "../../store";

import { Container } from "./styles";

const ProductList: VFC = () => {
  const dispatch = useDispatch();

  const { products, loading, requestErrorMessage } = useSelector(
    ({ products: { products, loading, requestErrorMessage } }: RootState) => ({
      products,
      loading,
      requestErrorMessage,
    })
  );

  const { animation } = useSelector(({ cart: { animation } }: RootState) => ({ animation }));

  useEffect(() => {
    dispatch(actions.products.get.request());
  }, []);

  const onClickCart = (product_id: string) => {
    dispatch(actions.cart.post.request(product_id));
  };

  return (
    <Container>
      {products.map(({ product_id, image_url, name, price }) => (
        <Product
          key={product_id}
          id={product_id}
          imageSrc={image_url}
          imageSize="282px"
          name={name}
          price={price}
          onClickCart={() => {
            onClickCart(product_id);
          }}
        />
      ))}
      {animation.isShow && <CartAnimation />}
    </Container>
  );
};

export default ProductList;
