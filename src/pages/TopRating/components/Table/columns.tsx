import { CellContext } from '@tanstack/react-table';
import { UiRating } from 'src/types';

export const columns = [
  {
    accessorKey: 'orderBy',
    header: 'Место',
    cell: (info: CellContext<UiRating, any>) => info.row.index + 1,
    enableColumnFilter: false,
  },
  {
    accessorKey: 'name',
    header: 'Имя',
    cell: (info: CellContext<UiRating, any>) => info.getValue(),
    meta: {
      filterVariant: undefined,
    },
  },

  {
    accessorKey: 'score',
    header: 'Баллы',
    cell: (info: CellContext<UiRating, any>) => info.getValue(),
    enableColumnFilter: false,
  },

  {
    accessorKey: 'time',
    header: 'Время',
    cell: (info: CellContext<UiRating, any>) => info.getValue(),
    enableColumnFilter: false,
  },
];
