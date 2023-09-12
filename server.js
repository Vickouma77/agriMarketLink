const express = require('express')
const app = express()
const routers = require('./routers/index')
const port = parseInt(process.env.PORT, 10) || 5000

app.use('/', routers)

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})