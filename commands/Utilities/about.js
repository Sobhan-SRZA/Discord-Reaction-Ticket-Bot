exports.run = async (bot, message, args, functions) => {
    //about bot
const Discord = require('discord.js');
const moment = require("moment");
    let infoEmbed = new Discord.MessageEmbed()
      infoEmbed.setColor("RANDOM");
      infoEmbed.setTitle(`About \`${bot.user.username}\``);
      infoEmbed.addField(":ping_pong: Ping",`β\`${Math.round(bot.ws.ping)}ms\``,true);
      infoEmbed.addField("π Uptime", `β\`${moment.duration(bot.uptime)}\``,true);
      infoEmbed.addField(":file_cabinet: Memory",`β\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
            2
          )}mb\``,true);
      infoEmbed.addField("ποΈ Servers",`β\`${bot.guilds.cache.size}\``, true);
      infoEmbed.addField(":busts_in_silhouette: Users",`β\`${bot.users.cache.size}\``,true);
      infoEmbed.addField("ποΈ API Latency",`β\`${bot.ws.ping}ms\``,true);
      infoEmbed.addField(":robot: Version",`β\`Noob 2.1.0\``,true);
      infoEmbed.addField("π Discord.js",`β\`v12.5.3\``,true);
      infoEmbed.addField(":green_book: Node",`β\`16.2.1\``,true);
      infoEmbed.addField("π¨π»βπ¨ Create",`β\`By β’οΈSizar Team [Mr.SIN RE#1528]\``,true);
      infoEmbed.setTimestamp();
      infoEmbed.setFooter(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL()}`);
            message.channel.send(infoEmbed)
    

}
exports.help = {
    name: "about",
    aliases: ["info","about"]
}