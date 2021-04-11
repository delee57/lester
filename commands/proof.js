module.exports = {
    name: 'proof',
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('🎉 | Finished Order')
        .setDescription('Here is proof of <@756514492296200242> order. ```\nPackage: [£9.99] Basic Package\n\nChosen Level: 300\nUnlocks: Max stats and all unlocked\nChosen Money: $500.000.000 (500 Million)\nChosen Extras: No extras are incluced```')
        .setAuthor('Lester', 'https://i.imgur.com/0YnWlUv.png' )
        .setImage('https://i.imgur.com/R9s1lR9.jpg')
        .setTimestamp()
        .setFooter('Lunax  |  Modding Services', 'https://i.imgur.com/W8nGbml.png');

        message.channel.send(newEmbed);
    }
}