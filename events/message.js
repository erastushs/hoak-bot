const commands = require("../commands/commandHandler");
const config = require("../config.json");

module.exports = {
  name: "message",
  execute(msg) {
    let args = msg.content.substring(config.prefix.length).split(" ");

    switch (args[0]) {
      case "fam":
        commands.get("fam").execute(msg);
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
    }
  },
};
