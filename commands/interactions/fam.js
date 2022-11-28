module.exports = {
  name: 'fam',
  description: 'motto of hoakfamily',
  execute(interaction) {
    const member = interaction.options.getUser('user') || interaction.user
    interaction.reply('succes')
    interaction.deleteReply()
    interaction.channel.send(`${member} **HOAK! HOAK! HOAK! SEMUANYA HOAK!**`)
  }
}
