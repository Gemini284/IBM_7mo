import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { InputAdornment } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import BasicDateTimePicker from './BasicDateTimePicker';
import { Select } from '@mui/material';

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h8">
            Registra una certificación
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Typography component="h2" variant="h6">
              Id del empleado
            </Typography>
            <TextField InputProps={{
              startAdornment: <InputAdornment position="start">
                <PersonOutlineIcon />
              </InputAdornment>
            }}
              margin="normal"
              required
              fullWidth
              id="empleado"
              label="Id de empleado (UID)"
              name="empleado"
              autoComplete="empleado"
              autoFocus
            />
            <Typography component="h2" variant="h6">
              Nombre de la certificación
            </Typography>
            <TextField InputProps={{
              startAdornment: <InputAdornment position="start">
                <PersonOutlineIcon />
              </InputAdornment>
            }}
              margin="normal"
              required
              fullWidth
              name="certificacion"
              label="Nombre de la Certificación"
              type="certificado"
              id="certificado"
            />
            
            <Typography component="h2" variant="h6">
              Fecha de certificación
            </Typography>
            <BasicDateTimePicker />

            <Typography component="h2" variant="h6">
              Tipo de certificación
            </Typography>
            

            <Typography component="h2" variant="h6">
              Ubicación de trabajo
            </Typography>
            <TextField InputProps={{
              startAdornment: <InputAdornment position="start">
                <PersonOutlineIcon />
              </InputAdornment>
            }}
              margin="normal"
              required
              fullWidth
              id="ubicacion"
              label="Ubicación de trabajo"
              name="ubicacion"
              autoComplete="ubicacion"
              autoFocus
            />

            <Typography component="h2" variant="h6">
              Organización
            </Typography>
            <TextField InputProps={{
              startAdornment: <InputAdornment position="start">
                <PersonOutlineIcon />
              </InputAdornment>
            }}
              margin="normal"
              required
              fullWidth
              id="descripcion"
              label="Ingrese la organización a la cual pertenece"
              name="descripcion"
              autoComplete="descripcion"
              autoFocus
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrar
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
