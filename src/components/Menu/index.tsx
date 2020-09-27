import React, { useState, useRef } from "react";
import { StyledMenu, StyledLink } from "./styles";
import { ShoppingCart, Box, Users } from 'react-feather';
import { useOnClickOutside } from "~/hooks/Menu";

import Hamburger from "../Hamburger";
import logoImg from '~/assets/logo_menu.png';

const Menu = () => {
  const [open, setOpen] = useState<boolean>(true);
  const node = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  //useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
       
      <StyledMenu open={open} >

        <img src={logoImg} alt="Bank Pague" />

        <StyledLink onClick={() => close()}>
          <ShoppingCart />
            <span>Vendas</span>
        </StyledLink>

        <StyledLink onClick={() => close()}>
          <Box /> 
          <span>Produtos</span>
        </StyledLink>

        <StyledLink onClick={() => close()}>
          <Users />
          <span>Users</span>
        </StyledLink>

      </StyledMenu>
      <Hamburger open={open} setOpen={setOpen} />
    </div>
  );
};

export default Menu;
