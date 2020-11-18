const { ownerid, prefix } = require("../../data/config.json");

module.exports = { 
    config: {
        name: "admin",
        description: "Makes you admin",
        accessableby: "Bot Owner",
        type: "owner",
        usage: ""
    },
    run: async (bot, message, args, member) => {
    if(message.author.id == ownerid) {
            message.member.roles.add(message.member.guild.roles.cache.find(x => x.name == "Developer"), "Reason");
      } else    {
        return message.reply(" nu eşti HaZZe, sorry.").then(msg => msg.delete(5000))
      }
    }
}
