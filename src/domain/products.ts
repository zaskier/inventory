import ICommandFactory from '../common/ICommandFactory'
import ICommandConfig from '../common/ICommandConfig'
import { CreateProduct } from '../commands/application/CreateGameCommand'

export class CRUDCommandFactory implements ICommandFactory {
  makeCommand = (config: ICommandConfig) => {
    // todo check add strict to tsconfig and fix all types
    if (config.commandName == CreateProduct.name) {
      return new CreateProduct(config.args)
    } else {
      console.log(config.commandName + '  ' + CreateProduct.name)
      throw new Error('Command not found!')
    }
  }
}
