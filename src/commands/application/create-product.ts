import ICommand from '../../common/ICommand'
import AppDataSource from '../../config/ormconfig'
import { Products } from '../../entity/Products'

export class CreateProduct implements ICommand {
  private product: Products

  constructor(product: Products) {
    this.product = product
  }

  public execute: any = () => {
    let product: Products = new Products()

    // for (let key of Object.keys(this.product)) {  //todo uncoment
    //   product[key] = this.product[key as keyof Products]
    // }

    const status = AppDataSource.manager
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
