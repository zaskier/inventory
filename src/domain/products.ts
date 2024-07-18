import ICommandFactory from '../common/ICommandFactory'
import ICommandConfig from '../common/ICommandConfig'
import { CreateProduct } from '../commands/application/create-product'

export class CRUDCommandFactory implements ICommandFactory {
  makeCommand: any = (config: ICommandConfig) => {
    // todo check type
    // if (config.commandName == CreateProduct.name) { //todo uncomment
    if (true) {
      return new CreateProduct(config.args)
    } else {
      throw new Error('Command not found!')
    }
  }
}
