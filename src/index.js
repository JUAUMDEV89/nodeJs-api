require('dotenv/config');
const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

require('./config/database');

app.use((req, res, next)=>{
    app.use(cors());
})

app.use(express.json());
app.use(routes);

app.listen(5000, ()=>console.log("Sever Running at port https://localhost:5000"));
