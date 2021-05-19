const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();

/** Config */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const cowinRoute = require("./src/routes/cowin.route");

/** routes define here */
app.use("/api/cowin", cowinRoute);

const port = process.env.PORT || 4001;
/** Server */
app.listen(port, () => console.log(`Server listening at port : ${port}`));
