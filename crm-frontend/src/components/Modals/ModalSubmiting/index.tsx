import { useTypeDispatch, useTypeSelector } from '../../../hooks/redux';
import { modalSlice } from '../../../store/slice/ModalSlice';
import { deleteClient } from '../../../store/slice/actionCreatot';

import { Loader } from '../../Loader/index.style';
import { ModalCloseBtn, ModalError } from '../Modal/index.style';
import { closeModalSvg } from '../Modal/ModalSvg';
import { CancelButton, H3, Modal, ModalContainer, SubmitButton, SubmitText } from './index.style';

export const ModalCrmSubmit = () => {
  const { client, error, modalIsLoading, isOpenModalSubmit } = useTypeSelector((state) => state.modalReducer);
  const { closeSubmitModal } = modalSlice.actions;

  const dispatch = useTypeDispatch();

  const handleClickRemoveClient = () => {
    if (client !== null) {
      dispatch(deleteClient(client.id));
    }
  };

  function handleClickCloseModal(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    if (e.target === e.currentTarget) {
      dispatch(closeSubmitModal());
    }
  }

  return (
    <ModalContainer isOpenModal={isOpenModalSubmit} onClick={handleClickCloseModal}>
      <Modal>
        <ModalCloseBtn onClick={() => dispatch(closeSubmitModal())}>{closeModalSvg}</ModalCloseBtn>
        <H3>Удалить клиента</H3>
        <SubmitText>Вы действительно хотите удалить данного клиента?</SubmitText>
        <SubmitButton onClick={() => handleClickRemoveClient()}>
          {modalIsLoading && <Loader wh={16} color="#7e0404" />}Удалить
        </SubmitButton>
        {error && <ModalError>{error}</ModalError>}
        <CancelButton onClick={() => dispatch(closeSubmitModal())}>Отмена</CancelButton>
      </Modal>
    </ModalContainer>
  );
};
