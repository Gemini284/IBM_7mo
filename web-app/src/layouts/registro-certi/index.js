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
import { MarginRounded } from '@mui/icons-material';
import { Grid } from '@mui/material';
import MDBox from 'components/MDBox';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import MDButton from 'components/MDButton';
import FormInput from '../../components/FormInput';

// TODO remove, this demo shouldn't need to reset the theme.

export default function RegistroCertificate() {

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={1}>
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
      <MDBox py={1}>
        <Grid container spacing={3} justifyContent="space-around" alignItems="flex-start">
          <Grid container item spacing={3} direction="row">
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
          <Grid container item spacing={3} direction="row">
            <FormInput 
              id="description"
              label="Descripción"
              name="description"
              icon="description"
              multiline
              minRows={5}/>
          </Grid>
          <Grid container item spacing={3} direction="row">
            <BasicDateTimePicker />
            <FormInput
              id="organization"
              label="Ingrese la organización que lo certifica"
              name="organization"
              icon="company"/>
          </Grid>
          <Grid container item spacing={3} direction="row">
            <Grid item xs>
              <MDButton type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Registrar
              </MDButton>
            </Grid>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}
