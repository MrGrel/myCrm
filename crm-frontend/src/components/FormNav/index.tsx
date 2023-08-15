import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { searchingClient } from '../../api/apiClients';

import { DarkContainer, Form, Input } from './index.style';
import { ButtonsSearch } from './buttonsSearch';

import { IClient } from '../../types/CrmTypes';
import { useTypeSelector } from '../../hooks/redux';

interface IFrom {
  search: string;
}

export const FormNav = () => {
  const client = useTypeSelector((state) => state.searchClient.client);

  const [controller, setController] = useState<AbortController>(new AbortController());
  const [clients, setClients] = useState<IClient[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [isOpenDark, setIsOpenDark] = useState<boolean>(false);

  const { register, handleSubmit, setValue } = useForm<IFrom>();

  const _onSubmit = () => {};

  const handleClickInput = () => {
    setIsOpenDark(true);
  };

  const handleClickDark = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      setIsOpenDark(false);
      controller.abort();
      setError('');
      setClients([]);
      setIsLoading(false);
      setValue('search', '');
    }
  };

  useEffect(() => {
    if (client === null) {
      setIsOpenDark(false);
      setClients([]);
      setValue('search', '');
    }
  }, [client]);

  return (
    <>
      <Form onSubmit={handleSubmit(_onSubmit)}>
        <Input
          placeholder="Введите запрос"
          {...register('search', {
            onChange: (e) => {
              controller.abort();
              setError('');
              setClients([]);

              const value = e.currentTarget.value.trim();
              const newController = new AbortController();
              const signal = newController.signal;

              if (!value) {
                setClients([]);
                return;
              }

              setIsLoading(true);

              searchingClient(value, signal)
                .then((data) => {
                  if (data) {
                    if (data.length === 0) {
                      throw new Error('Клиенты не найдены');
                    }
                    setClients(data);
                  } else {
                  }
                })
                .catch((error) => {
                  if (error?.message && error?.message !== 'The user aborted a request.') {
                    setError(error.message);
                  }
                })
                .finally(() => {
                  setIsLoading(false);
                });

              setController(newController);
            },
          })}
          onClick={handleClickInput}
        />
        <ButtonsSearch clients={clients} isLoading={isLoading} error={error} />
      </Form>
      {isOpenDark && <DarkContainer onClick={(e) => handleClickDark(e)} />}
    </>
  );
};
