import express, { Express, Request, Response } from 'express'
import productsRouter from './routes/products'
const morgan = require('morgan')
const app: Express = express()

app.use('/products', productsRouter)
app.use(morgan('tiny'))
app.get('/', (req: Request, res: Response) => {
  res.status(200).json('Hello from the server!!!v1.0.0')
})

app.listen(4000, () => {
  console.log(`App is listening on port 4000`)
})
