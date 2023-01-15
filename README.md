# Proyecto Final

## El proyecto consiste en una web en la cual podremos reservar partidos en diferentes centros de padel.
***
<img src="../PROYECTO-FINAL/img/ddbb-padel.PNG" width="600em"/><br>
***


## Uso de la API
<br>

## Endpoints

* **Auth**
    * **LOGIN**: POST- Loggin de un usuario.
    * **REGISTRO**: POST- Registra un nuevo usuario.
    
* **Users**
    * **LISTADO DE TODOS LOS USUARIOS**: GET- Muestra  todos los usuarios( solo si tienes rol "admin" )
    * **LISTADO DE USUARIOS SEGUN EMAIL**: GET- Muestra los datos al usuario del propio usuario
    * **MODIFICAR DATOS DE USUARIO**: PUT- Modifica los datos del propio usuario
    * **BORRAR UN USUARIO**: DELETE- Elimina un usuario ( solo si tienes rol "admin" )

* **Sportscenters**
    * **LISTADO DE TODOS LOS SPORTSCENTERS**: GET- Muestra todos los polideportivos
    * **LISTADO DE SPORTSCENTER SEGUN ID**: GET- Muestra el polideportivo segun ID
    * **LISTADO DE SPORTSCENTERS SEGÚN PROVINCIA**: GET- Muestra todos los polideportivos que se ubiquen en una provincia
    * **REGISTRAR NUEVO SPORTSCENTER**: POST-Registra un nuevo polideportivo ( solo si tienes rol "admin" )
    * **BORRAR UN SPORTSCENTER**: DELETE- Elimina un polideportivo ( solo si tienes rol "admin" )

* **Games**
    * **LISTADO DE TODOS LOS PARTIDOS**: GET- Muestra todos los partidos de la aplicación ( solo si tienes rol "sportscenteradmin" )
    * **LISTADO DE TODOS LOS PARTIDOS SEGUN SPORTSCENTER**: GET-Muestra todos los partidos de un polideportivo
    * **REGISTRAR NUEVO PARTIDO**: POST-Registra un nuevo partido ( solo si tienes rol "sportscenteradmin" )
    * **BORRAR UN PARTIDO**: DELETE- Elimina un partido ( solo si tienes rol "sportscenteradmin" )

* **Bookings**
    * **LISTADO DE TODAS LAS RESERVAS**: GET- Muestra todas las reservas  ( solo si tienes rol "admin" )
   * **LISTADO DE TODAS LAS RESERVAS SEGÚN USUARIO**: GET- Muestra todas las reservas de un usuario  
   * **GENERAR NUEVA RESERVA**: POST-Reserva un partido
   * **BORRAR UNA RESERVA**: DELETE- Elimina una reserva ( solo si tienes rol "sportscenteradmin" )


    
## Tecnologías utilizadas en el proyecto:


* **express**: Framework de node js.



* **sequelize**: Para conectarnos y manipular nuestra bbdd.



* **jsonwebtoken**: Instalamos jsonwebtoken en nuestro proyecto para gestionar uso de tokens:




## Explicación de la estructura del proyecto

Usamos el modelo vista-controlador para estructurar el proyecto.
 **Creamos un CRUD básico**. En el proyecto existirá la siguiente estructura:

* **index.js**: Este es el archivo principal. En este archivo nos traemos todo lo necesario para que nuestra API funcione y se arranca el servidor.

* **config**
    * **config.json**: En este archivo se gestiona la configuración para conectar con la base de datos. 
    Se crea de manera automática con **sequelize**(paralelamente, tendremos un archivo .env, el cual meteremos en el .gitignore, con lo cual no se podrá ver desde Github).
   
* **middlewares**
    * **authMiddleware.js**: En este archivo se gestiona el Middleware de autenticacion del token.


* **db.js**: En este archivo se gestiona el acceso a la base de datos.

* **router.js**: En este archivo se gestiona las diferentes vistas que puede tener la aplicación. Se creará una ruta por cada tabla de la base de datos a la que queramos acceder.

* **views**
    * **AuthRoutes.js**: En este archivo gestionamos la ruta /auth y los endpoints que apuntan a dicha ruta.
    * **BookingRoutes.js**: En este archivo gestionamos la ruta /bookings y los endpoints que apuntan a dicha ruta.
    * **GameRoutes.js**: En este archivo gestionamos la ruta /games y los endpoints que apuntan a dicha ruta.
    * **SportscenterRoutes.js**: En este archivo gestionamos la ruta /sportscenters y los endpoints que apuntan a dicha ruta.
    * **UserRoutes.js**: En este archivo gestionamos la ruta /users y los endpoints que apuntan a dicha ruta.
    
    

* **controllers**

    * **authControllers.js**: En este archivo creamos las funciones de cada endpoint:
         * **authRegisterController**: REGISTRO
         * **authLoginController**: LOGIN
    * **bookingControllers.js**: En este archivo creamos las funciones de cada endpoint:
        * **getBookings**: LISTADO DE TODAS LAS RESERVAS
        * **getBookingsByUser**: LISTADO DE TODAS LAS RESERVAS SEGÚN USUARIO.
        * **postNewBooking**: GENERAR NUEVA RESERVA        
        * **deleteBooking**: BORRAR UNA RESERVA
    * **gameControllers.js**: En este archivo creamos las funciones de cada endpoint:        
        * **getGames**: LISTADO DE TODOS LOS PARTIDOS
        * **getGamesBySportscenter**: LISTADO DE TODOS LOS PARTIDOS SEGUN SPORTSCENTER
        * **postNewGame**: REGISTRAR NUEVO PARTIDO
        * **deleteGame**: BORRAR UN PARTIDO          
   * **sportscenterControllers.js**: En este archivo creamos las funciones de cada endpoint:
        * **getSportscenters**: LISTADO DE TODOS LOS SPORTSCENTERS
        * **getsportcenterById**: LISTADO DE SPORTSCENTER SEGUN ID
        * **getSportscentersByProvince**: LISTADO DE SPORTSCENTERS SEGÚN PROVINCIA
        * **postNewSportscenter**: REGISTRAR NUEVO SPORTSCENTER
        * **deleteSportscenter**: BORRAR UN SPORTSCENTER 
   * **userControllers.js**: En este archivo creamos las funciones de cada endpoint:
        * **getUsers**: LISTADO DE TODOS LOS USUARIOS
        * **getUserByMail**: LISTADO DE USUARIOS SEGUN EMAIL
        * **updateUser**: MODIFICAR DATOS DE USUARIO
        * **deleteUser**: BORRAR UN USUARIO
        
* **migrations**
    * **0-create-roles.js**: 
    * **1-create-sportscenter.js**: 
    * **2-create-user.js**:
    * **3-create-game.js**:  
    * **20221101173554-create-user-table.js**:
    * **4-create-booking.js**:  


* **models**
    * **booking.js**: 
    * **index.js**: Gestiona la conexión con la base de datos.
    * **game.js**: 
    * **role.js**: 
    * **sportscenter.js**: 
    * **user.js**: 
 
* **seeders**:
    * **0-20221226170348-create-rol.js**:  Generamos los roles que tendrán los usuarios("user", "admin", "sportscenteradmin")
    ```
    ```
    * **1-20221226170248-create-sportscenter.js**: Generamos los polideportivos de nuestra API
    ```
    ```
    * **2-20221226164539-create-user.js**: Generamos los usuarios de nuestra API
    ```
    ```
   * **3-20221226164539-create-game.js**: Generamos los partidos de nuestra API
    ```
    ```
   * **4-20221226164539-create-booking.js**: Generamos las reservas de nuestra API
    ```
    ```

* **.gitignore**: Archivo en el que se indica que archivos no se subirán a nuestro repositorio. Está editado de la siguiente manera:

/node_modules
.env
/config/config.json


## Explicación de la securización de la API:
- En primer lugar, un usuario se registrará(entre otras cosas, con su email y password).
- La contraseña se encriptará y se guardará en base de datos.
- Al logearse, gestionamos la comparación entre la contraseña introducida en el login(también encriptada) y la contraseña que habíamos guardado previamente en nuestra base de datos.
- Una vez hagamos el login, obtendremos un Token, el cual usaremos para tener acceso a los distintos endpoints privados.
