import React, { useState, useEffect } from 'react';
import { TextField, InputAdornment, Typography } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker, DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { Grid } from '@mui/material';

function BasicDateTimePicker() {
  const [selectedDate, handleDateChange] = useState();

  return (
    <Grid item xs>    
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
          id="fecha"
          label="Selecciona una fecha (yyyy/MM/dd)"
          name="fecha"
          autoComplete="fecha"
          autoFocus
          fullWidth
          />}
      /> 
    </LocalizationProvider>
    </Grid>
  );
}
export default BasicDateTimePicker;