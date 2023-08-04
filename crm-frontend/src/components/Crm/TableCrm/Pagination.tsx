import { Link } from 'react-router-dom';
import { ItemLinkPagination, ListLinksPagination } from './index.style';
import { useTypeSelector } from '../../../hooks/redux';

export const Pagination = () => {
  const { allPages, activePage } = useTypeSelector((state) => state.clientReducer);

  const funPagination = () => {
    const arr = [];
    let i = 0;
    if (allPages <= 5) {
      while (i < allPages) {
        i++;
        const item = (
          <ItemLinkPagination isActive={i === activePage} key={i}>
            <Link to={`/crm/${i}`}>{i}</Link>
          </ItemLinkPagination>
        );
        arr.push(item);
      }
    }

    if (allPages - activePage > 2 && activePage > 3) {
      while (i < allPages) {
        i++;
        let item = (
          <ItemLinkPagination isActive={i === activePage} key={i}>
            <Link to={`/crm/${i}`}>{i}</Link>
          </ItemLinkPagination>
        );

        if (i === 4) {
          i = activePage - 2;
          item = (
            <ItemLinkPagination isActive={false} key={i}>
              <p>...</p>
            </ItemLinkPagination>
          );
        }

        if (i === activePage + 2) {
          i = allPages - 1;
          item = (
            <ItemLinkPagination isActive={false} key={i}>
              <p>...</p>
            </ItemLinkPagination>
          );
        }

        arr.push(item);
      }
    }

    if (allPages - activePage > 2 && activePage <= 3) {
      while (i < allPages) {
        i++;
        let item = (
          <ItemLinkPagination isActive={i === activePage} key={i}>
            <Link to={`/crm/${i}`}>{i}</Link>
          </ItemLinkPagination>
        );

        if (i === activePage + 3) {
          i = allPages - 1;
          item = (
            <ItemLinkPagination isActive={false} key={i}>
              <p>...</p>
            </ItemLinkPagination>
          );
        }
        arr.push(item);
      }
    }

    if (allPages - activePage <= 2 && activePage > 3) {
      while (i < allPages) {
        i++;

        let item = (
          <ItemLinkPagination isActive={i === activePage} key={i}>
            <Link to={`/crm/${i}`}>{i}</Link>
          </ItemLinkPagination>
        );

        if (i === 3) {
          i = activePage - 2;
          item = (
            <ItemLinkPagination isActive={false} key={i}>
              <p>...</p>
            </ItemLinkPagination>
          );
        }

        arr.push(item);
      }
    }

    return arr;
  };

  return <ListLinksPagination>{funPagination()}</ListLinksPagination>;
};
