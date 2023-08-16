import { Container, Main, Title } from '../components/Container/index.style';
import { ModalCrm } from '../components/Modals/Modal';
import { ModalCrmSubmit } from '../components/Modals/ModalSubmiting';
import { TableCrm } from '../components/TableCrm';
import { useTypeSelector } from '../hooks/redux';
import { Pagination } from '../components/TableCrm/pagination';

export const Crm = () => {
  const { isOpenModal, isOpenModalSubmit } = useTypeSelector((state) => state.modalReducer);
  return (
    <Main>
      <Container>
        <Title>Клиенты</Title>
        <TableCrm />
        <Pagination />
      </Container>
      {isOpenModal && <ModalCrm />}
      {isOpenModalSubmit && <ModalCrmSubmit />}
    </Main>
  );
};
