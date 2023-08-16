import styled from '@emotion/styled';

export const Header = styled.header`
  margin-bottom: 20px;
  background: #ffffff;
  box-shadow: 0px 9.03012px 27.0904px rgba(176, 190, 197, 0.32), 0px 3.38629px 5.64383px rgba(176, 190, 197, 0.32);
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 23px 0;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin-right: 53px;
  background: #9873ff;
  border-radius: 25px;
`;

export const LogoText = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
`;

export const FormButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const AddClientButton = styled.button`
  padding: 8px 12px;
  background: #9873ff;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  transition: all 0.3s ease-in-out;

  white-space: nowrap;

  &:hover:not(:focus-visible) {
    outline: none;
    background: #fff;
    border: 1px solid #9873ff;
    color: #9873ff;
  }
  &:focus {
    outline: none;
    background: #fff;
    border: 1px solid #9873ff;
    color: #9873ff;
  }
  &:active:not(:focus-visible) {
    outline: none;
    background: #67a4ff;
    border: 1px solid #67a4ff;
    color: #fff;
  }
`;
