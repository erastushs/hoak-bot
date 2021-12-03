module.exports = {
    name: "fam",
    description: "easter egg",
    execute(msg) {
      msg.channel.bulkDelete(1);
      msg.channel.send("**HOAK! HOAK! HOAK! SEMUANYA HOAK!**");
    },
  };
  