module.exports = {
  name: "guildMemberAdd",
  execute(member) {
    const welcome = require("../features/guildMemberAdd");
    welcome.execute(member);
  },
};
