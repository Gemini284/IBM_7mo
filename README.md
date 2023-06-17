# SkillPath
- María Fernanda Elizalde Macías - A01634135
- Sofía del Pilar Batiz Martínez - A01634125
- José Abraham González Navarro  - A00369832
- José Ángel Tobón Salazar - A01411655
- Álvaro Misael Pintor Alcantar - A01631795

SkillPath es una aplicación que permite la fácil visualización y manejo de las certificaciones de los empleados de IBM.

La apicación incluye lo siguiente:
- **Dashboard**: Muestra gráficas e información relevantes
- **Búsqueda**: Permite al usuario buscar certificaciones o empleados. Dependiendo de la búsqueda, se mostrará un resumen y una tabla con los resultados correspondientes.
- **Registro de Certificación**: Incluye un formulario para que el usuario registre una nueva certificación.
- **Sign In**: Al iniciar la aplicación, el usuario deberá ingresar con una cuenta válida.

# Deployment
- Build con **Docker Compose**
- SSL con **Caddy**
- VM en **Digital Ocean**
- Dominio con **Namecheap**

# Instalación
## Pre-requisitos
- Tener Docker instalado en tu sistema
## Instalación
Para la instalación por makefile, ejecutar los siguientes comandos en el directorio raíz del proyecto:
```
make build-dev
make run-dev
```

# Información Relevante:
## Client
- React App
---
Los archivos correspondientes fueron obtenidos de Material Dashboard 2 React:
```
material-dashboard-react
    ├── src
    │   ├── assets
    │   ├── context
    │   ├── examples
```
Copyright:
```
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================
```
---
## Server
- MongoDB Atlas
---
### Setup de variables de ambiente:
- Agregar en la carpeta de server un archivo **.env** con lo siguiente: (reemplazar lo que está entre <>)
```
PORT = <port>
URI = "mongodb+srv://trial-user:SPkGPqpvoKdmSfZi@atlascluster.71rs2yl.mongodb.net/"
DATABASE = "<database-name>"
TOKEN_SECRET=<token>
```
- No escoger port 27017

### Recomendaciones del Token
- Encode with base64, mientras más largo mejor

Para generar token:
- Abre git.bash
- Introduce el siguiente código:
```
openssl rand -base64 32
```

Más información:

https://stackoverflow.com/questions/11896304/openssl-is-not-recognized-as-an-internal-or-external-command

----

