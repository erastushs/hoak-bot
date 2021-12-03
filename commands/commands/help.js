const { MessageEmbed, Collection } = require("discord.js");
const cooldown = new Collection();

module.exports = {
  name: "help",
  description: "daftar commands",
  execute(msg) {
    if (cooldown.has(msg.author.id)) {
      msg.reply("Please dont spam. Wait 10 seconds");
    } else {
      const help = new MessageEmbed()
        .setTitle(" Hoak Fam Help Menu")
        .setDescription(
          "**My prefix is `hoak`. Use `hoak`<command> to call me** \n[info](https://s.id/HoakFam)    : Information about me\n[ping](https://s.id/HoakFamily) : bot latency test\n\n__**Administrator Command**__\n[clear](https://s.id/HoakFamily): Delete some messages in the text channel\n[kick](https://s.id/HoakFamily) : Remove member from server\n[ban](https://s.id/HoakFamily)  : Banned member from server"
        )
        .setColor("#eb3434");
      msg.channel.send(help);
      cooldown.set(msg.author.id);
      setTimeout(() => {
        cooldown.delete(msg.author.id);
      }, 1000 * 10);
    }
  },
};
