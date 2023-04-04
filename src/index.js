const express = require('express');
const cors = require('cors');

require('./database');
const routes = require('./router');

const PORT = 3333;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT,() => {
    console.log(`Servidor rodando na porta: ${PORT}`);
});
