const Discord = require('discord.js');
const client = new Discord.Client();

client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
}
 
 
client.on('ready', () => {
    console.log('Lester is online!');

    setInterval(() => {
        const statuses = [
            `Lunax | Modding Services`
        ]

        const status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, { type: "WATCHING"}) // Can Be WATCHING, STREAMING, LISTENING
    }, 2000) // Second You Want to Change Status, This Cahnges Every 2 Seconds

});


 
client.on('message', message => {

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'proof'){

        client.commands.get('proof').execute(message, args, Discord);
    }
    
    if(command === 'service'){

        client.commands.get('service').execute(message, args, Discord);
    }

});


client.login('process.env.DSL_TOKEN')
