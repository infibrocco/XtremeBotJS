const { Command } = require('discord.js-commando');

module.exports = class BanCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'ban',
			description: 'Bans the mentioned member.',
			aliases: ['condemn'],
			guildOnly: true,
			clientPermissions: ['BAN_MEMBERS'],
			userPermissions: ['BAN_MEMBERS'],
			group: 'mod',
			memberName: 'ban',
			args: [
				{
					key: 'member',
					prompt: 'Who would you like to ban?',
					type: 'member',
                    // default: 'something',
				},
			],
		});
	}
	async run(message, { member }) {
		member.ban();
		await message.say(`Banned ${member}`);
	}
};
