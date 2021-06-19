const Discord = require('discord.js');
const fs = require('fs');
require('dotenv').config();
const config = require('./config');

const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
	commandPrefix: 'x.',
	owner: '557933021844733963',
	invite: '',
	disableEveryone: true
});

client.registry
	// Registers your custom command groups
	.registerGroups([
		['fun', 'Fun commands'],
		['mod', 'Moderation commands'],
		['util', 'Utility commands'],
		['other', 'Other commands']
	])

	// Registers all built-in groups, commands, and argument types
	.registerDefaults()

	// Registers all of your commands in the ./commands/ directory
	.registerCommandsIn(path.join(__dirname, 'commands'));

// const client = new Discord.Client();
// client.commands = new Discord.Collection();
// client.cooldowns = new Discord.Collection();

// const commandFolders = fs.readdirSync('./commands');

// for (const folder of commandFolders) {
// 	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
// 	for (const file of commandFiles) {
// 		const command = require(`./commands/${folder}/${file}`);
// 		client.commands.set(command.name, command);
// 	}
// }

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
	client.user.setActivity('with commands');
});

client.on('error', console.error);


// client.on('message', async message => {
// 	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

// 	const args = message.content.slice(config.prefix.length).trim().split(/ +/);
// 	const commandName = args.shift().toLowerCase();

// 	if (!client.commands.has(commandName)) return;

// 	const command = client.commands.get(commandName)

// 	if (command.guildOnly && message.channel.type === 'dm') {
// 		return message.reply('I can\'t execute that command inside DMs!');
// 	}

// 	if (command.permissions) {
// 		const authorPerms = message.channel.permissionsFor(message.author);
// 		if (!authorPerms || !authorPerms.has(command.permissions)) {
// 			return message.reply('You can not do this!');
// 		}
// 	}

// 	if (command.requiredArgs && command.requiredArgs != args.length) {
// 		let reply = `You didn't provide enough arguments, ${message.author}!\nRequired arguments: ${command.requiredArgs}`
// 		if (command.usage) {
// 			reply += `Proper usage: \`${config.prefix + command.name + ' ' + command.usage}\``
// 		}
// 		return await message.channel.send(reply);
// 	}

// 	try {
// 		await command.execute(message, args);
// 	} catch (error) {
// 		console.error(error);
// 		await message.reply('there was an error trying to execute that command!');
// 	}
// });


require('./server')();

client.login(config.token).catch((err) => {console.error("Bot couldn't login!\n", err); process.exit(1)});
