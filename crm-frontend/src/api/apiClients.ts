import { IClient, IFetchData } from '../types/CrmTypes';

export const gettingClients = async (): Promise<IClient[]> => {
  return await fetch('http://localhost:5000/api/clients').then((response) => {
    if (response.status === 404) {
      throw new Error('Клиенты не найдены');
    } else if (response.status >= 500) {
      throw new Error('Сервер сломался, попробуйте позже =С');
    }
    return response.json();
  });
};

export const gettingClient = async (id: string): Promise<IClient[]> => {
  return await fetch(`http://localhost:5000/api/clients/${id}`).then((response) => {
    if (response.status === 404) {
      throw new Error('Клиенты не найдены');
    } else if (response.status >= 500) {
      throw new Error('Сервер сломался, попробуйте позже =С');
    }
    return response.json();
  });
};

export const postingClient = async (data: IFetchData): Promise<void> => {
  return await fetch(`http://localhost:5000/api/clients`, {
    method: 'POST',
    body: JSON.stringify(data.client),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => {
    if (response.status === 404) {
      throw new Error('Клиенты не найдены');
    } else if (response.status >= 500) {
      throw new Error('Сервер сломался, попробуйте позже =С');
    }
  });
};

export const patchingClient = async (data: IFetchData): Promise<void> => {
  return await fetch(`http://localhost:5000/api/clients/${data.id}`, {
    method: 'PATCH',
    body: JSON.stringify(data.client),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => {
    if (response.status === 404) {
      throw new Error('Клиенты не найдены');
    } else if (response.status >= 500) {
      throw new Error('Сервер сломался, попробуйте позже =С');
    }
  });
};

export const deletingClient = async (id: string): Promise<void> => {
  return await fetch(`http://localhost:5000/api/clients/${id}`, {
    method: 'DELETE',
  }).then((response) => {
    if (response.status === 404) {
      throw new Error('Клиенты не найдены');
    } else if (response.status >= 500) {
      throw new Error('Сервер сломался, попробуйте позже =С');
    }
  });
};

export const searchingClient = async (value: string, signal: AbortSignal): Promise<void | IClient[]> => {
  return await fetch(`http://localhost:5000/api/clients?search=${value}`, {
    method: 'GET',
    signal: signal,
  }).then((response) => {
    console.log(response);

    if (response.status === 404) {
      throw new Error('Клиенты не найдены');
    } else if (response.status >= 500) {
      throw new Error('Сервер сломался, попробуйте позже =С');
    }

    return response.json();
  });
};
