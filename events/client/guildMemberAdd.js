const { prefix, ch } = require("../../data/config.json");

module.exports = async (bot, member, message) => {
    const channel = bot.channels.cache.find(channel => channel.name === ch.welcome);
    const Welcome = [
        "bun venit! (rău ai nimerit).",
        "a bătut cale lungă până să ajungă aici.",
        "a venit însfârşit.",
        "este acum un faimos."
    ];
    let WelcomeMessage = Welcome[Math.floor(Math.random()*Welcome.length)];
    member.roles.add(member.guild.roles.cache.find(x => x.name == "Membru"), "Reason");
    channel.send(`<@${member.user.id}> ${WelcomeMessage} `);
    console.log(`[+] ${member.user.tag}`);

} 