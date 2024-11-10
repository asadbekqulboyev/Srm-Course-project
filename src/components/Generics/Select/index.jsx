import { useState } from 'react';
import { FormControl, MenuItem,Select } from '@mui/material';
function GenericSelect(props) {
const {data,width,onChange,name=''}=props
 const [defaultValue,setDefaultValue] = useState(
  props?.value || (data && data[0]?.value)
 )
 const handleChange = (event)=>{
  setDefaultValue(event.target.value)
  onChange && onChange(event)
 }
      return (
      <FormControl fullWidth sx={{width:width||'fit-content',marginTop:props?.mt+'px'||0}}>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={defaultValue || 'Select'}
        onChange={handleChange}
        sx={{width:width||'147px',flex:'0 0 auto',height:'42px'}}
        name={name}
      >
        {data.map((item)=>(
          <MenuItem key={item?.value} sx={{fontSize:'14px'}} value={item?.value}>{item?.title}</MenuItem>
        ))}
      </Select>
    </FormControl>  
    );
    
  
}

export default GenericSelect