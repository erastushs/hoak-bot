const { codeBlock } = require('@discordjs/builders')

module.exports = {
  name: 'clear',
  description: 'clear a message',
  option: [
    {
      name: 'amount',
      description: 'ammount message deleted',
      type: 10,
      required: true
    }
  ],
  execute(interaction) {
    const role = interaction.member.permissions.has('ADMINISTRATOR')
    const amount = interaction.options.getNumber('amount')
    if (role) {
      if (!amount) {
        return interaction.reply('**Please enter the amount of messages that you want to clear!**')
      } else {
        interaction.reply('DELETING MESSAGES ...')
        setTimeout(() => {
          interaction.editReply(codeBlock('js', `${amount} messages have been deleted`))
        }, 1000 * 1.5)
        interaction.channel.bulkDelete(parseInt(amount))
        setTimeout(() => {
          interaction.deleteReply()
        }, 1000 * 4)
      }
    } else {
      interaction.reply('**You dont have permission to use this command**')
    }
  }
}
