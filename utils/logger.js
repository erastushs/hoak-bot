const pino = require('pino')

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'SYS:yyyy-mm-dd HH:mm:ss',
      ignore: 'pid,hostname',
      singleLine: false,
      hideObject: true,
      customColors: 'info:blue,warn:yellow,error:red'
    }
  }
})

module.exports.logger = logger
