import {
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material'
import React from 'react'

const Selecter = ({data, handleChange}: any) => {  
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        // value={age}
        label="Age"
        onChange={handleChange}
      >
        
        {data.map((item: String, index: number) => 
          <MenuItem value={index}>{item}</MenuItem>
        )}
      </Select>
    </FormControl>  )
}

export default Selecter;