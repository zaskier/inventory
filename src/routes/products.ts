var express = require('express')
var productsRouter = express.Router()
import * as AppProductCommands from '../commands/application/products'
import { Products } from '../entity/Products'

productsRouter.get('/', (req: any, res: any, next: any) => {
  res.send('Products')
})

const productCommandFactory = new AppProductCommands.ProductCommandFactory()

productsRouter.post('/create', (req: Request, res: any, next: any) => {
  const product: Products =
    //JSON.parse(req.query.game) //todo replace hardcoded data with request
    {
      id: 5,
      Name: 'giant s',
      Category: 'bike mtb',
    }
  const commandName = 'POSTCommand'

  const config = {
    commandName,
    args: product,
  }

  const command = productCommandFactory.makeCommand(config)
  const results = command.execute()
  const statusCode = results.status ? 200 : 500

  res.status(statusCode).send({ status: 'item was added', item: product })
})

export default productsRouter
