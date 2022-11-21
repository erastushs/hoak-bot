const commands = require("../config/commandHandler");
const config = require("../utils/config.json");

module.exports = {
  name: "messageCreate",
  execute(msg, bot) {
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
    if (args == "") return;
    if (!commands.has(args[0])) return;
    commands.get(args[0]).execute(msg, args, bot);
  },
};
