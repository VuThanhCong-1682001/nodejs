const compression = require('compression')
const express = require('express')
const { default: helmet } = require('helmet')
const morgan = require('morgan')
const app = express()

// init middlewares
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())

// init db

// init routes
app.get('/', (req, res, next) => {
    const strCompress = 'lorem lorem lorem lorem lorem lorem'
    return res.status(200).json({
        message: 'Get Status~!',
        metadata: strCompress.repeat(1000000)
    })
})

// handle error


module.exports = app