module.exports = {
  name: "ping",
  description: "ping command",
  execute(interaction) {
    interaction.reply(`My latency is ${Date.now() - interaction.createdTimestamp}ms.`);
  },
};
