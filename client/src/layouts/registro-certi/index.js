import * as React from 'react';
import Typography from '@mui/material/Typography';
import BasicDateTimePicker from './components/BasicDateTimePicker';
import { Grid } from '@mui/material';
import MDBox from 'components/MDBox';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import MDButton from 'components/MDButton';
import FormInput from '../../components/FormInput';
import { useState } from 'react';

export default function RegistroCertificate() {

  // registrar certificaciones
  const [values, setValues] = useState({
    uid: "",
    name: "",
    issue_date: "",
    type: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    uid: false,
    name: false,
    issue_date: false,
    type: false,
    description: false,
    fetchError: false,
    fetchErrorMsg: "",
  })

  const handleChange = (fieldName) => (event) => {
    setValues({...values, [fieldName]: event.target.value});
  }

  const handleDateChange = (event) => {
    setValues({...values, ['issue_date']: event});
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const res = await fetch('/api/certification/newCertification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          uid: values.uid,
          name: values.name,
          issue_date: values.issue_date,
          type: values.type,
          description: values.description,
        }),
      })
      
      if(!res.ok){
        const error = await res.json()
        return setErrors({
          ...errors,
          fetchError: true,
          fetchErrorMsg: error.msg,
        })
      }
      alert('Certificación registrada correctamente');
    } catch (error) {
      console.error('Error al registrar la certificación:', error.message);
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
              onChange={handleChange('uid')}
              value={values.uid}
            />
            <FormInput
              name="certificacion"
              label="Nombre de la Certificación"
              id="certificado"
              icon="certification"
              onChange={handleChange('name')}
              value={values.name}
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
              onChange={handleChange('description')}
              value={values.description}
            />
          </Grid>
          <Grid container item spacing={3} direction="row">
            <BasicDateTimePicker onDateChange={handleDateChange}/>
            <FormInput
              id="type"
              label="Ingrese el tipo de certificación"
              name="type"
              icon="badge"
              value={values.type}
              onChange={handleChange('type')}
            />
          </Grid>
          <Grid container item spacing={3} direction="row">
            <Grid item xs>
              <MDButton
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
                disabled={errors.uid || errors.name || errors.issue_date || errors.type || errors.description}>
                Registrar
              </MDButton>
            </Grid>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}
