import styled from '@emotion/styled';

export const Form = styled.form`
  position: relative;
  max-width: 581px;
  width: 100%;
  margin-right: 15px;
  background: #fff;
  border-radius: 10px;
  z-index: 10;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: none;
  border: 1px solid #b0b0b0;
  border-radius: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000;

  &::placeholder {
    color: #b0b0b0;
  }

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

export const ButtonsContainer = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  width: 100%;
  background: #fff;
  border-radius: 10px;
  z-index: 10;
`;

export const ButtonSearch = styled.button`
  width: 100%;
  padding: 8px;
  background: none;
  border: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #333;
  transition: all 0.15s ease-in-out;
  cursor: pointer;

  &:first-of-type {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &:last-of-type {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &:hover:not(:focus-visible) {
    outline: none;
    background: #8fbcff;
  }
  &:focus {
    outline: none;
    background: #8fbcff;
  }
  &:active:not(:focus-visible) {
    outline: none;
    background: #67a4ff;
  }
`;

export const LoaderAndErrorContainer = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 20px;
  width: 100%;
  background: #fff;
  border-radius: 10px;
  z-index: 10;
`;

export const ErrorMessage = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #333;
`;

export const DarkContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
