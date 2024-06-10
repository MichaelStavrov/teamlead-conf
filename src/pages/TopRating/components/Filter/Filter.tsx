import { FC } from 'react';
import { Column } from '@tanstack/react-table';
import DebouncedInput from 'components/DebouncedInput';

interface FilterProps {
  column: Column<any, unknown>;
  placeholder?: string;
}

const Filter: FC<FilterProps> = ({ column, placeholder }) => {
  const columnFilterValue = column.getFilterValue();

  return (
    <DebouncedInput
      onChange={(value) => column.setFilterValue(value)}
      placeholder={placeholder}
      type="text"
      value={(columnFilterValue ?? '') as string}
      autoFocus
    />
  );
};

export default Filter;
