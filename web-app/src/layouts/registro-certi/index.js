import * as React from 'react';
import Typography from '@mui/material/Typography';
import BasicDateTimePicker from './components/BasicDateTimePicker';
import { Grid } from '@mui/material';
import MDBox from 'components/MDBox';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import MDButton from 'components/MDButton';
import FormInput from '../../components/FormInput';
import { useState } from 'react';



export default function RegistroCertificate() {

  // registrar certificaciones

  const [empleado, setEmpleado] = useState('');
  const [certificacion, setCertificacion] = useState('');
  const [description, setDescription] = useState('');
  const [organization, setOrganization] = useState('');
  const [date, setDate] = useState('');

  const handleEmpleadoChange = (event) => {
    setEmpleado(event.target.value);
  };

  const handleCertificacionChange = (event) => {
    setCertificacion(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleOrganizationChange = (event) => {
    setOrganization(event.target.value);
  };

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      empleado,
      certificacion,
      description,
      organization,
      date,
    };
  
    // checar que no estén vacíos los campos
    if (empleado === '' || certificacion === '' || description === '' || organization === '' || date === '') {
      alert('Todos los campos son obligatorios');
      return;
    }
  
    // checar que el id cumpla con la siguiente regex ^[A-Z0-9]{10}IBM$
    if (!/^[A-Z0-9]{10}IBM$/.test(empleado)) {
      alert('El id de empleado no es válido');
      return;
    }
  
    // checar que la fecha sea menor o igual a la fecha actual
    const today = new Date();
    const dateToCheck = new Date(date);
    if (dateToCheck > today) {
      alert('La fecha no puede ser mayor a la fecha actual');
      return;
    }
  
    try {
      // guardar en la base de datos
      console.log(formData);
      alert('Certificación registrada correctamente');
    } catch (error) {
      alert('Ocurrió un error al registrar la certificación');
    }
  };


  return (
    <DashboardLayout>
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
              icon="person"
              onChange={handleEmpleadoChange}
              value={empleado}
            />
            <FormInput
              name="certificacion"
              label="Nombre de la Certificación"
              id="certificado"
              icon="certification"
              onChange={handleCertificacionChange}
              value={certificacion}
            />
          </Grid>
          <Grid container item spacing={3} direction="row">
            <FormInput
              id="description"
              label="Descripción"
              name="description"
              icon="description"
              helperText="Describe brevemente la certificación"
              multiline
              minRows={5}
              onChange={handleDescriptionChange}
              value={description}
            />
          </Grid>
          <Grid container item spacing={3} direction="row">
            <BasicDateTimePicker handleDateChange={handleDateChange}/>
            <FormInput
              id="organization"
              label="Ingrese la organización que lo certifica"
              name="organization"
              icon="company"
              onChange={handleOrganizationChange}
              value={organization}
            />
          </Grid>
          <Grid container item spacing={3} direction="row">
            <Grid item xs>
              <MDButton
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}>
                Registrar
              </MDButton>
            </Grid>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}
