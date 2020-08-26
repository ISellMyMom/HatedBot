const agata = require("../../data/agata.json");

module.exports = {
    config: {
        name: "agata",
        description: "Iti spun o replica de agatat",
        usage: "",
        category: "fun",
        accessableby: "Membru",
        aliases: ["agat"]
    },
    run: async (bot, message, args) => {
		var te_agat = agata.replica[Math.floor(Math.random() * agata.replica.length)];
		message.channel.send(te_agat);
    }
}
