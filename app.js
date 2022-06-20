const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const db = require("./app/models")
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        // useFindAndModify: true
        // useUnifiedTechnology: true
    })
    .then(() => {
        console.log("Database connected !")
    }).catch((err) => {
        console.log(`Can't connect to database`, err)
        process.exit()
    });

// route
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to IDStack"
    })
})

require('./app/routes/post.route')(app)

const PORT = 8000
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})