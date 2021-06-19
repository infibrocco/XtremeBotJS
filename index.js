const Discord = require('discord.js');
const config = require('./config');
require('dotenv').config();

// const helpcommand = require('./help');

const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async message => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();


	if (!client.commands.has(command)) return;

	try {
		await client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		await message.reply('there was an error trying to execute that command!');
	}
});


require('./server')();

client.login(config.token);