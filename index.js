const express = require('express');
const cors = require('cors');
require('dotenv').config();
const netbd = require('./config/configDataBase')

const ninosRoute = require('./routes/ninosElaRoute');
const anillosRoute = require('./routes/anillosRoute');
const madresRoute = require('./routes/madresYninosRoute');
const amuletoRoute = require('./routes/amuletosRoute');
const runaRoute = require('./routes/runasRoute');
const profesionesRoute = require('./routes/profesionesRoute');
const cartRouter = require('./routes/cartRoute')

//instaciar express

const app = express();

//admisiones web
app.use(cors());
//adminsion de archivos json
app.use(express.json())

//llamada a base de datos
netbd();

//ruta del servidor
app.use(ninosRoute)
app.use(anillosRoute)
app.use(madresRoute)
app.use(amuletoRoute)
app.use(runaRoute)
app.use(profesionesRoute)
app.use(cartRouter)

//estado y levantamiento del servidor

app.listen(process.env.PORT, () => {
    console.log(`Conectado al servidor con éxito en el puerto ${process.env.PORT}`)
})