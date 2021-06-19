const { Command } = require('discord.js-commando');

module.exports = class CallCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'call',
			description: 'Calls the member you mentioned.',
			aliases: ['ring'],
			group: 'fun',
			memberName: 'call',
            guildOnly: true,
            args: [
				{
					key: 'member',
					prompt: 'Who would you like to call?',
					type: 'member',
                    // default: 'something',
				},
			],
		});
	}

	async run(message, { member }) {
        return await message.say(`${message.author} is calling ${member}!`);
    }
};
