const { MessageEmbed } = require("discord.js");
const { prefix } = require("../../data/config.json");
const { readdirSync } = require("fs")
const { stripIndents } = require("common-tags")
const { cyan } = require("../../data/colours.json")

module.exports = {
    config: {
        name: "help",
        aliases: ["ajutor", "comenzi", "commands"],
        usage: "comanda",
        category: "miscellaneous",
        description: "Afiseaza lista cu comenzile care sunt puse la dispozitie de catre bot.",
        accessableby: "Membru"
    },
    run: async (bot, message, args) => {
        const embed = new MessageEmbed()
            .setColor(cyan)
            .setAuthor(`${message.guild.me.displayName} Help`, message.guild.iconURL)
            .setThumbnail(bot.user.displayAvatarURL)

        if(!args[0]) {
            const categories = readdirSync("./commands/")

            embed.setDescription(`Acestea sunt comenzile disponibile pentru ${message.guild.me.displayName}\nPrefix-ul bot-ului este: **${prefix}**`)
            embed.setFooter(`© ${message.guild.me.displayName} | Comenzi: ${bot.commands.size}`, bot.user.displayAvatarURL);

            categories.forEach(category => {
                const dir = bot.commands.filter(c => c.config.category === category)
                const capitalise = category.slice(0, 1).toUpperCase() + category.slice(1)
                try {
                    embed.addField(`❯ ${capitalise} [${dir.size}]:`, dir.map(c => `\`${c.config.name}\``).join(" "))
                } catch(e) {
                    console.log(e)
                }
            })

            return message.channel.send(embed)
        } else {
            let command = bot.commands.get(bot.aliases.get(args[0].toLowerCase()) || args[0].toLowerCase())
            if(!command) return message.channel.send(embed.setTitle("Comanda Invalida.").setDescription(`Tastează \`${prefix}help\` pentru a vedea lista de comenzi.`))
            command = command.config

            embed.setDescription(stripIndents`Prefixul botului este: \`${prefix}\`\n
            **Comanda:** ${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}
            **Descriere:** ${command.description || "No Description provided."}
            **Utilizare:** ${command.usage ? `\`${prefix}${command.name} ${command.usage}\`` : "Nimic"}
            **Accesibiltate:** ${command.accessableby || "Membru"}
            **Alias:** ${command.aliases ? command.aliases.join(", ") : "Nimic"}`)

            return message.channel.send(embed)
        }
    }
}