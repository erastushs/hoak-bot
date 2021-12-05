//list const
const { Client } = require("discord.js");
const bot = new Client();
const config = require("./config.json");
const fs = require("fs");

//greeting selamat datang
bot.on("guildMemberAdd", (member) => {
  const welcome = require("./features/guildMemberAdd");
  welcome.execute(member);
});
bot.on("guildMemberRemove", (member) => {
  const leave = require("./features/guildMemberRemove");
  leave.execute(member);
});

//panggil folder events
const eventFiles = fs
  .readdirSync("./events")
  .filter((file) => file.endsWith(".js"));
for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  if (event.once) {
    bot.once(event.name, (args) => event.execute(args, bot));
  } else {
    bot.on(event.name, (args) => event.execute(args, bot));
  }
}

//bot activity
bot.on("ready", () => {
  console.log(` ${bot.user.tag} is online `);
  bot.user
    .setActivity("hoakhelp", {
      type: "PLAYING",
    })
    .catch(console.error);
});

bot.login(process.env.TOKEN)