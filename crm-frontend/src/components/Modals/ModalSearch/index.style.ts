import styled from '@emotion/styled';

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
`;

export const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  max-width: 600px;
  width: 100%;
  padding: 40px;
  background: #fff;
  border-radius: 8px;
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;

  cursor: pointer;
`;

export const ModalText = styled.p`
  width: 80%;
  margin: 0;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #333;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin-bottom: 20px;

  & a,
  & button {
    padding: 6px 10px;
    background: #9873ff;
    border: 1px solid #9873ff;
    border-radius: 3px;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #fff;
    transition: all 0.3s ease-in-out;
    white-space: nowrap;
    cursor: pointer;

    &:hover:not(:focus-visible) {
      outline: none;
      background: #fff;
      color: #9873ff;
    }

    &:focus {
      outline: none;
      background: #fff;
      color: #9873ff;
    }

    &:active:not(:focus-visible) {
      outline: none;
      background: #3f2aff;
      border-color: #3f2aff;
      color: #fff;
    }
  }
`;

export const ModalCancel = styled.button`
  padding: 10px;
  background: none;
  border: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #333;
  text-decoration: underline;
  cursor: pointer;

  &:hover:not(:focus-visible) {
    outline: none;
  }

  &:focus {
    outline: none;
  }

  &:active:not(:focus-visible) {
    outline: none;
  }
`;
