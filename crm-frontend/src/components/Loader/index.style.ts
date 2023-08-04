import styled from '@emotion/styled';
import { ILoader } from '../../types/CrmTypes';

export const Loader = styled.span<ILoader>`
  position: relative;
  display: inline-block;
  align-content: end;
  box-sizing: border-box;
  width: ${(props) => props.wh}px;
  height: ${(props) => props.wh}px;
  margin-right: 0.5em;
  border: ${(props) => props.wh / 10}px solid ${(props) => props.color};
  border-radius: 50%;
  animation: rotation 1s linear infinite;

  &::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${(props) => (props.wh / 100) * 80}px;
    height: ${(props) => (props.wh / 100) * 80}px;
    border-radius: 50%;
    border: ${(props) => props.wh / 10}px solid;
    border-color: ${(props) => props.color} transparent;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
