module.exports = {
	name: 'userinfo',
	description: 'Display info about yourself.',
	async execute(message) {
		await message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};
