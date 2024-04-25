const express = require('express');
const cors = require('cors');
require('dotenv').config();

//instaciar express

const app = express();

//admisiones web
app.use(cors());
//adminsion de archivos json
app.use(express.json())


//estado y levantamiento del servidor

app.listen(process.env.PORT, () => {
    console.log(`Conectado al servidor con éxito en el puerto ${process.env.PORT}`)
})