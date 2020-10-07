const { prefix } = require("../../data/config.json");
const roleClaim = require("../../handlers/role-claim.js")
module.exports = async bot => {
     console.log(`${bot.user.username} is online`)
     console.log(`Bot invite: https://discordapp.com/oauth2/authorize?client_id=${bot.user.id}&scope=bot&permissions=0`)

    let statuses = [
        "Dorian Popa",
        `${prefix}help`,
        `BBC`,
        `Netflix with your GF`,
        `your pussy`,
        `Map 1`,
        `porn`
    ]
    bot.user.setStatus('dnd');
    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "WATCHING"});
    }, 5000)
    roleClaim(bot);

}
