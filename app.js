var express = require("express")
var app = express()
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json');

app.use(express())
var route = require("./routes/routes")

app.use("/",route)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(3000,()=>{
    console.log("Listing to the port 3000");
})


