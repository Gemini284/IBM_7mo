import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BasicDateTimePicker from './components/BasicDateTimePicker';
import FormInput from './components/FormInput';
import { MarginRounded } from '@mui/icons-material';
import { Grid } from '@mui/material';
import MDBox from 'components/MDBox';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import MDButton from 'components/MDButton';


// TODO remove, this demo shouldn't need to reset the theme.

export default function RegistroCertificate() {

  return (
    <DashboardLayout>
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <MDBox mb={1.5}>
              <Typography component="h1" variant="h8">
                Registra una certificación
              </Typography>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox py={3}>
        <Grid container spacing={3} direction="row" justifyContent="center" alignItems="center">
          <FormInput 
            id="empleado"
            label="Id de empleado"
            name="empleado"
            icon="person"/>
          <FormInput 
            name="certificacion"
            label="Nombre de la Certificación"
            id="certificado"
            icon="certification"/>
        </Grid>
        <Grid container spacing={3} direction="row" justifyContent="center" alignItems="center">
          <FormInput 
            id="description"
            label="Descripción"
            name="description"
            icon="description"/>
          </Grid>
        <Grid container spacing={3} direction="row" justifyContent="center" alignItems="center">
          <BasicDateTimePicker />
          <FormInput
            id="organization"
            label="Ingrese la organización que lo certifica"
            name="organization"
            icon="company"/>
        </Grid>
        <Grid container spacing={3} direction="row" justifyContent="center" alignItems="center">
          <Grid item xs>
            <MDButton type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
              Registrar
            </MDButton>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}
