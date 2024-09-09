const express = require('express')
const rooter = require('./routes/db.routes')

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use("/api",rooter)

app.listen(PORT, () => console.log("Server started"))
