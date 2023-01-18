<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Pizza Renting Backend" />

  &#xa0;

  <!-- <a href="https://pizzarentingbackend.netlify.app">Demo</a> -->
</div>

<h1 align="center">Pizza Renting Backend</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/JotaroKujoo/pizza-renting-backend?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/JotaroKujoo/pizza-renting-backend?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/JotaroKujoo/pizza-renting-backend?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/JotaroKujoo/pizza-renting-backend?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/JotaroKujoo/pizza-renting-backend?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/JotaroKujoo/pizza-renting-backend?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/JotaroKujoo/pizza-renting-backend?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  Pizza Renting Backend 🚀 Under construction...  🚧
</h4> 

<hr> -->

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/JotaroKujoo" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

Se trata de una API RESTFUL para un frontend en React, el API está desarrollada en Sequelize de JavaScript con Node.js,


actualmente se encuentra en estado de producción en la plataforma Railway con el link  https://pizza-renting-backend-production.up.railway.app,


en este repositorio en el directorio **endPointColletion** he dejado una colección de Postman para importar con el contenido necesario para realizar todos los 


endpoints

## :sparkles: Features ##

:heavy_check_mark: Feature 1;\
El usuario puede registrarse e iniciar sesión, esta última le devolverá un JWT con el que validará las acciones pertinentes cuando sea necesario mientras dure la sesión 


:heavy_check_mark: Feature 2;\
El usuario puede navegar en la aplicación y buscar pizzerias y pizzas, podrá también seleccionar la cantidad de pizzas y almacenarlas en el carrito


:heavy_check_mark: Feature 3;\
El usuario puede realizar pedidos customizables y ver el histórico de todos los pedidos que ha hecho

## :rocket: Technologies ##

The following tools were used in this project:


- [Node.js](https://nodejs.org/en/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Sequelize](https://sequelize.org/)
- [SQL](https://dev.mysql.com/doc/)


## :white_check_mark: Requirements ##

Antes de empezar :checkered_flag:, necesitas tener [Git](https://git-scm.com) y [Node](https://nodejs.org/en/) instalados.

## :checkered_flag: Starting ##

Guia para ejecutar en local:


```bash
# Clone this project
$ git clone https://github.com/JotaroKujoo/pizza-renting-backend

# Access
$ cd pizza-renting-backend

# Install dependencies
$ npm i

# Run the project
$ npm run dev

# The server will initialize in the <http://localhost:3000>
```

## :memo: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.


Made with :heart: by <a href="https://github.com/JotaroKujoo" target="_blank">Jose Rodríguez</a>

&#xa0;

## Endpoints ##

* Pizzas ("/pizzas");\
  - Obtener listado de todas las pizzas  ("/getall")
  - Obtener listado de pizzas por nombre ("/getbyname/:name")
  - Obtener listado de pizzas en una pizzeria ("/getbypizzeria")
  - Obtener listado de pizzas filtrando por ingrediente ("/getbyingredient")
  - Obtener pizza por ID ("/getbyid")

* Auth ("/auth")
  - Login (/login)
  - Register(/register)
* Orders ("/orders")
  - Crear un pedido ("/orderpizza")
  - Obtener listado de mis pedidos("/myorders")
* Pizzeria ("/pizzeria")
  - Obtener listado de todas las pizzerias ("/all")
  - Obtener pizzeria filtrando por ID ("/byid/:id")
  - Obtener listado de pizzerias filtrando por nombre ("/byname")

<a href="#top">Back to top</a>
