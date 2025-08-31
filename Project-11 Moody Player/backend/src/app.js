const express = require('express')
const songRoutes = require('./routes/song.route') 

let app = express();
app.use(express.json());

app.use('/', songRoutes); 


module.exports = app;