import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { Grid } from '@mui/material';
import Icon from "@mui/material/Icon";
import {useMaterialUIController} from "context";

function BasicDateTimePicker({onDateChange}) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [controller, dispatch] = useMaterialUIController();
  const { transparentNavbar, darkMode } = controller;

  // Styles for icons
  const iconsStyle = ({ palette: { dark, white, text }, functions: { rgba } }) => ({
        color: () => {
        let colorValue = darkMode ? white.main : dark.main;

        if (transparentNavbar) {
            colorValue = darkMode ? rgba(text.main, 0.6) : text.main;
        }

        return colorValue;
        },
    });

  const handleChange = (event) => {
    setSelectedDate(event);
    onDateChange(event);
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
          showDaysOutsideCurrentMonth
          onChange={handleChange}
          renderInput={(params) => <TextField
            {...params}
            InputProps={{
              startAdornment: <InputAdornment position="end">
                <Icon sx={[iconsStyle, {size: "medium"}]}>schedule</Icon>
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