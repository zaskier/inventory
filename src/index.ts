import express, { Express, Request, Response } from 'express'
import productsRouter from './routes/products'
import AppDataSource from './config/ormconfig'
import { Products } from './entity/Products'
const app: Express = express()

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ hi: 'XD', resdp: AppDataSource.manager.find(Products) }) //todo move else
  // res.status(200).json('Hello from the server!!!v1.0.0')//todo uncoment
})

app.use('/products', productsRouter)

AppDataSource

app.listen(4000, () => {
  console.log(`App is listening on port 4000`)
})
