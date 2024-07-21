# swapi-dynamo-aws-2023

npm run start: Para iniciar la aplicación
npm run test: Para realizar los test de endpoint's

http://localhost:3000/docs/ : Para ingresar al swagger

URL_BASE = https://o5nerd2mfe.execute-api.us-east-1.amazonaws.com/dev/

Obtener peliculas API SWAPI:
[GET] https://o5nerd2mfe.execute-api.us-east-1.amazonaws.com/dev/pelicula

Obtener personas API SWAPI:
[GET] https://o5nerd2mfe.execute-api.us-east-1.amazonaws.com/dev/persona/swapi

Obtener personas registradas:
[GET] https://o5nerd2mfe.execute-api.us-east-1.amazonaws.com/dev/persona/

Registrar personas:
[POST] https://o5nerd2mfe.execute-api.us-east-1.amazonaws.com/dev/persona/
[BODY]:
{
  "nombre": "",
  "apellido": "",
  "id": "654834538675456558",
  "edad": 0,
  "correo": ""
}
