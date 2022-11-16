const { bold, codeBlock } = require("@discordjs/builders");

module.exports = {
  name: "clear",
  description: "clear a message",
  option: [
    {
      name: "amount",
      description: "ammount message deleted",
      type: 10,
      required: true,
    },
  ],
  execute(interaction) {
    const role = interaction.member.roles.cache.some((r) =>
      ["🔱Assistant of Hoak🔱", "⚜️Father of Hoak⚜️", "Assistant of Hoak", "Father of Hoak"].includes(r.name)
    );
    const amount = interaction.options.getNumber("amount");
    if (role) {
      if (!amount) {
        return interaction.reply("**Please enter the amount of messages that you want to clear!**");
      }
      if (isNaN(amount)) {
        return interaction.reply("**Please enter real number!**");
      } else {
        interaction.reply(`DELETING MESSAGES ...`);
        setTimeout(() => {
          interaction.editReply(codeBlock("js", `${amount} messages have been deleted`));
        }, 1000 * 1);
        interaction.channel.bulkDelete(parseInt(amount));
        setTimeout(() => {
          interaction.channel.bulkDelete(1);
        }, 1000 * 3);
      }
    } else {
      interaction.reply("**You dont have permission to use this command**");
    }
  },
};
