import React, { memo, ReactElement } from 'react';

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';

interface ISelectorProps {
  fields: string[],
  value: number,
  label: string,
  handleChange: (item: any, index: number) => void,
}

function Selector({
  fields,
  value,
  label,
  handleChange,
}: ISelectorProps): ReactElement {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        disabled={!fields.length}
        value={value}
        label={label}
        onChange={handleChange}
      >
        {fields.map((item: string, index: number) => (
          <MenuItem value={index} key={index}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default memo(Selector);
