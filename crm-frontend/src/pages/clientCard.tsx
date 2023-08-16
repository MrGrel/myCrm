import { useTypeSelector } from '../hooks/redux';

import { Card } from '../components/СlientCard';
import { ModalCrm } from '../components/Modals/Modal';
import { ModalCrmSubmit } from '../components/Modals/ModalSubmiting';

import { Main, Container } from '../components/Container/сontainer.style';

export const ClientCard = () => {
  const { isOpenModal, isOpenModalSubmit } = useTypeSelector((state) => state.modalReducer);

  return (
    <Main>
      <Container>
        <Card />
        {isOpenModal && <ModalCrm />}
        {isOpenModalSubmit && <ModalCrmSubmit />}
      </Container>
    </Main>
  );
};
