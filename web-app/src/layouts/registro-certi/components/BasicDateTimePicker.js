import React, { useState, useEffect } from 'react';
import { TextField, InputAdornment, Typography } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker, DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { Grid } from '@mui/material';

function BasicDateTimePicker({ handleDateChange }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => {
    setSelectedDate(date);
    handleDateChange(date); // Actualizar el estado en el componente padre
  };

  return (
    <Grid item xs>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          disableFuture
          label="Date"
          inputFormat='yyyy/MM/dd'
          views={['month', 'day']}
          value={selectedDate}
          onChange={handleChange}
          showDaysOutsideCurrentMonth

          renderInput={(params) => <TextField
            {...params}
            InputProps={{
              startAdornment: <InputAdornment position="end">
                <CalendarTodayIcon />
              </InputAdornment>
            }}
            required
            id="fecha"
            label="Selecciona una fecha (yyyy/MM/dd)"
            name="fecha"
            autoFocus
            fullWidth
            margin="normal"
          />}
        />
      </LocalizationProvider>
    </Grid>
  );
}
export default BasicDateTimePicker;