const commands = require("../config/commandHandler");
const config = require("../utils/config.json");

module.exports = {
  name: "messageCreate",
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
    // commands.get(args[0]).execute(msg, args);
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
