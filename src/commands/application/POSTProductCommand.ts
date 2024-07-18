import { Products } from '../../entity/Products'
import ICommand from '../../common/ICommand'
import * as DomainProductCommands from '../../domain/products'

export class POSTCommand implements ICommand {
  private product: Products

  constructor(product: Products) {
    this.product = product
  }

  public execute = () => {
    const crudCommandFactory = new DomainProductCommands.CRUDCommandFactory()

    const commandName = DomainProductCommands.CRUDCommandFactory.name // todo check

    const config = {
      commandName,
      args: this.product,
    }
    const command = crudCommandFactory.makeCommand(config)

    const results = command.execute()

    return results.status ? { status: true } : { status: false }
  }
}
