module.exports = {
	name: 'kick',
	description: 'Tag a member and kick them (but not really).',
	async execute(message) {
		if (!message.mentions.users.size) {
			return await message.reply('you need to tag a user in order to kick them!');
		}

		const taggedUser = message.mentions.users.first();

		await message.channel.send(`You wanted to kick: ${taggedUser.username}`);
	},
};
