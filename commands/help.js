const { MessageEmbed, Collection } = require("discord.js");
const cooldown = new Collection();

module.exports = {
  name: "help",
  description: "daftar commands",
  execute(msg) {
    msg.channel.bulkDelete(1);
    if (cooldown.has(msg.author.id)) {
      msg.reply("Please dont spam. Wait 10 seconds");
    } else {
      const help = new MessageEmbed()
        .setTitle(" **My prefix is `hoak`. Use `hoak`<command> to call me or use `/`**")
        .setDescription(
          "**General Commands**\n`avatar` : :frame_photo: Display a user's avatar\n`f` : <:F_in_the_chat:890638001108041778>  Give a respect.\n`fam`: <:Hoak:796381557619294208>   Motto of HoakFamily.\n`info`: :notepad_spiral: Information about me.\n`ping`: :ping_pong: Test the bots response time.\n\n**Administrator Command**\n`clear`: :broom: Delete messages form a channel\n`kick`:<:emoji_10:802925963804540958>   Kick a member.\n`ban`: <:cheems_triggered:890637387556876349>  Ban a member."
        )
        .setColor("#eb3434");
      msg.channel.send({ embeds: [help] });
      cooldown.set(msg.author.id);
      setTimeout(() => {
        cooldown.delete(msg.author.id);
      }, 1000 * 10);
    }
  },
};
