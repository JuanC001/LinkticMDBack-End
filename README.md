# Linktic BackEnd Prueba Técnica

Este es un Back-end que envia información al front-end, está hecho utilizando Express y MongoDB.

## Descripción

Para el proyecto en General se decidió trabajar con el stack MERN. (MongoDB, ExpressJS, ReactJS, NodeJS).
Se realizó un proyecto de reservas de hoteles, para cumplir con la prueba técnica para LinkTic de desarrollador MD.
El proyecto se realizó utilizando ExpressJS y MongoDB para el Back-End (Proyecto Actual).

### ¿Por qué estas tecnologías?

Se eligen estas tecnologías principalmente por tema de tiempos, es decir, que no se tenía bastante tiempo para desarrollar el aplicativo, es por eso que se optó por trabajar con una base de datos NoSQL, ya que permitía el desarrollo ágil del aplicativo, puesto que permite el uso de MongoDB Atlas (una base de datos mongo publicada en un servidor gratuito, abajo se deja el enlace para conectarse directamente si se necesita), sin embargo, es importante resaltar que para este proyecto a gran escala podría llegar a ser preferible trabajar en un stack diferente como PERN, que cambia la base de datos por Postgres y tienes casi los mismo beneficios que Mongo, sobretodo con las últimas actualizaciones de esta base de datos, pero esto implicaba un tiempo de desarrollo más, debido a que tocaba hacer la debida planeación de la base de datos. Se decide trabajar con React ya que es un framework que permite el desarrollo ágil de una aplicación y permite el manejo de estados de una manera más compleja. Se elige expressJS para tener todo centralizado dentro del mismo lenguaje, sin embargo este se podría cambiar por otros lenguajes y frameworks sin problema. Lo bueno de ExpressJS es que permite un despliegue de un BackEnd mucho más rápido que en otras tecnologías. Finalmente el uso de NodeJS es indispensable para estos proyectos ya que dependen casi que totalmente de este entorno de ejecución.

## API y EndPoints

Para conocer todos los end-points que tiene la API puedes entrar en el siguiente [enlace](https://documenter.getpostman.com/view/38032460/2sAXqta1Sx)

## Diagrama de Arquitectura

![Alt text](DiagramadeDespliegue.png)

## Requisitos previos

- [ ] Node.js (El proyecto fue creado con la versión 20.16.0)
- [ ] Postman (Es preferible para probar la API)
- [ ] Git

## Instalación

Sigue estos pasos para instalar y configurar el proyecto localmente.

1. Clona el repositorio:

   ```bash
   git clone git@github.com:usuario/repositorio.git
   
2. Ubícate en la carpeta del proyecto:
   ```bash
   cd LinkticMDBack-End/
   
3. Ejecuta el comando para instalar las librerías necesarias para ejecutar el proyecto:
   ```bash
   npm ci
4. Ejecuta el comando para correr el proyecto:
   ``bash
   npm run dev ``

   Posteriormente el proyecto se ejecutará y se podrá ver en la url:
   ```bash
   localhost:5173

## Configuración
Dentro de la carpeta principal, se debe crear un archivo `.env` dentro se debe colocar la siguiente información
```bash
MONGO_URI='mongodb+srv://jcflorezpaez:8rqQc4AR1Qjd0zOd@cluster0.6laz6.mongodb.net/PruebaTecnica?retryWrites=true&w=majority&appName=Cluster0'
FRONTEND_URI='http://localhost:5173'
PORT=3000
SECRET_JWT_SEED='PruebaTecnicaLinktic'
```
Esto se hace con el motivo de mantener información secreta del proyecto, sin embargo, para efectos prácticos les dejo la información del `.env` para que puedan probar con las BD creada por mi en MongoDBAtlas
