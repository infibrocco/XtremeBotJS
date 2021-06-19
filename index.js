const Discord = require('discord.js');
const fs = require('fs');
require('dotenv').config();
const config = require('./config');

const client = new Discord.Client();
client.commands = new Discord.Collection();

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

	if (command.required_args != args.length) {
		let reply = `You didn't provide enough arguments, ${message.author}!\nRequired arguments: ${command.required_args}`
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

client.login(config.token);
