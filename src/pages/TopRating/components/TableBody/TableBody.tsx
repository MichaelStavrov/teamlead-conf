import { FC } from 'react';
import { flexRender, Table } from '@tanstack/react-table';
import { UiRating } from 'src/types';
import styles from './TableBody.module.scss';

interface TableBodyProps {
  table: Table<UiRating>;
}

const TableBody: FC<TableBodyProps> = ({ table }) => {
  return (
    <tbody>
      {table.getRowModel().rows.map((row) => {
        return (
          <tr className={styles.row} key={row.id}>
            {row.getVisibleCells().map((cell) => {
              return (
                <td
                  className={styles.cell}
                  key={cell.id}
                  title={cell.column.id === 'name' ? (cell.getValue() as string) : ''}
                >
                  {['id', 'score'].includes(cell.column.id) ? (
                    <div style={{ width: 40 }}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </div>
                  ) : (
                    <>{flexRender(cell.column.columnDef.cell, cell.getContext())}</>
                  )}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
