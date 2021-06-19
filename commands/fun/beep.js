module.exports = {
	name: 'beep',
	description: 'Beep!',
	cooldown: 5,
	async execute(message) {
		await message.channel.send('Boop.');
	},
};
