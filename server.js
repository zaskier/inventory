const express = require('express')

const app = express()

app.get('/', (_, res) => res.send('inventory v1.0.0'))

app.listen(4000, () => {
  console.log('started')
})
