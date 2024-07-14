var express = require('express')
var productsRouter = express.Router()

productsRouter.get('/', (req: any, res: any, next: any) => {
  res.send('Products')
})

export default productsRouter
