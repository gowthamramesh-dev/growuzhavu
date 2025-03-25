const express = require('express')

const app = express()
const port = process.env.PORT || 5172
app.listen(port, () => {
    console.log('Server Listerning On Port 5172')
}
)
