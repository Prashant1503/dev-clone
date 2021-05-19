const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// server
const covidRoute = require('./routes/covid.route');

app.use('/api', covidRoute);

const port = process.env.PORT || 4001;
app.listen(port, () => console.log(`Server started listening at port : ${port}`));

module.exports = app;