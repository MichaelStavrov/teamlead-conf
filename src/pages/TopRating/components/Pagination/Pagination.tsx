import { FC } from 'react';
import { Table } from '@tanstack/react-table';
import cn from 'classnames';
import { UiRating } from 'src/types';
import arrow from 'assets/icons/pagination-arrow.svg';
import doubleArrow from 'assets/icons/double-arrow.svg';
import styles from './Pagination.module.scss';

interface PaginationProps {
  table: Table<UiRating>;
}

const Pagination: FC<PaginationProps> = ({ table }) => {
  return (
    <div className={styles.pagination}>
      <div className={styles.pages}>
        <span>Страница</span>
        <span>
          {table.getState().pagination.pageIndex + 1} из {table.getPageCount()}
        </span>
      </div>
      <div className={styles.controls}>
        <div className={styles.group}>
          <button
            className={styles.control}
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <img className={styles.doubleArrow} src={doubleArrow} alt="to first page" />
          </button>
          <button
            className={styles.control}
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <img className={styles.singleArrow} src={arrow} alt="to prev page" />
          </button>
        </div>
        <div className={styles.group}>
          <button
            className={styles.control}
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <img className={cn(styles.singleArrow, styles.rotate)} src={arrow} alt="to next page" />
          </button>
          <button
            className={styles.control}
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <img
              className={cn(styles.doubleArrow, styles.rotate)}
              src={doubleArrow}
              alt="to last page"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
