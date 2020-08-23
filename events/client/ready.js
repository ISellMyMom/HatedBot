const { prefix } = require("../../data/config.json");

module.exports = async bot => {
     console.log(`${bot.user.username} is online`)
     console.log(`Bot invite: https://discordapp.com/oauth2/authorize?client_id=${bot.user.id}&scope=bot&permissions=0`)

    let statuses = [
        "Dorian Popa",
        `${prefix}help`,
        `BBC`,
        `Netflix and chill with your GF`,
        `your pussy`,
        `Map 1`,
        `porn`
    ]
    
    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "WATCHING"});

    }, 5000)

}