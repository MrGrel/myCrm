import { useEffect, useState } from 'react';
import { useTypeDispatch, useTypeSelector } from '../../../hooks/redux';
import { useNavigate, useParams } from 'react-router-dom';

import { modalSlice } from '../../../store/slice/ModalSlice';
import { getClients } from '../../../store/slice/actionCreatot';
import { clientCardSlice } from '../../../store/slice/clientCardSlice';

import { IClient, TPayloadKeyContact } from '../../../types/CrmTypes';

import {
  TableList,
  TdItemDateTime,
  TdItemFIO,
  TdItemID,
  TdItemAction,
  TdItemContact,
  TableContainer,
  ChangeButton,
  RemoveButton,
  BtnSort,
  TextBtnSort,
  TextBtnFIO,
  TextTHead,
  TableError,
  TdItemIDReverse,
} from './index.style';

import { arrowBottomSvg, arrowTopSvg, changeSvg, removeClientSvg } from './TableCrmSvg';
import { TdCrmContacts } from './TdCrmContacts';
import { TdCrmCreatedAndUpdatedTime } from './TdCrmCreatedAndUpdatedTime';
import { clientSlice } from '../../../store/slice/ClientsSlice';

import { TableLink } from './index.style';
import { Loader } from '../../Loader/index.style';

export const TableCrm = () => {
  const [isFirstRender, setIsFirrstRender] = useState<boolean>(true);

  const { clients, isLoading, error } = useTypeSelector((state) => state.clientReducer);
  const { clietToAscending, clietToDescending, setActivePage } = clientSlice.actions;
  const reload = useTypeSelector((state) => state.modalReducer.isReloadTable);
  const { openModal } = modalSlice.actions;
  const { putClientCard } = clientCardSlice.actions;
  const dispatch = useTypeDispatch();

  const navigate = useNavigate();
  const { page } = useParams();

  const [activeButton, setActiveButton] = useState<TPayloadKeyContact | ''>('');
  const [isSortingDirection, setIsSortingDirection] = useState<boolean>(true);

  const handleClickSort = (nameSort: TPayloadKeyContact): void => {
    setActiveButton(nameSort);

    if (isSortingDirection === true && activeButton === nameSort) {
      setIsSortingDirection(false);
    } else {
      setIsSortingDirection(true);
    }
  };

  const handleClickButtonMoveToCardPage = (client: IClient) => {
    dispatch(putClientCard(client));
    navigate(`client/:${client.id}/`);
  };

  const handleClickChange = (client: IClient) => {
    dispatch(openModal({ client: client, isSubmiting: false }));
  };

  const handleClickRemove = (client: IClient) => {
    dispatch(openModal({ client: client, isSubmiting: true }));
  };

  useEffect(() => {
    if (!isFirstRender) {
      dispatch(getClients());
    } else {
      setIsFirrstRender(false);
    }
  }, [reload]);

  useEffect(() => {
    if (activeButton !== '') {
      if (isSortingDirection) {
        dispatch(clietToAscending(activeButton));
      } else {
        dispatch(clietToDescending(activeButton));
      }
    }
  }, [activeButton, isSortingDirection]);

  useEffect(() => {
    if (clients.length === 0) {
      dispatch(getClients());
    }
  }, []);

  useEffect(() => {
    dispatch(setActivePage(Number(page)));
  }, [page]);

  return (
    <>
      <TableList>
        <TdItemID>
          <BtnSort active={activeButton === 'id'} onClick={() => handleClickSort('id')}>
            <TextBtnSort>ID</TextBtnSort>
            {isSortingDirection && activeButton === 'id' ? arrowTopSvg : arrowBottomSvg}
          </BtnSort>
        </TdItemID>
        <TdItemFIO>
          <BtnSort active={activeButton === 'surname'} onClick={() => handleClickSort('surname')}>
            <TextBtnSort>Фамилия Имя Отчество</TextBtnSort>
            {isSortingDirection && activeButton === 'surname' ? arrowTopSvg : arrowBottomSvg}
            {isSortingDirection && activeButton === 'surname' ? (
              <TextBtnFIO>Я-А</TextBtnFIO>
            ) : (
              <TextBtnFIO>А-Я</TextBtnFIO>
            )}
          </BtnSort>
        </TdItemFIO>
        <TdItemDateTime>
          <BtnSort active={activeButton === 'createdAt'} onClick={() => handleClickSort('createdAt')}>
            <TextBtnSort> Дата и время создания</TextBtnSort>
            {isSortingDirection && activeButton === 'createdAt' ? arrowTopSvg : arrowBottomSvg}
          </BtnSort>
        </TdItemDateTime>
        <TdItemDateTime>
          <BtnSort active={activeButton === 'updatedAt'} onClick={() => handleClickSort('updatedAt')}>
            <TextBtnSort>Последние изменения</TextBtnSort>
            {isSortingDirection && activeButton === 'updatedAt' ? arrowTopSvg : arrowBottomSvg}
          </BtnSort>
        </TdItemDateTime>
        <TdItemContact>
          <TextTHead>Контакты</TextTHead>
        </TdItemContact>
        <TdItemAction>
          <TextTHead>Действия</TextTHead>
        </TdItemAction>
      </TableList>
      <TableContainer isLoadingOrError={error !== '' || isLoading}>
        {clients.length !== 0 &&
          !isLoading &&
          !error &&
          clients.map((client) => (
            <TableList key={client.id}>
              <TdItemIDReverse key={'0' + client.id}>
                <TableLink onClick={(e) => handleClickButtonMoveToCardPage(client)} />
                {client.id}
              </TdItemIDReverse>
              <TdItemFIO
                key={client.name + client.id}
              >{`${client.surname} ${client.name} ${client.lastName}`}</TdItemFIO>
              <TdCrmCreatedAndUpdatedTime
                created={client.createdAt}
                updated={client.updatedAt}
              ></TdCrmCreatedAndUpdatedTime>
              <TdCrmContacts key={client.contacts[0].value + client.id} contacts={client.contacts} />
              <TdItemAction>
                <ChangeButton key={'изменить' + client.id} onClick={(e) => handleClickChange(client)}>
                  {changeSvg}
                  изменить
                </ChangeButton>
                <RemoveButton key={'удалить' + client.id} onClick={(e) => handleClickRemove(client)}>
                  {removeClientSvg}
                  удалить
                </RemoveButton>
              </TdItemAction>
            </TableList>
          ))}
        {isLoading && <Loader wh={100} color="#9873ff" />}
        {error && <TableError>{error}</TableError>}
      </TableContainer>
    </>
  );
};
