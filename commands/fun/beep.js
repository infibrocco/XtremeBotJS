const { Command } = require('discord.js-commando');

module.exports = class BeepCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'beep',
			description: 'Boop.',
			group: 'fun',
			memberName: 'beep',
		});
	}

	run(message, { text }) {
        return message.say(boop);
    }
};


// module.exports = {
// 	name: 'beep',
// 	description: 'Beep!',
// 	cooldown: 5,
// 	async execute(message) {
// 		await message.channel.send('Boop.');
// 	},
// };
