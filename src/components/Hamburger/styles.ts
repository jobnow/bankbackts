import styled from "styled-components";

import { colors } from "../global";

export const StyledHamburger = styled.button<{ open: boolean }>`
  position: fixed;
  left: ${({ open }) => (open ? "230px" : "20px")};
  top: 15px;
  width: 2rem;
  height: 2rem;
  padding: 0;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: none;
  cursor: pointer;
  outline: none;
  z-index: 1;
  color: ${colors.secundary};
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0)" )};

  
`;