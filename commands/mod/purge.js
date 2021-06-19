const { Command } = require('discord.js-commando');

module.exports = class PurgeCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'purge',
			description: 'Deletes the specified amount of messages.',
			aliases: ['delete'],
			guildOnly: true,
			clientPermissions: ['MANAGE_MESSAGES'],
			userPermissions: ['MANAGE_MESSAGES'],
			group: 'mod',
			memberName: 'purge',
            args: [
				{
					key: 'amount',
					prompt: 'How many messages would you like to delete? (between 2 and 99)',
					type: 'integer',
                    validate: amount => amount <= 100,
                    // default: 'something',
				},
			],
		});
	}
	async run(message, {amount}) {
        message.channel.bulkDelete(amount, true)
        .then(_ => {
            message.reply(`Deleted \`${amount}\` messages!`);
        })
        .catch(err => {
            console.error(err);
            message.reply('there was an error trying to prune messages in this channel!');
        });
	}
};
