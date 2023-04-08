module.exports = app =>{
    const tutorial = require("../controller/tutorial.controller.js")
     var router  = require("express").Router();
     router.get("/",tutorial.findAll);
     app.use('/api/tutorials',router)
}