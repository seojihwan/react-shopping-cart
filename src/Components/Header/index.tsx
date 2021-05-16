import React, { VFC } from "react";
import { Link } from "react-router-dom";

import { CartIcon } from "..";
import { COLOR, SIZE } from "../../constants/theme";
import { Container, Inner, Flex, H1, NavigationItem } from "./style";

const Header: VFC = () => (
  <Container>
    <Inner>
      <Link to="/">
        <Flex>
          <CartIcon size={SIZE.ICON.CART.LG} color={COLOR.WHITE} />
          <H1>WOOWA SHOP</H1>
        </Flex>
      </Link>
      <nav>
        <NavigationItem to="/cart">장바구니</NavigationItem>
        <NavigationItem to="/order-list">주문목록</NavigationItem>
      </nav>
    </Inner>
  </Container>
);

export default Header;
