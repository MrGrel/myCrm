import styled from '@emotion/styled';
import { IOpenModal } from '../../../types/CrmTypes';

export const ModalContainer = styled.div<IOpenModal>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  background-color: rgba(3, 3, 3, 0.5);
  visibility: ${(props) => (props.isOpenModal ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isOpenModal ? '1' : '0')};
  transition: all 0.3s ease-in-out;
  z-index: 100;
`;

export const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 450px;
  width: 100%;
  padding: 22px 0;
  background: #fff;
  border-radius: 8px;
`;

export const H3 = styled.h3`
  margin-bottom: 11px;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #333333;
`;

export const SubmitText = styled.p`
  margin-bottom: 25px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  color: #333333;
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding: 13px 35px;
  background: #9873ff;
  border: 1px solid #fff;
  border-radius: 3px;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover:not(:focus-visible) {
    outline: none;
    background: none;
    border-color: #7e0404;
    color: #7e0404;
  }

  &:focus {
    outline: none;
    background: none;
    border-color: #7e0404;
    color: #7e0404;
  }

  &:active:not(:focus-visible) {
    outline: none;
    background: #7e0404;
    border-color: #7e0404;
    color: #fff;
  }
`;

export const CancelButton = styled.button`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  border: none;
  background: none;
  color: #333333;
  text-decoration-line: underline;
`;
