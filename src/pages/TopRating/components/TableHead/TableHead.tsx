import { FC, ReactNode, useState } from 'react';
import { flexRender, Table } from '@tanstack/react-table';
import cn from 'classnames';
import searchIcon from 'assets/icons/search-icon.svg';
import sortIcon from 'assets/icons/sort-icon.svg';
import arrowIcon from 'assets/icons/arrow.svg';
import { UiRating } from 'src/types';
import Filter from '../Filter';
import styles from './TableHead.module.scss';

interface TableHeadProps {
  table: Table<UiRating>;
}

const TableHead: FC<TableHeadProps> = ({ table }) => {
  const [isVisibleFilter, setIsVisibleFilter] = useState(false);

  const iconsBySort: Record<string, ReactNode> = {
    asc: <img className={styles.sortIcon} src={arrowIcon} />,
    desc: <img className={cn(styles.sortIcon, styles.rotate)} src={arrowIcon} />,
  };

  return (
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <th key={header.id} colSpan={header.colSpan}>
                {header.isPlaceholder ? null : (
                  <div className={styles.cellHead}>
                    <div style={{ display: 'flex' }}>
                      <div {...{ onClick: header.column.getToggleSortingHandler() }}>
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {iconsBySort[header.column.getIsSorted() as string] ?? (
                          <img className={styles.sortIcon} src={sortIcon} />
                        )}
                      </div>
                      {header.column.getCanFilter() && (
                        <button
                          className={styles.searchBtn}
                          onClick={() => setIsVisibleFilter((prev) => !prev)}
                        >
                          <div className={styles.searchIconWrapper}>
                            <img className={styles.searchIcon} src={searchIcon} alt="search name" />
                            {isVisibleFilter && <span className={styles.closeIcon}>/</span>}
                          </div>
                        </button>
                      )}
                    </div>
                    {header.column.getCanFilter() && isVisibleFilter && (
                      <div>
                        <Filter column={header.column} placeholder="Введите имя" />
                      </div>
                    )}
                    {!header.column.getCanFilter() && isVisibleFilter && (
                      <div className={styles.stub} />
                    )}
                  </div>
                )}
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
};

export default TableHead;
