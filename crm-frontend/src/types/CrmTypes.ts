export interface IClient {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  surname: string;
  lastName: string;
  contacts: IContact[];
}

export interface IFunContact {
  contacts: IContact[];
}

export interface IContact {
  type: string;
  value: string;
}

//TableCrm

export interface IClientState {
  allPages: number;
  activePage: number;
  allClients: IClient[];
  clients: IClient[];
  foundClient: IClient | null;
  isLoading: boolean;
  error: string;
}

export interface IFunCreatedAndUpdatedTime {
  created: string;
  updated: string;
}

export interface IContact {
  type: string;
  value: string;
}

export type TPayloadKeyContact = 'id' | 'surname' | 'createdAt' | 'updatedAt';

//ModalCrm

export interface IModalState {
  client: IClient | null;
  isOpenModal: boolean;
  isOpenModalSubmit: boolean;
  modalIsLoading: boolean;
  isReloadTable: boolean;
  isRemove: boolean;
  error: string;
}

export interface IOpenModalPayLoad {
  client: IClient | null;
  isSubmiting: boolean;
}

export interface IFormValues {
  name: string;
  surname: string;
  lastName: string;
  contacts: IContact[];
}

//Api

export interface IFetchData {
  id: string;
  client: IFormValues;
}

export interface ISearchClient {
  value: string;
  signal: AbortSignal;
}

//Styles
export interface ILoader {
  wh: number;
  color: string;
}

export interface IColorSortBtn {
  active: boolean;
}

export interface IOpacityPopup {
  active: boolean;
}

export interface IOpenModal {
  isOpenModal: boolean;
}

export interface IStyleAlert {
  alert: boolean;
}
