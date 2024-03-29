module.exports = {
  name: 'clear',
  description: 'delete messages in text channel',
  execute(msg, args) {
    const role = msg.member.permissions.has('ADMINISTRATOR')
    if (role) {
      if (!args[1]) {
        return msg.channel.send('**Please enter the amount of messages that you want to clear!**')
      }
      if (isNaN(args[1])) {
        return msg.channel.send('**Please enter real number!**')
      } else {
        if (parseInt(args[1]) <= 100) {
          msg.channel.bulkDelete(args[1])
        } else {
          return msg.channel.send('**Sorry, just can only delete a maximum of 100 messages**')
        }
      }
    } else {
      msg.reply('**You dont have permission to use this command**')
    }
  }
}
