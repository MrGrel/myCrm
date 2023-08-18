import styled from '@emotion/styled';
import { IOpenModal, IStyleAlert } from '../../../types/CrmTypes';

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
  z-index: 10;
`;

export const Modal = styled.div`
  position: relative;
  width: 450px;
  padding: 25px 0;
  background: #fff;
  border-radius: 8px;
`;

export const ModalCloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 29px;
  height: 29px;
  padding: 6.5px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const ModalError = styled.p`
  margin: 0;
  margin-top: 10px;
  padding: 0;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: red;
`;

export const ModalErrorContacts = styled.p`
  position: absolute;
  bottom: -13px;
  left: 0;
  margin: 0;
  margin-top: 10px;
  padding: 0;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: red;
`;

export const ModalTitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 9px;
  width: 100%;
  margin-bottom: 15px;
  padding: 0 25px;
`;

export const ModalTitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #333333;
`;

export const ModalTitleId = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #b0b0b0;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  border: none;
  background: #fff;
`;

export const ModalFIOFieldset = styled.fieldset`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  margin: 0;
  padding: 0;
  margin-bottom: 25px;
  padding: 0 30px;
  background: #fff;
  border: none;
`;

export const ModalInputContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const ModalLegend = styled.label`
  margin-bottom: 2px;
  background-color: #fff;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: #b0b0b0;
`;

export const ModalRequired = styled.span`
  color: #9873ff;
`;

export const ModalInput = styled.input<IStyleAlert>`
  width: 100%;
  padding: 0;
  padding-bottom: 4px;
  background: #fff;
  border: none;
  border-bottom: 1px solid ${(props) => (props.alert ? 'red' : '#c8c5d1')};
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #333333;

  &::placeholder {
    font-weight: 400;
    color: ${(props) => (props.alert ? 'red' : '#b0b0b0')};
  }
  &:hover {
    outline: none;
  }
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
`;

export const ModalContactsFieldset = styled.fieldset`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  margin: 0;
  margin-bottom: 25px;
  padding: 25px 30px;
  background: rgba(200, 197, 209, 0.2);
  border: none;
  font-size: 0;
`;

export const ModalContainerContactInputs = styled.div`
  width: 100%;
  margin-bottom: 25px;
`;

export const ModalLabelContact = styled.label<IStyleAlert>`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  border: 1px solid ${(props) => (props.alert ? 'red' : '#c8c5d1')};

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const ModalSelect = styled.select`
  width: 123px;
  padding: 10px 12px;
  background: #e7e5eb;
  border: none;
  border-right: 1px solid #c8c5d1;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #333333;
  cursor: pointer;

  &:hover {
    outline: none;
  }
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
`;

export const ModalOption = styled.option`
  width: inherit;
  padding: 5px;
  background: #f4f3f6;
`;

export const ModalContactInput = styled.input`
  width: 100%;
  padding: 9px 12px;
  border: none;
  border-right: 1px solid #c8c5d1;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #333333;

  &::placeholder {
    font-weight: 400;
    color: #b0b0b0;
  }
  &:hover {
    outline: none;
  }
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
`;

export const ModalContactTypeInput = styled.input`
  width: 123px;
  padding: 9px 12px;
  border: none;
  border-right: 1px solid #c8c5d1;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #333333;

  &::placeholder {
    font-weight: 400;
    color: #b0b0b0;
  }
  &:hover {
    outline: none;
  }
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
`;

export const ModalCLoseContact = styled.button`
  width: 27px;
  padding: 10px 6px;
  background: #e7e5eb;
  border: none;
  cursor: pointer;

  & svg {
    transition: transform 0.6s ease-in-out;
  }

  &:hover {
    outline: none;
  }
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }

  &:hover svg {
    transform: rotate(360deg);
  }
`;

export const ModalAddContact = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  background: none;
  border: none;
  border-radius: 3px;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #333333;
  fill: #9873ff;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  & svg {
    margin-right: 0.5em;
  }

  &:hover {
    outline: none;
    background: #9873ff;
    color: #fff;
    fill: #fff;
  }
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
    background: #9873ff;
    color: #fff;
    fill: #fff;
  }
`;

export const ModalSubmit = styled.button`
  display: flex;
  align-items: center;
  padding: 13px 30px;
  background: #9873ff;
  border: none;
  border-radius: 3px;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
  cursor: pointer;
`;
