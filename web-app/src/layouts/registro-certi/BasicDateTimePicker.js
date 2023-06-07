import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import { InputAdornment } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker, DatePicker, LocalizationProvider } from '@mui/x-date-pickers';


function BasicDateTimePicker() {
  const [selectedDate, handleDateChange] = useState();

  return (
    
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        disableFuture
        label="Date"
        inputFormat='yyyy/MM/dd'
        views={['month', 'day']}
        value={selectedDate}
        onChange={handleDateChange}
        showDaysOutsideCurrentMonth

        renderInput={(params) => <TextField
          {...params}
          InputProps={{startAdornment: <InputAdornment position="start">
            <CalendarTodayIcon />
            </InputAdornment>}}
          margin="normal"
          required
          fullWidth
          id="fecha"
          label="Selecciona una fecha"
          name="fecha"
          autoComplete="fecha"
          autoFocus
          />}
      /> 
    </LocalizationProvider>
  );
}
export default BasicDateTimePicker;