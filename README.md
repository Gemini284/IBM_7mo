# IBM_7mo

Para instalar los modulos, ejecutar el comando en el path de la carpeta server y web-app:
```
npm install
```
Para ejecutar:

```
npm start
```
## Web-app
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

## Server
- Agregar en la carpeta de server un archivo **.env** con lo siguiente: (reemplazar lo que está entre <>)
```
PORT = <port>
URI = "mongodb+srv://<user>:<password>@atlascluster.71rs2yl.mongodb.net/"
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