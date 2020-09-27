import styled, { css } from 'styled-components';

import IContainerProps from './interfaces/styles/IContainerProps';

import Tooltip from '../Tooltip';

export const Container = styled.div<IContainerProps>`
  background: #ffffff;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    color: #333333;
    border-radius: 8px;
    padding: 16px;
    border: 1px solid #dcdde0;
    padding-left: 55px;
    padding-top: 18px;

    &::placeholder {
      color: #999999;
    }

    & + input {
      margin-top: 8px;
    }

    ${props =>
    props.isErrored &&
    css`
      border-color: #c33030;
    `}

    ${props =>
      props.isFocused && !props.isErrored &&
      css`
        border-color: #0066ff;
      `}

  }

  svg {
    position: absolute;
    margin-left: 20px;
    color: #0066ff;
    stroke-width:1.5;

    
    ${props =>
    props.isErrored &&
    css`
      color: #c33030;
    `}

   
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  cursor: pointer;

  svg {
    margin: 0;
    position:absolute;
    right:16px;
  }

  span {
    background: #ea0b0b;
    color: #fff;

    &::before {
      border-color: #ea0b0b transparent;
    }
  }
`;
