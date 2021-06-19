const { Command } = require('discord.js-commando');

module.exports = class KickCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'kick',
			description: 'Kicks the mentioned member.',
			aliases: ['boot'],
			guildOnly: true,
			clientPermissions: ['KICK_MEMBERS'],
			userPermissions: ['KICK_MEMBERS'],
			group: 'mod',
			memberName: 'kick',
			args: [
				{
					key: 'member',
					prompt: 'Who would you like to kick?',
					type: 'member',
                    // default: 'something',
				},
			],
		});
	}
	async run(message, { member }) {
		member.kick();
		await message.reply(`Kicked ${member}`);
	}
};

// module.exports = {
// 	name: 'kick',
// 	description: 'Tag a member and kick them (but not really).',
// 	guildOnly: true,
// 	permissions: 'KICK_MEMBERS',
// 	async execute(message) {
// 		if (!message.mentions.users.size) {
// 			return await message.reply('you need to tag a user in order to kick them!');
// 		}

// 		const taggedUser = message.mentions.users.first();

// 		await message.channel.send(`You wanted to kick: ${taggedUser.username}`);
// 	},
// };
