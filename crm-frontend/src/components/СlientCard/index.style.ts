import styled from '@emotion/styled';

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
`;

export const TitleContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  margin-bottom: 40px;
`;

export const ButtonBack = styled.button`
  position: absolute;
  top: -10px;
  left: 15px;
  padding: 8px 12px;
  background: none;
  border: 1px solid #b0b0b0;
  border-radius: 4px;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #333;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover:not(:focus-visible) {
    outline: none;
    background: none;
    border-color: #9873ff;
    color: #9873ff;
  }

  &:focus {
    outline: none;
    background: none;
    border-color: #9873ff;
    color: #9873ff;
  }

  &:active:not(:focus-visible) {
    outline: none;
    background: #9873ff;
    border-color: #9873ff;
    color: #fff;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: -10px;
  right: 15px;
`;

export const ButtonChange = styled.button`
  margin-right: 10px;
  padding: 8px 12px;
  background: #9873ff;
  border: 1px solid #9873ff;
  border-radius: 4px;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #fff;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover:not(:focus-visible) {
    outline: none;
    background: none;
    border-color: #3f2aff;
    color: #3f2aff;
  }

  &:focus {
    outline: none;
    background: none;
    border-color: #3f2aff;
    color: #3f2aff;
  }

  &:active:not(:focus-visible) {
    outline: none;
    background: #3f2aff;
    border-color: #3f2aff;
    color: #fff;
  }
`;

export const ButtonRemove = styled.button`
  padding: 8px 12px;
  background: #9873ff;
  border: 1px solid #9873ff;
  border-radius: 4px;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #fff;
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

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 50px;
`;

export const CardImg = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 30px;
  border-radius: 50%;
`;

export const CardDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  padding-top: 50px;
`;

export const CardDesc = styled.p`
  margin: 0;
  margin-bottom: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #333333;
`;

export const ContactList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;

  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

export const ContactType = styled.p`
  margin: 0;
  margin-right: 10px;

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  color: #333333;
`;

export const ContactDesc = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #333333;
`;
