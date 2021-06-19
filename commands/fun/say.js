const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'say',
			description: 'Replies with the text you provide.',
			aliases: ['cat', 'parrot', 'copy', 'repeat'],
			group: 'fun',
			memberName: 'say',
            args: [
				{
					key: 'text',
					prompt: 'What text would you like the bot to say?',
					type: 'string',
                    // default: '...',
				},
			],
		});
	}

	run(message, { text }) {
        return message.say(text);
    }
};
