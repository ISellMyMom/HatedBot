const { MessageEmbed } = require("discord.js")
const { cyan } = require("../../data/colours.json");

module.exports = {
    config: {
        name: "serverinfo",
        description: "Afişează informaţii despre server",
        usage: ``,
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["si", "serverdesc"]
    },
    run: async (bot, message, args) => {
    let sEmbed = new MessageEmbed()
        .setColor(cyan)
        .setTitle("Server Info")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
        .addField("**Nume:**", `${message.guild.name}`, true)
        .addField("**Fondator:**", `${message.guild.owner}`, true)
        .addField("**Membrii:**", `${message.guild.memberCount}`, true)
        .addField("**Roluri:**", `${message.guild.roles.size}`, true)
        .setFooter(`HatedBot | Footer`, bot.user.displayAvatarURL);
    message.channel.send(sEmbed);
    }
}
