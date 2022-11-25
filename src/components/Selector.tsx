import { memo, ReactElement } from 'react';

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';

interface ISelecterPtops {
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
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Age"
        onChange={handleChange}
      >
        {fields.map((item: String, index: number) => <MenuItem value={index}>{item}</MenuItem>)}
      </Select>
    </FormControl>
  );
}

export default memo(Selector);
