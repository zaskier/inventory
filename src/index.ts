const express = require('express')
import productsRouter from './routes/products'
import AppDataSource from './config/ormconfig'
import { Products } from './entity/Products'
const app = express()
const PORT = 4000

app.use(express.json())
app.use(express.urlencoded())
app.use('/products', productsRouter)

app.listen(PORT, () => console.log(`Running Express Server on Port ${PORT}!`))

AppDataSource
