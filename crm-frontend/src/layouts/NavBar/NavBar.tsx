import { useTypeDispatch, useTypeSelector } from '../../hooks/redux';
import { modalSlice } from '../../store/slice/modal.slice';

import { Container } from '../../components/Container/сontainer.style';
import { FormNav } from '../../components/FormNav';
import { AddClientButton, FormButtonContainer, Header, HeaderContainer, Logo, LogoText } from './NavBar.style';
import { Outlet } from 'react-router-dom';
import { ModalSearch } from '../../components/Modals/ModalSearch';

export const NavBar = () => {
  const isOpened = useTypeSelector((state) => state.searchClient.isModalSearchOpen);
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
      {isOpened && <ModalSearch />}
      <Outlet />
    </>
  );
};
