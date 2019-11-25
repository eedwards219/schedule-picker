const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
const cors = require("cors");
const logger = require("morgan");
const knex = require("./db/knex");
const { Model } = require("objection");
const index = require("./routes/indexRoutes");
const operators = require("./routes/operatorRoutes");
const knexInstance = require("./db/knex");
const supervisors = require("./routes/supervisorRoutes");
const schedules = require("./routes/schedulesRoutes");

// const appointments = require("./routes/appointmentsRoutes");

Model.knex(knexInstance);

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", index);
app.use("/operators", operators);
app.use("/supervisors", supervisors);
app.use("/schedules", schedules);

// app.listen(port, function() {
//   console.log("listening on port: ", port);
// });
module.exports = { app };
