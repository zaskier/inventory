// const express = require('express')

// const app = express()

// app.get('/', (_, res) => res.send('inventory v1.0.0'))

// app.listen(4000, () => {
//   console.log('started')
// })

import express, { Express, Request, Response } from 'express'

const app: Express = express()

app.get('/', (req: Request, res: Response) => {
  res.status(200).json('Hello from the server!!!v1.0.0')
})

app.listen(4000, () => {
  console.log(`App is listening on port 4000`)
})
