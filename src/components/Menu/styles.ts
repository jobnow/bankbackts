import styled from "styled-components";
import { colors } from "../global";

export const StyledMenu = styled.nav<{ open: boolean }>`
  top: 0;
  left: 0;
  height: 100vh;
  width: 280px;
  position: fixed;
  background-color: ${colors.color};
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding-top: 70px;
  box-shadow: 9px 0px 19px -17px rgba(0,0,0,0.20);

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  > img {
    width:148px;
    margin: 0 auto;
    margin-bottom:30px;
  }

  @media (max-width: 280px) {
    width: 100%;
  }
`;

export const StyledLink = styled.a`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  align-items:center;
  padding: 10px 40px;
  font-size: 16px;
  color: ${colors.secundary};
  text-decoration: none;
  cursor:pointer;
  margin-top:15px;
  margin-left:20px;
  margin-right:20px;
  border-radius:8px;
  background-color:#f2f2f2;

  span{
    margin-left:10px;
  }

  :hover {
    color: ${colors.primary};
  }
`;
