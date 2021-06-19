module.exports = {
	name: 'beep',
	description: 'Beep!',
	async execute(message) {
		await message.channel.send('Boop.');
	},
};
