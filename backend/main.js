const express = require('express')
const routerDevice = require('./routes/device.routes')
const routerPort = require('./routes/port.routes')
const routerLinks = require('./routes/link.routes')

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use("/",routerDevice)
app.use("/",routerPort)
app.use("/",routerLinks)

app.listen(PORT, () => console.log("Server started"))
