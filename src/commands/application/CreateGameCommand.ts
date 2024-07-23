import ICommand from '../../common/ICommand'
import AppDataSource from '../../config/ormconfig'
import { Products } from '../../entity/Products'

export class CreateProduct implements ICommand {
  private product: Products

  constructor(product: Products) {
    this.product = product
  }

  public execute: any = () => {
    //todo fix all types
    let product = new Products()
    console.log('happening1')
    for (let key of Object.keys(product)) {
      console.log(this.product[key])
      console.log(product[key])

      product[key] = this.product[key]
    }

    const status = AppDataSource.manager //it is new
      .save(product)
      .then(product => {
        console.log(`product added success: ${product.id}`)
        return true
      })
      .catch(err => {
        console.log(product)

        console.log(`error adding product: ${err}`)
        return false
      })

    return { status }
  }
}
