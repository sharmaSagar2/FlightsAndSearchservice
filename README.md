# Welcome to Flights Service
    ## Project Setup
    - clone the project on your local
    - Execute `nmp install` on the same path as of you root directory of the downloaded project
    -Create a ``.env` file in the root directory and add the following environment variable
            -`PORT=3000`
    - Inside the `src/config` folder create a new file `config.json` and then add the followin piece of json

    ```
         {
            "development":{
                "username": "root",
                "password": "your db password",
                "database": "Flights_Search_DB_DEV",
                "host": "127.0.0.1",
                "dialect": "mysql"
            }
        }
    ```
        - onece you've added your db config as listed above go the src folder from your terminal and execute `npx sequelize db:create`
        and then execute
        `npx sequelize db:migrate`
       







/
    -src/
        index.js // server
        models/
        controllers/
        middlewares/
        services/
        utils/
        config/
        repository/

        -tests/[later]
/


























## DB Design
    . Flights->id, departure_city_id,destination_city_id,airplane_id,departure,arrival,flight number,airport_id
    . Airplane->id,model_number,capacity
    
    //1 airplane can be used in many flights but in 1 flight there will be 1 airplane

    . Airport->id,name,city_id,address
     . City->id,name

    Relationship b/w table
     . A flight belong to an airplane but one airplane can be used in multiple flights
     . A city has many airports but one airport belongs to a city
     . One airport can have many flights,but a flight belong to one airport

     ##Tables

     ###City -> id,name,created_at,updated_at
     ###Airport -> id, name, address , city_id ,created_at,updated_at
        Relationship -> city has many airports and Airport belong to a city (one to many)



































##my notes
.interaction with models can be done by repository layer
.service layer->bussiness logic,using  repository layer in service layer
.service directly communicating with repositoy
.controllers->hitting api


