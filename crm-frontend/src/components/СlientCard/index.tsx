import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTypeDispatch, useTypeSelector } from '../../hooks/redux';

import { modalSlice } from '../../store/slice/modal.slice';
import { getClient } from '../../store/slice/actionCreatot.api';

import { Title } from '../Container/index.style';
import IMG from './assets/img';
import {
  TitleContainer,
  ButtonBack,
  ButtonContainer,
  ButtonChange,
  ButtonRemove,
  CardContainer,
  CardImg,
  CardDescContainer,
  CardDesc,
  ContactList,
  ContactItem,
  ContactType,
  ContactDesc,
  LoaderContainer,
} from './index.style';
import { clientCardSlice } from '../../store/slice/clientCard.slice';
import { Loader } from '../Loader/index.style';

export const Card = () => {
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);

  const { client, error, isLoading } = useTypeSelector((state) => state.clientCardReducer);
  const { isRemove, isReloadTable } = useTypeSelector((state) => state.modalReducer);
  const { removeClientCard } = clientCardSlice.actions;
  const { openModal } = modalSlice.actions;
  const dispatch = useTypeDispatch();

  const navigate = useNavigate();
  const { id } = useParams();

  const handleClickBack = () => {
    navigate(-1);
  };

  const handleClickChange = () => {
    dispatch(openModal({ client: client, isSubmiting: false }));
  };

  const handleClickRemove = () => {
    dispatch(openModal({ client: client, isSubmiting: true }));
  };

  useEffect(() => {
    if (!isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    if (isRemove) {
      dispatch(removeClientCard());
      navigate(-1);
    }

    if (client) {
      dispatch(getClient(client.id));
    }
  }, [isReloadTable]);

  useEffect(() => {
    if (client === null && id) {
      dispatch(getClient(id));
    }
  }, []);

  return (
    <>
      {isLoading || error ? (
        error ? (
          <LoaderContainer>
            <Loader wh={75} color="#9873ff" />
          </LoaderContainer>
        ) : (
          <LoaderContainer>
            <Loader wh={75} color="#9873ff" />
          </LoaderContainer>
        )
      ) : (
        <>
          <TitleContainer>
            <Title>{`${client?.surname} ${client?.name} ${client?.lastName}`}</Title>
            <ButtonBack onClick={handleClickBack}>Назад</ButtonBack>
            <ButtonContainer>
              <ButtonChange onClick={handleClickChange}>Изменить</ButtonChange>
              <ButtonRemove onClick={handleClickRemove}>Удалить</ButtonRemove>
            </ButtonContainer>
          </TitleContainer>

          <CardContainer>
            <CardImg src={IMG.avatar} alt="аватарка клиента" />
            <CardDescContainer>
              <CardDesc>
                Здесь могло бы быть какое то описание к клиенту Здесь могло бы быть какое то описание к клиенту Здесь
                могло бы быть какое то описание к клиенту
              </CardDesc>
              <ContactList>
                {client?.contacts.length &&
                  client.contacts.map((contact) => (
                    <ContactItem>
                      <ContactType>{contact.type}:</ContactType>
                      <ContactDesc>{contact.value}</ContactDesc>
                    </ContactItem>
                  ))}
              </ContactList>
            </CardDescContainer>
          </CardContainer>
        </>
      )}
    </>
  );
};
