const { SlashCommandBuilder } = require("@discordjs/builders");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { token, clientId, guildId } = require("./utils/config.json");

const commands = [
  new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("display a user's avatar")
    .addUserOption((option) => option.setName("user").setDescription("The member target").setRequired(false)),
  new SlashCommandBuilder()
    .setName("ban")
    .setDescription("ban a member")
    .addUserOption((option) => option.setName("user").setDescription("The member target").setRequired(true)),
  new SlashCommandBuilder()
    .setName("clear")
    .setDescription("delete messages form a channel")
    .addNumberOption((option) =>
      option
        .setName("amount")
        .setDescription("the number of messages to be deleted")
        .setMinValue(1)
        .setMaxValue(100)
        .setRequired(false)
    ),
  new SlashCommandBuilder().setName("f").setDescription("f to pay respect"),
  new SlashCommandBuilder()
    .setName("fam")
    .setDescription("HOAK HOAK HOAK SEMUANYA HOAK!")
    .addUserOption((option) => option.setName("user").setDescription("The member target").setRequired(false)),
  new SlashCommandBuilder().setName("help").setDescription("Need Help?"),
  new SlashCommandBuilder().setName("info").setDescription("Information about me"),
  new SlashCommandBuilder()
    .setName("kick")
    .setDescription("kick a member")
    .addUserOption((option) => option.setName("user").setDescription("The member target").setRequired(true)),
  new SlashCommandBuilder().setName("ping").setDescription("Test the bots response time."),
].map((command) => command.toJSON());

const rest = new REST({ version: "9" }).setToken(token);

rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then(() => console.log("succesfully registered aplication commands."))
  .catch(console.error);
