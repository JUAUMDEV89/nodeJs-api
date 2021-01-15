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

const PORT = process.env.PORT;

app.listen(PORT, ()=>console.log(`Sever Running at port https://localhost:${PORT}`));