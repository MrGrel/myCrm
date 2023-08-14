import { Link, useNavigate } from 'react-router-dom';
import { useTypeDispatch, useTypeSelector } from '../../../hooks/redux';
import { searchClientSlice } from '../../../store/slice/searchClientSlice';
import { closeModalSvg } from '../modal.svg';
import { LinksContainer, Modal, ModalCancel, ModalClose, ModalContainer, ModalText } from './index.style';

export const ModalSearch = () => {
  const allClients = useTypeSelector((state) => state.clientReducer.allClients);
  const client = useTypeSelector((state) => state.searchClient.client);
  const { closeModal, clearSearch } = searchClientSlice.actions;
  const dispatch = useTypeDispatch();

  const navigate = useNavigate();

  const handleClickClose = () => {
    dispatch(closeModal());
  };

  const handleClickClearSearchButton = () => {
    let page = 1;

    allClients.forEach((clientInArr, index) => {
      if (client?.id === clientInArr.id) {
        page = Math.ceil((index + 1) / 5);
      }
    });

    navigate(`/crm/${page}`);
    dispatch(clearSearch());
  };

  const handleClickClearSearchLink = () => {
    dispatch(clearSearch());
  };

  return (
    <ModalContainer>
      <Modal>
        <ModalClose onClick={(e) => handleClickClose()}>{closeModalSvg}</ModalClose>
        <ModalText>Пожалуйста, выберите где показать клииента,в таблице или в новой вкладке</ModalText>
        <LinksContainer>
          <button onClick={handleClickClearSearchButton}>в таблице</button>
          <Link
            to={`/crm/1/client/:${client?.id}`}
            target="_blank"
            rel="noopener norefener"
            onClick={handleClickClearSearchLink}
          >
            в вкладке
          </Link>
        </LinksContainer>
        <ModalCancel onClick={handleClickClose}>Отмена</ModalCancel>
      </Modal>
    </ModalContainer>
  );
};
