const { Collection } = require("discord.js");
const fs = require("fs");

const interations = new Collection();

const files = fs.readdirSync("./commands/interactions").filter((file) => file.endsWith(".js"));

for (const file of files) {
  const interation = require(`../commands/interactions/${file}`);
  interations.set(interation.name, interation);
}

module.exports = interations;
