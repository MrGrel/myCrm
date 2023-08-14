import { useState } from 'react';
import { IFunContact } from '../../../types/CrmTypes';
import {
  ContactPopUp,
  TextContactPopUp,
  LinkContactPopUp,
  ContactContainer,
  TdItemContact,
  ConatactButtonMore,
} from '../index.style';
import { phoneSvg, mailSvg, facebookSvg, vkSvg, otherContactSvg } from '../TableCrmSvg';

export const TdCrmContacts = ({ contacts }: IFunContact) => {
  const [isActiveContact, setIsActiveContact] = useState<boolean>(false);
  const [timerActiveContact, setTimerActiveContact] = useState<NodeJS.Timeout | null>(null);
  const [idActivePopUpContacts, setIdActivePopUpContacts] = useState<number>(0);
  const [timerPopUp, setTimerPopUp] = useState<NodeJS.Timeout | null>(null);

  const contactElements = (): JSX.Element[] => {
    let contactsElement: JSX.Element[] = [];

    for (let i = 0; i < contacts.length; i++) {
      const contact = contacts[i];
      const idPopUp = i + 1;
      const popUp = (
        <ContactPopUp
          active={idPopUp === idActivePopUpContacts}
          onMouseEnter={(e) => handleEnterPopUp()}
          onMouseLeave={(e) => handleLeavePopUp()}
        >
          <TextContactPopUp>{`${contact.type}:  `}</TextContactPopUp>
          <LinkContactPopUp href={`https://yandex.ru/search/?text=${contact.value}`}>{contact.value}</LinkContactPopUp>
        </ContactPopUp>
      );

      const popUpPhone = (
        <ContactPopUp
          active={idPopUp === idActivePopUpContacts}
          onMouseEnter={(e) => handleEnterPopUp()}
          onMouseLeave={(e) => handleLeavePopUp()}
        >
          <TextContactPopUp>{contact.value}</TextContactPopUp>
        </ContactPopUp>
      );

      if (i === 4 && contacts.length > 4 && !isActiveContact) {
        contactsElement.push(
          <ContactContainer
            key={`${i}contact`}
            onMouseEnter={(e) => handleEnterContact(idPopUp)}
            onMouseLeave={(e) => handleLeaveContact()}
          >
            <ConatactButtonMore onClick={(e) => handleClickOpenAllContacts()}>{contacts.length - i}</ConatactButtonMore>
          </ContactContainer>
        );
        break;
      }

      switch (contact.type) {
        case 'Телефон':
          contactsElement.push(
            <ContactContainer
              key={`${i}contact`}
              onMouseEnter={(e) => handleEnterContact(idPopUp)}
              onMouseLeave={(e) => handleLeaveContact()}
            >
              {popUpPhone}
              {phoneSvg}
            </ContactContainer>
          );
          break;
        case 'Email':
          contactsElement.push(
            <ContactContainer
              key={`${i}contact`}
              onMouseEnter={(e) => handleEnterContact(idPopUp)}
              onMouseLeave={(e) => handleLeaveContact()}
            >
              {popUp}
              {mailSvg}
            </ContactContainer>
          );
          break;
        case 'Facebook':
          contactsElement.push(
            <ContactContainer
              key={`${i}contact`}
              onMouseEnter={(e) => handleEnterContact(idPopUp)}
              onMouseLeave={(e) => handleLeaveContact()}
            >
              {popUp}
              {facebookSvg}
            </ContactContainer>
          );
          break;
        case 'VK':
          contactsElement.push(
            <ContactContainer
              key={`${i}contact`}
              onMouseEnter={(e) => handleEnterContact(idPopUp)}
              onMouseLeave={(e) => handleLeaveContact()}
            >
              {popUp}
              {vkSvg}
            </ContactContainer>
          );
          break;
        default:
          contactsElement.push(
            <ContactContainer
              key={`${i}contact`}
              onMouseEnter={(e) => handleEnterContact(idPopUp)}
              onMouseLeave={(e) => handleLeaveContact()}
            >
              {popUp}
              {otherContactSvg}
            </ContactContainer>
          );
          break;
      }
    }
    return contactsElement;
  };

  const handleClickOpenAllContacts = (): void => {
    setIsActiveContact(true);
  };

  const handleEnterContact = (idPopUp: number): void => {
    if (timerActiveContact !== null) {
      clearTimeout(timerActiveContact);
      setTimerActiveContact(null);
    }
    if (timerPopUp !== null) {
      clearTimeout(timerPopUp);
      setTimerPopUp(null);
    }
    setIdActivePopUpContacts(idPopUp);
  };

  const handleLeaveContact = (): void => {
    setTimerPopUp(
      setTimeout(() => {
        setIdActivePopUpContacts(0);
      }, 1000)
    );
  };

  const handleEnterPopUp = (): void => {
    if (timerPopUp !== null) {
      clearTimeout(timerPopUp);
      setTimerPopUp(null);
    }
  };

  const handleLeavePopUp = (): void => {
    setIdActivePopUpContacts(0);
  };

  const handleEnterTdContacts = (): void => {
    if (timerActiveContact !== null) {
      clearTimeout(timerActiveContact);
      setTimerActiveContact(null);
    }
  };

  const handleLeaveTdContacts = (): void => {
    setTimerActiveContact(
      setTimeout(() => {
        setIsActiveContact(false);
      }, 1000)
    );
  };

  return (
    <TdItemContact onMouseEnter={(e) => handleEnterTdContacts()} onMouseLeave={(e) => handleLeaveTdContacts()}>
      {contactElements()}
    </TdItemContact>
  );
};
