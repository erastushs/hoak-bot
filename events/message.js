const commands = require("../commands/commandHandler");
const config = require("../config.json");

module.exports = {
  name: "message",
  execute(msg) {
    if (msg.author.bot) return;

    //panggil prefix
    let prefixChoose = "";
    config.prefixes.forEach((prefix) => {
      if (msg.content.startsWith(prefix)) {
        prefixChoose = prefix;
      }
    });
    if (!prefixChoose) return;
    let args = msg.content.substring(prefixChoose.length).split(" ");

    //execute command
    switch (args[0]) {
      case "fam":
        commands.get("fam").execute(msg, args);
        break;

      case "ping":
        commands.get("ping").execute(msg);
        break;

      case "info":
        commands.get("info").execute(msg);
        break;

      case "help":
        commands.get("help").execute(msg);
        break;

      case "clear":
        commands.get("clear").execute(msg, args);
        break;

      case "kick":
        commands.get("kick").execute(msg);
        break;

      case "ban":
        commands.get("ban").execute(msg);
        break;

      case "f":
        commands.get("f").execute(msg);
        break;

      case "avatar":
        commands.get("avatar").execute(msg, args);
        break;

    }
  },
};
