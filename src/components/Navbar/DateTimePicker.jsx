// import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React from 'react'
import moment from 'moment';
// import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
function DateTimePicker() {
  return(
    <LocalizationProvider dateAdapter={AdapterDayjs} style={{ top:'-16px'}}>
      <DatePicker 
      style={{padding:'0',width:'270px',flex:'0 0 auto'}}
      />
    </LocalizationProvider>
  )
}
export default DateTimePicker
