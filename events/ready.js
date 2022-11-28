const { logger } = require('../utils/logger.js')
module.exports = {
  name: 'ready',
  execute(bot) {
    logger.info(` ${bot.user.tag} is online `)
    bot.user.setActivity('hoakhelp', {
      type: 'LISTENING'
    })
  }
}
