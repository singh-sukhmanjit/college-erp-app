const express = require('express')
const app = express()
const port = 3003
app.get('/test', (req, res) => {
    res.send({working: true})
})
app.listen(port, () => console.log(`App running on port ${port}`))