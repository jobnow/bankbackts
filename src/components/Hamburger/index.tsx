import React from "react";
import { ChevronRight} from 'react-feather';
import { StyledHamburger } from "./styles";

export type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const Hamburger = (props: Props) => (
  <StyledHamburger open={props.open} onClick={() => props.setOpen(!props.open)}>
     <ChevronRight />
  </StyledHamburger>
);

export default Hamburger;
