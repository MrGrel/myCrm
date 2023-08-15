import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useTypeDispatch, useTypeSelector } from '../../../hooks/redux';
import { searchClientSlice } from '../../../store/slice/searchClientSlice';
import { clientSlice } from '../../../store/slice/ClientsSlice';

import { LinksContainer, Modal, ModalCancel, ModalClose, ModalContainer, ModalText } from './index.style';
import { closeModalSvg } from '../modal.svg';

export const ModalSearch = () => {
  const [page, setPage] = useState<number>(1);

  const allClients = useTypeSelector((state) => state.clientReducer.allClients);
  const client = useTypeSelector((state) => state.searchClient.client);
  const { closeModal, clearSearch } = searchClientSlice.actions;
  const { setFoundClient } = clientSlice.actions;
  const dispatch = useTypeDispatch();

  const handleClickClose = () => {
    dispatch(closeModal());
  };

  const handleClickClearSearchLink = (isOpenTable: boolean) => {
    dispatch(clearSearch());

    if (isOpenTable && client) {
      dispatch(setFoundClient(client));
    }
  };

  useEffect(() => {
    let page = 1;

    allClients.forEach((clientInArr, index) => {
      if (client?.id === clientInArr.id) {
        page = Math.ceil((index + 1) / 5);
      }
    });

    setPage(page);
  }, []);

  return (
    <ModalContainer>
      <Modal>
        <ModalClose onClick={(e) => handleClickClose()}>{closeModalSvg}</ModalClose>
        <ModalText>Пожалуйста, выберите где показать клииента,в таблице или в карточке клиента</ModalText>
        <LinksContainer>
          <Link to={`/crm/${page}`} onClick={(e) => handleClickClearSearchLink(true)}>
            в таблице
          </Link>
          <Link to={`/crm/${page}/client/${client?.id}`} onClick={(e) => handleClickClearSearchLink(false)}>
            в вкладке
          </Link>
        </LinksContainer>
        <ModalCancel onClick={handleClickClose}>Отмена</ModalCancel>
      </Modal>
    </ModalContainer>
  );
};
