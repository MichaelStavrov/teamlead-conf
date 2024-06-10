import { FC, useState } from 'react';
import {
  RowData,
  getCoreRowModel,
  useReactTable,
  ColumnFiltersState,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  SortingState,
} from '@tanstack/react-table';
import { UiRating } from 'src/types';
import Pagination from '../Pagination';
import TableHead from '../TableHead';
import TableBody from '../TableBody';
import { columns } from './columns';
import styles from './Table.module.scss';

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData extends RowData, TValue> {
    filterVariant?: 'text' | 'range' | 'select';
  }
}

interface TableProps {
  data: UiRating[];
}

const Table: FC<TableProps> = ({ data }) => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    filterFns: {},
    state: {
      columnFilters,
      sorting,
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
    onSortingChange: setSorting,
  });

  const isEmptyTableData = table.getRowModel().rows.length === 0;
  const { pageSize } = table.getState().pagination;

  const displayPagination = !isEmptyTableData && data.length > pageSize;

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <TableHead table={table} />
        {isEmptyTableData ? (
          <tr>
            <td />
            <td>Ничего не найдено</td>
          </tr>
        ) : (
          <TableBody table={table} />
        )}
      </table>
      {displayPagination && <Pagination table={table} />}
    </div>
  );
};

export default Table;
