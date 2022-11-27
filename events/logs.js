module.exports = {
  name: "logs",
  execute(bot) {
    const welcome = require("../features/logs");
    welcome.execute(bot);
  },
};
