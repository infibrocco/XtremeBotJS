// const { Command } = require('discord.js-commando');

// module.exports = class KickCommand extends Command {
// 	constructor(client) {
// 		super(client, {
// 			name: 'kick',
// 			description: 'Kicks the mentioned member.',
// 			aliases: ['boot'],
// 			guildOnly: true,
// 			clientPermissions: ['KICK_MEMBERS'],
// 			userPermissions: ['KICK_MEMBERS'],
// 			group: 'mod',
// 			memberName: 'kick',
// 			args: [
// 				{
// 					key: 'member',
// 					prompt: 'Who would you like to kick?',
// 					type: 'member',
//                     // default: 'something',
// 				},
// 			],
// 		});
// 	}
// 	async run(message, { member }) {
// 		member.kick();
// 		await message.reply(`Kicked ${member}`);
// 	}
// };

// module.exports = {
// 	name: 'avatar',
// 	description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
// 	async execute(message) {
// 		if (!message.mentions.users.size) {
// 			return await message.channel.send(`Your avatar: ${message.author.displayAvatarURL({ dynamic: true })}`);
// 		}

// 		const avatarList = message.mentions.users.map(user => {
// 			return `${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`;
// 		});

// 		await message.channel.send(avatarList);
// 	},
// };
