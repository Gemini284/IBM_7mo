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
-
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