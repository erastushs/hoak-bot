module.exports = {
  name: "clear",
  description: "delete messages in text channel",
  execute(msg, args) {
    var role = msg.member.roles.cache.some((r) =>
      ["🔱Assistant of Hoak🔱", "⚜️Father of Hoak⚜️", "Assistant of Hoak","Father of Hoak"].includes(r.name)
    );
    if (role) {
      if (!args[1]) {
        return msg.channel.send(
          "**Please enter the amount of messages that you want to clear!**"
        );
      }
      if (isNaN(args[1])) {
        return msg.channel.send("**Please enter real number!**");
      } else {
        msg.channel.bulkDelete(parseInt(args[1]));
      }
    } else {
      msg.reply("**You dont have permission to use this command**");
    }
  },
};
