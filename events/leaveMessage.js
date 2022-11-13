module.exports = {
  name: "guildMemberRemove",
  execute(member) {
    const leave = require("../features/guildMemberRemove");
    leave.execute(member);
  },
};
