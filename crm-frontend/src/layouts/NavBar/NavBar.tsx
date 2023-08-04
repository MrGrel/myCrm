import { useTypeDispatch } from '../../hooks/redux';
import { modalSlice } from '../../store/slice/ModalSlice';

import { Container } from '../../components/Container.style';
import { FormNav } from '../../components/FormNav';
import { AddClientButton, FormButtonContainer, Header, HeaderContainer, Logo, LogoText } from './NavBar.style';
import { Outlet } from 'react-router-dom';

export const NavBar = () => {
  const { openModal } = modalSlice.actions;
  const dispatch = useTypeDispatch();
  return (
    <>
      <Header>
        <Container>
          <HeaderContainer>
            <Logo>
              <LogoText>skb.</LogoText>
            </Logo>
            <FormButtonContainer>
              <FormNav />
              <AddClientButton onClick={() => dispatch(openModal({ client: null, isSubmiting: false }))}>
                Добавить клиента
              </AddClientButton>
            </FormButtonContainer>
          </HeaderContainer>
        </Container>
      </Header>
      <Outlet />
    </>
  );
};
