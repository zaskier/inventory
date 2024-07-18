import { DataSource } from 'typeorm'

// Using environment variables
import dotenv from 'dotenv'
dotenv.config()

const AppDataSource = new DataSource({
  type: 'mongodb',
  host: 'mongo',
  port: 27017,
  database: 'project',

  synchronize: true,
  logging: false,
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
})

AppDataSource.initialize()
  .then(() => {
    console.log(AppDataSource.entityMetadatas)
    console.log(`Data Source has been initialized`)
  })
  .catch(err => {
    console.error(`Data Source initialization error`, err)
  })

export default AppDataSource
