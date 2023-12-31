import { useFieldArray, useForm } from 'react-hook-form';
import {
  ModalContainer,
  Modal,
  ModalTitleContainer,
  ModalTitle,
  ModalTitleId,
  ModalForm,
  ModalFIOFieldset,
  ModalInputContainer,
  ModalLegend,
  ModalRequired,
  ModalInput,
  ModalAddContact,
  ModalCLoseContact,
  ModalContactInput,
  ModalContactsFieldset,
  ModalLabelContact,
  ModalOption,
  ModalSubmit,
  ModalSelect,
  ModalContainerContactInputs,
  ModalContactTypeInput,
  ModalError,
  ModalCloseBtn,
  ModalErrorContacts,
} from './index.style';

import { IFormValues } from '../../../types/CrmTypes';
import { useEffect } from 'react';
import { useTypeDispatch, useTypeSelector } from '../../../hooks/redux';
import { addNewContactSvg, closeModalSvg, removeContactSvg } from '../modal-svg';
import { patchClient, postClient } from '../../../store/slice/actionCreatot.api';
import { modalSlice } from '../../../store/slice/modal.slice';
import { Loader } from '../../Loader/index.style';

export const ModalCrm = () => {
  const { client, error, modalIsLoading, isOpenModal } = useTypeSelector((state) => state.modalReducer);
  const { closeAllModal } = modalSlice.actions;
  const dispatch = useTypeDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    watch,
  } = useForm<IFormValues>({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      surname: '',
      lastName: '',
      contacts: [{ type: 'Телефон', value: '' }],
    },
  });
  const { fields, append, remove, replace } = useFieldArray({
    name: 'contacts',
    control,
  });

  watch();

  const onSubmit = (data: IFormValues) => {
    const fetchData = {
      id: client?.id ?? '',
      client: { ...data },
    };
    if (client !== null) {
      dispatch(patchClient(fetchData));
    } else {
      dispatch(postClient(fetchData));
    }
  };

  const handleOnCloseModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      dispatch(closeAllModal());
    }
  };

  useEffect(() => {
    if (client !== null) {
      setValue('name', client.name);
      setValue('surname', client.surname);
      setValue('lastName', client.lastName);
      replace([...client.contacts]);
    }
  }, []);

  return (
    <ModalContainer isOpenModal={isOpenModal} onClick={(e) => handleOnCloseModal(e)}>
      <Modal>
        <ModalCloseBtn onClick={(e) => dispatch(closeAllModal())}>{closeModalSvg}</ModalCloseBtn>
        <ModalTitleContainer>
          <ModalTitle>{client !== null ? 'Изменить данные' : 'Добавить клиента'}</ModalTitle>
          {client !== null && <ModalTitleId>{`id: ${client.id}`}</ModalTitleId>}
        </ModalTitleContainer>
        <ModalForm onSubmit={handleSubmit(onSubmit)}>
          <ModalFIOFieldset>
            <ModalInputContainer>
              <ModalLegend>
                Имя
                <ModalRequired>*</ModalRequired>
              </ModalLegend>
              <ModalInput
                alert={errors.name !== undefined}
                placeholder="Имя"
                {...register('name', {
                  required: 'Обязательное поле для заполнения',
                  pattern: {
                    value: /^[А-Яа-я]/gi,
                    message: 'В этом поле могут быть только русские буквы',
                  },
                  onBlur: (e) => {
                    const value: string = e.target.value;
                    e.target.value = (
                      value.slice(0, 1).toUpperCase() + value.slice(1, value.length).toLowerCase()
                    ).trim();
                  },
                })}
              />
              {errors.name && <ModalError>{errors.name.message}</ModalError>}
            </ModalInputContainer>
            <ModalInputContainer>
              <ModalLegend>
                Фамилия
                <ModalRequired>*</ModalRequired>
              </ModalLegend>
              <ModalInput
                alert={errors.surname !== undefined}
                placeholder="Фамилия"
                {...register('surname', {
                  required: 'Обязательное поле для заполнения',
                  pattern: {
                    value: /^[А-Яа-я]/gi,
                    message: 'В этом поле могут быть только русские буквы',
                  },
                  onBlur: (e) => {
                    const value: string = e.target.value;
                    e.target.value = (
                      value.slice(0, 1).toUpperCase() + value.slice(1, value.length).toLowerCase()
                    ).trim();
                  },
                })}
              />
              {errors.surname && <ModalError>{errors.surname.message}</ModalError>}
            </ModalInputContainer>
            <ModalInputContainer>
              <ModalLegend>Отчество</ModalLegend>
              <ModalInput
                alert={errors.lastName !== undefined}
                placeholder="Отчество"
                {...register('lastName', {
                  required: false,
                  pattern: {
                    value: /^[А-Яа-я]/gi,
                    message: 'В этом поле могут быть только русские буквы',
                  },
                  onBlur: (e) => {
                    const value: string = e.target.value;
                    e.target.value = (
                      value.slice(0, 1).toUpperCase() + value.slice(1, value.length).toLowerCase()
                    ).trim();
                  },
                })}
              />
              {errors.lastName && <ModalError>{errors.lastName.message}</ModalError>}
            </ModalInputContainer>
          </ModalFIOFieldset>
          <ModalContactsFieldset>
            <ModalContainerContactInputs>
              {fields.map((field, index) => {
                const isOneOfSocialMedia =
                  field.type === 'Телефон' ||
                  field.type === 'Vk' ||
                  field.type === 'Email' ||
                  field.type === 'Facebook';

                return (
                  <ModalLabelContact
                    key={field.id}
                    alert={errors?.contacts !== undefined && errors?.contacts[index] !== undefined}
                  >
                    {isOneOfSocialMedia ? (
                      <ModalSelect
                        {...register(`contacts.${index}.type`, {
                          onChange: (e) => {
                            field.type = e.target.value;
                            field.value = '';
                          },
                        })}
                      >
                        <ModalOption>Телефон</ModalOption>
                        <ModalOption>Vk</ModalOption>
                        <ModalOption>Email</ModalOption>
                        <ModalOption>Facebook</ModalOption>
                        <ModalOption value={''}>Доп. связь</ModalOption>
                      </ModalSelect>
                    ) : (
                      <ModalContactTypeInput
                        {...register(`contacts.${index}.type`, {
                          required: true,
                        })}
                        placeholder='"Telegram" и т.д.'
                      />
                    )}
                    <ModalContactInput
                      type={field.type === 'Телефон' ? 'tel' : 'text'}
                      value={field.value}
                      {...register(`contacts.${index}.value`, {
                        required: 'Это поле обязательно для заполнения',
                        validate: {
                          phoneBegining: (value) => {
                            if (field.type === 'Телефон') {
                              return value.match(/^\+7/) !== null || 'Номер должен начинаться с +7';
                            }
                          },
                          phoneLength: (value) => {
                            if (field.type === 'Телефон') {
                              return value.length === 12 || 'Номер должен содержать 12 символов включая "+"';
                            }
                          },
                          phoneNumberValidity: (value) => {
                            if (field.type === 'Телефон') {
                              return value.match(/^\+([0-9]){10}/) !== null || 'Номер должен состоять только из цифр';
                            }
                          },
                          email: (value) => {
                            if (field.type === 'Email') {
                              return value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) !== null || 'Неправильный email';
                            }
                          },
                        },
                        onChange: (e) => {
                          field.value = e.target.value;
                        },
                      })}
                      placeholder={
                        field.type === 'Телефон'
                          ? '+79990003322'
                          : field.type === 'Email'
                          ? 'Введите почту'
                          : 'Введите ссылку или логин'
                      }
                    />
                    {fields.length > 1 && (
                      <ModalCLoseContact
                        type="button"
                        onClick={() => {
                          remove(index);
                        }}
                      >
                        {removeContactSvg}
                      </ModalCLoseContact>
                    )}
                    {errors?.contacts && errors?.contacts[index] && (
                      <ModalErrorContacts>{errors?.contacts[index]?.value?.message}</ModalErrorContacts>
                    )}
                  </ModalLabelContact>
                );
              })}
            </ModalContainerContactInputs>

            {fields.length < 10 && (
              <ModalAddContact
                type="button"
                onClick={() => {
                  append({
                    type: 'Телефон',
                    value: '',
                  });
                }}
              >
                {addNewContactSvg}
                Добавить контакт
              </ModalAddContact>
            )}
          </ModalContactsFieldset>
          <ModalSubmit>{modalIsLoading && <Loader wh={16} color="#fff" />}Сохранить</ModalSubmit>
          {error !== '' && <ModalError>{error}</ModalError>}
        </ModalForm>
      </Modal>
    </ModalContainer>
  );
};
