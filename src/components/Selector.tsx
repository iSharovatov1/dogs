import React, { memo, ReactElement } from 'react';

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';

interface ISelecterProps {
  fields: any[],
  value: number,
  label: string,
  handleChange: () => void,
}

function Selector({
  fields,
  value,
  label,
  handleChange,
}: ISelecterProps): ReactElement {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        label={label}
        onChange={handleChange}
      >
        {fields.map((item: String, index: number) => (
          <MenuItem value={index} key={index}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default memo(Selector);
