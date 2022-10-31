var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/api");
var app = express();
var mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/Restdb");
//mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use("/api", routes);

/*const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Rest- API",
      description: "",
      servers: ["http://localhost:9000"],
    },
  },
  apis: ["./routes/api.js"],
};
*/

//const swaggerDocs = swaggerJsdoc(swaggerOptions);


//error handling middle ware
app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message });
});
app.listen(process.env.port || 9000, function () {
  console.log("Listening on port 9000");
});
