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
const blogRoute = require('./routes/blogRoute')
const userRoute = require('./routes/userRoute');
const bannerRoute = require('./routes/bannerRoute');
const dataFormRoute = require('./routes/dataFormRoute');
const reviewRoute = require('./routes/reviewRoute');
const routerAdmin = require('./routes/adminRoutes');

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
app.use(blogRoute)
app.use(userRoute)
app.use(bannerRoute)
app.use(dataFormRoute)
app.use(reviewRoute)
app.use(routerAdmin)
//estado y levantamiento del servidor

app.listen(process.env.PORT, () => {
    console.log(`Conectado al servidor con éxito en el puerto ${process.env.PORT}`)
})