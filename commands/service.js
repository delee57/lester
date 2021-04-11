module.exports = {
    name: 'service',
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Packages')
        .setDescription('Here is our packages with their price and information.\nPlease keep in mind these are __paid__ services and therefor not free.```\n[£9,99] Basic Package:\nMoney: $500.000.000 (500 Million)\nLevel: 1-500\nUnlocks: All unlock and max stats```\n```[£14,99] Silver Package:\nMoney: $1.000.000.000 (1 Billion)\nLevel: 1-1000\nUnlocks: All unlocked and max stats\nExtras: Modded outfits```\n```[£24,99] Diamond Package:\nMoney: $2.000.000.000 (2 Billion)\nLevel: 1-2000\nUnlocks: All unlocked and max stats\nExtras: Modded outfits and Modded cars```\n```[£29,99] Ultimate Package:\nMoney: $2.500.000.000 (2.5 Billion)\nLevel: 1-4000\nUnlocks: All unlocked and max stats\nExtras: Modded outfits and Modded cars```\n```[£39,99] Mega Package:\nMoney: $5.000.000.000 (5 Billion)\nLevel: 1-8000\nUnlocks: All unlocked and max stats\nExtras: Modded outfits and Modded cars```')
        .setAuthor('Lester', 'https://i.imgur.com/0YnWlUv.png' )
        .setTimestamp()
        .setFooter('Lunax  |  Modding Services', 'https://i.imgur.com/W8nGbml.png');

        message.channel.send(newEmbed);
    }
}
