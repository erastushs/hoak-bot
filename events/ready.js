module.exports = {
  name: "ready",
  execute(bot) {
    console.log(` ${bot.user.tag} is online `);
    bot.user.setActivity("hoakhelp", {
      type: "LISTENING",
    });
  },
};
