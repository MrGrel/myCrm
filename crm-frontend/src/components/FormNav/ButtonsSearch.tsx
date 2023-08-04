import { Loader } from '../Loader/index.style';
import { ButtonsContainer, ButtonSearch, ErrorMessage, LoaderAndErrorContainer } from './index.style';

import { IClient } from '../../types/CrmTypes';

export interface PropsButton {
  clients: IClient[];
  isLoading: boolean;
  error: string;
}

export const ButtonsSearch = ({ clients, isLoading, error }: PropsButton) => {
  const handleClickOpenClient = (client: IClient) => {};

  return (
    <>
      {clients.length !== 0 && !isLoading && !error && (
        <ButtonsContainer>
          {clients.map((client) => (
            <ButtonSearch
              key={client.id + 'search'}
              onClick={(e) => handleClickOpenClient(client)}
            >{`${client.surname} ${client.name} ${client.lastName}`}</ButtonSearch>
          ))}
        </ButtonsContainer>
      )}
      {isLoading && (
        <LoaderAndErrorContainer>
          <Loader wh={32} color="#67a4ff" />
        </LoaderAndErrorContainer>
      )}
      {error && (
        <LoaderAndErrorContainer>
          <ErrorMessage>{error !== '' ? error : 'Клиенты не найдены '}</ErrorMessage>
        </LoaderAndErrorContainer>
      )}
    </>
  );
};
