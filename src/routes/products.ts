var express = require('express')
var productsRouter = express.Router()
import * as AppProductCommands from '../commands/application/ProductCommandFactory'
import { Products } from '../entity/Products'

const productCommandFactory = new AppProductCommands.ProductCommandFactory()

productsRouter.post('/create', (req, res: any, next: any) => {
  const product: Products = req.body //JSON.parse

  const commandName = 'POSTCommand'

  const commandConfig = {
    //change name to just config
    commandName,
    args: product,
  }

  const command = productCommandFactory.makeCommand(commandConfig)
  const results = command.execute()
  const statusCode = results.status ? 200 : 500

  res.status(statusCode).send({ status: 'item was added', item: product })
})

export default productsRouter
