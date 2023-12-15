To run server successfully - 
1) First run command "mongod" on cmd then open MongoDBCompass and try to connect
2) Run your server "index.js"


Controllers: will interact with models and services, and send back the appropriate HTTP response.
Models: Models define the structure of your data, interact with the database, and encapsulate the business logic related to data.
Routes: Routes define the endpoints of your application and map them to specific controller actions.
Services: Services encapsulate business logic that doesn't fit well within the scope of controllers. They often interact with models to perform more complex operations.

Modal view controller (MVC) pattern

Error code

404 - not found
400 - bad request