const Discord = require('discord.js');
const fs = require('fs');
require('dotenv').config();
const config = require('./config');

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async message => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	if (!client.commands.has(commandName)) return;

	const command = client.commands.get(commandName)

	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.requiredArgs && command.requiredArgs != args.length) {
		let reply = `You didn't provide enough arguments, ${message.author}!\nRequired arguments: ${command.requiredArgs}`
		if (command.usage) {
			reply += `Proper usage: \`${config.prefix + command.name + ' ' + command.usage}\``
		}
		return await message.channel.send(reply);
	}

	try {
		await command.execute(message, args);
	} catch (error) {
		console.error(error);
		await message.reply('there was an error trying to execute that command!');
	}
});


require('./server')();

try {
	client.login(config.token);
} catch(error) {
	console.error('Bot couldn\'t login!\n', error);
	process.exit()
}