const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "guildMemberAdd",
  description: "greeting welcome",
  execute(member) {
    const welcomeEmbed = new MessageEmbed();

    welcomeEmbed.setColor("#5cf000");
    welcomeEmbed.setDescription(
      `🔰 THANK YOU FOR JOINING 🔰 \n====================================\nHello ${member} Welcome To ${member.guild.name} \n♦️ Please go to <#504845048618287104> to get a role\n♦️ Please obey the rules you know\n♦️ Hope you don't do anything stupid that can get you kicked out of this server\n♦️ If there is something you want to ask\nplease contact <@398542246523437066>  or other admins, Thank you\n====================================`
    );
    welcomeEmbed.setThumbnail(member.displayAvatarURL({ size: 1024, dynamic: true }));
    welcomeEmbed.setImage("https://i.gifer.com/Buo.gif");

    member.guild.channels.cache.find((ch) => ch.name === "👋-welcome-leave").send({ embeds: [welcomeEmbed] });
  },
};
