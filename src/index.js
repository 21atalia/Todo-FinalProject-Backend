const Express = require("express");
const CorsMiddleware = require("cors");
const { initializeDB } = require("./lib/db/index");
const RequestHandler = require("./lib/handlers/handlers");

const Api = Express();

// for security reasons we need to add cors middleware
Api.use(CorsMiddleware());
//Express.json => return (request, response, next) => {}
Api.use(Express.json());
//Express.urlencoded => return (request, response, next) => {}
Api.use(Express.urlencoded({ extended : false}));

//localhost:3000/api/v1/to-dos
Api.use("/api/v1", RequestHandler);

Api.listen(3000, () => {
    console.log('API IS RUNNING');

    
    initializeDB().then(() => {
        console.log('DATABASE READY');
    })
});
