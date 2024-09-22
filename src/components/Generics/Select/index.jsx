import { useState } from 'react';
import { FormControl,InputLabel, MenuItem,Select } from '@mui/material';
function GenericSelect(props) {
const {label,data}=props
 const [lang, setLang]= useState("O'zbek")
 const [defaultValue,setDefaultValue] = useState(
  props?.value || (data && data[0]?.value)
 )
 const handleChange = (event)=>{
  setLang(event.target.value)
 }
      return (
      <FormControl fullWidth >
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={defaultValue || 'Select'}
        onChange={handleChange}
        sx={{width:'147px',flex:'0 0 auto',height:'42px'}}
      >
        {data.map((item)=>(
          <MenuItem key={item.value} sx={{fontSize:'14px'}} value={item.value}>{item.title}</MenuItem>
        ))}
        
        {/* <MenuItem value="option2">Variant 2</MenuItem>
        <MenuItem value="option3">Variant 3</MenuItem> */}
      </Select>
    </FormControl>  
    );
    
  
}

export default GenericSelect