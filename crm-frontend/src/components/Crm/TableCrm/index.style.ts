import styled from '@emotion/styled';
import IMAGES from './images/IMAGES';
import { IOpacityPopup, IColorSortBtn } from '../../../types/CrmTypes';

interface ITableLoadingorError {
  isLoadingOrError: boolean;
}

export const TableContainer = styled.div<ITableLoadingorError>`
  display: ${(props) => (props.isLoadingOrError ? 'flex' : 'block')};
  width: 100%;
  justify-content: center;
  align-items: center;
  min-height: ${(props) => (props.isLoadingOrError ? '400px' : '293.33px')};
  margin-bottom: 30px;
  background: #fff;
`;

export const TableError = styled.p`
  margin: 0;
  margin-top: 10px;
  padding: 0;
  font-weight: 500;
  font-size: 40px;
  line-height: 32px;
  color: red;
`;

export const TableList = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 10px 20px;
  border-bottom: 1px solid #c8c5d1;
  list-style: none;
`;

export const TableLink = styled.button`
  width: 0;
  height: 0;
  padding: 0;
  background: none;
  border: none;
  font-size: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 100%;
    cursor: pointer;
  }

  &::before:hover(:not(:focus-visible)) {
    outline: none;
  }

  &::before:focus {
    outline: none;
  }

  &::before:active(:not(:focus-visible)) {
    outline: none;
  }
`;

export const TdItemID = styled.li`
  align-items: center;
  max-width: 70px;
  width: 100%;
  padding: 11px 10px 11px 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #b0b0b0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TdItemIDReverse = styled.li`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 70px;
  width: 100%;
  padding: 11px 10px 11px 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #b0b0b0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TdItemFIO = styled.li`
  align-items: center;
  max-width: 234px;
  width: 100%;
  padding-right: 14px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #333333;
`;

export const TdItemDateTime = styled.li`
  display: flex;
  gap: 10px;
  align-content: center;
  max-width: 137px;
  padding-right: 28px;
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
`;

export const TextDMY = styled.p`
  color: #333333;
`;

export const TextTime = styled.p`
  color: #b0b0b0;
`;

export const TdItemContact = styled.li`
  display: flex;
  gap: 7px;
  max-width: 150px;
  padding-right: 42px;
  width: 100%;
`;

export const ContactContainer = styled.div`
  position: relative;
`;

export const ConatactButtonMore = styled.button`
  width: 16px;
  height: 16px;
  border: 1px solid #9873ff;
  border-radius: 50%;
  font-weight: 600;
  font-size: 8px;
`;

export const ContactPopUp = styled.div<IOpacityPopup>`
  position: absolute;
  top: -46px;
  left: -58.5px;
  display: flex;
  justify-content: center;
  width: 133px;
  padding: 8px 6px 16px;
  background-image: url(${IMAGES.popup});
  background-position: top center;
  background-size: 100% 100%;
  visibility: ${(props) => (props.active === true ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.active === true ? 1 : 0)};
  z-index: 10;
  transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;

export const TextContactPopUp = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
`;

export const LinkContactPopUp = styled.a`
  max-width: 100px;
  padding-left: 1em;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #9873ff;
  text-decoration: underline;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TdItemAction = styled.li`
  display: flex;
  justify-content: space-between;
  max-width: 189px;
  width: 100%;
`;

export const ChangeButton = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0;
  background: none;
  border: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #333333;
  cursor: pointer;

  svg {
    margin-right: 0.5em;
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0;
  background: none;
  border: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #333333;
  cursor: pointer;

  svg {
    margin-right: 0.5em;
  }
`;

export const BtnSort = styled.button<IColorSortBtn>`
  padding: 0;
  background: none;
  border: none;
  color: ${(props) => (props.active === true ? '#9873ff' : '#b0b0b0')};
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  svg {
    margin-right: 2px;
  }
`;

export const TextBtnSort = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  margin-right: 2px;
`;

export const TextBtnFIO = styled.span`
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
  color: #9873ff;
`;

export const TextTHead = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  margin-right: 2px;
  color: #b0b0b0;
`;

////////////// PAGINATION //////////////////////////////////
interface IPagination {
  isActive: boolean;
}

export const ListLinksPagination = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ItemLinkPagination = styled.li<IPagination>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  padding: 5px;
  border: 1px solid #b0b0b0;
  border-left: none;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: ${(props) => (props.isActive ? '#9873ff' : '#333')};
  transition: color 0.3s ease-in-out;

  &:first-of-type {
    border-left: 1px solid #b0b0b0;
  }

  & a {
    text-decoration: none;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }
  }

  & p {
    margin: 0;
  }

  &:hover:not(:focus-visible) {
    color: #9873ff;
  }

  &:focus {
    color: #9873ff;
  }

  &:active:not(:focus-visible) {
    color: #9873ff;
  }
`;
