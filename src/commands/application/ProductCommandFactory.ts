import { POSTCommand } from './POSTProductCommand'
import ICommandFactory from '../../common/ICommandFactory'
import ICommandConfig from '../../common/ICommandConfig'

export class ProductCommandFactory implements ICommandFactory {
  makeCommand = (config: ICommandConfig) => {
    console.log(config.commandName + '  vs  ' + POSTCommand.name)
    if (config.commandName == POSTCommand.name) {
      return new POSTCommand(config.args)
    } else {
      throw new Error('Command not found!')
    }
  }
}
