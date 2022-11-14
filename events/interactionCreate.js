const interations = require("../config/interactionHandler");

module.exports = {
  name: "interactionCreate",
  execute(interation) {
    if (!interation.isCommand()) return;

    const { commandName } = interation;

    if (!interations.has(commandName)) return;
    interations.get(commandName).execute(interation);
  },
};
