import React, { useState } from 'react';
import { FormControl,InputLabel, MenuItem,Select } from '@mui/material';
function SelectSection() {  
 const [lang, setLang]= useState('')
 const handleChange = (event)=>{
  setLang(event.target.value)
 }
      return (
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Language</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={lang}
            label="Age"
            onChange={handleChange}
            style={{width:'150px'}}
          >
            <MenuItem value='Uzbekcha'>Uzbekcha</MenuItem>
            <MenuItem value='Ruscha'>Ruscha</MenuItem>
            <MenuItem value='Inglizcha'>Inglizcha</MenuItem>
          </Select>
        </FormControl>
      );
    
  
}

export default SelectSection