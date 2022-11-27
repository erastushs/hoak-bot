module.exports = {
  name: "ready",
  execute(bot) {
    const welcome = require("../features/logs");
    welcome.execute(bot);
  },
};
