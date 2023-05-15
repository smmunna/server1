const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
const userRouter = require('./routers/userRouter')

app.use(cors())
app.use(express.json())

app.use('/users', userRouter)


app.get('/', (req, res) => res.send('Server is successfully running'))
app.get('*', (req, res) => {
    res.send('No Routing found Here')
})
app.listen(port, () => console.log(`Server is successfully running on port ${port}!`))