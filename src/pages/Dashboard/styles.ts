import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.main``;

export const Navbar = styled.div`
  width: 100%;
  height:60px;
  box-shadow: 9px 9px 19px -17px rgba(0,0,0,0.20);
`;

export const Profile = styled.div`
  position:absolute;
  right: 15px;
  width: 100%;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-top:10px;
  }

  div {
    display: flex;
    margin-left: 16px;
    line-height: 60px;
    float:right;

    strong {
      text-decoration: none;
      color:#333333;
      font-size:14px;
      margin-right:16px;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
