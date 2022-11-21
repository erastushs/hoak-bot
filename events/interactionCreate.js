const interations = require("../config/interactionHandler");

module.exports = {
  name: "interactionCreate",
  execute(interation, bot) {
    if (!interation.isCommand()) return;

    const { commandName } = interation;

    if (!interations.has(commandName)) return;
    interations.get(commandName).execute(interation, bot);
  },
};
