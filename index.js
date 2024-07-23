const express = require('express');
const cors = require('cors');
require('dotenv').config();
const netbd = require('./config/configDataBase')


const anillosRoute = require('./routes/anillosRoute');
const amuletoRoute = require('./routes/amuletosRoute');
const arosPiedrasNaturalesRoute = require('./routes/arosPiedrasNaturalesRoute')
const arosPlataLisaRoute = require('./routes/arosPlataLisaRoute')
const cartRouter = require('./routes/cartRoute')
const blogRoute = require('./routes/blogRoute')
const userRoute = require('./routes/userRoute');
const bannerRoute = require('./routes/bannerRoute');
const dataFormRoute = require('./routes/dataFormRoute');
const reviewRoute = require('./routes/reviewRoute');
const routerAdmin = require('./routes/adminRoutes');
const cadenasRoute = require('./routes/cadenasRoute');
const colgantesPiedrasNaturalesRoute = require('./routes/colgantesPiedrasNaturalesRoute');
const collaresRoute = require('./routes/collaresRoute');
const madreNaturalezaRoute = require('./routes/madreNaturalezaRoute');
const pulserasRoute = require('./routes/pulseraRoute');
const religiosoRoute = require('./routes/religiosoRoute');

//instaciar express

const app = express();

//admisiones web
app.use(cors());
//adminsion de archivos json
app.use(express.json())

//llamada a base de datos
netbd();

//ruta del servidor

app.use(anillosRoute)
app.use(amuletoRoute)
app.use(arosPiedrasNaturalesRoute)
app.use(arosPlataLisaRoute)
app.use(colgantesPiedrasNaturalesRoute)
app.use(religiosoRoute)
app.use(collaresRoute)
app.use(madreNaturalezaRoute)
app.use(pulserasRoute)
app.use(cadenasRoute)
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