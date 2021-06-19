module.exports = {
	name: 'prune',
	description: 'Prune up to 99 messages.',
	async execute(message, args) {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return await message.reply('that doesn\'t seem to be a valid number.');
		} else if (amount <= 1 || amount > 100) {
			return await message.reply('you need to input a number between 1 and 99.');
		}

		await message.channel.bulkDelete(amount, true).catch(async err => {
			console.error(err);
			await message.channel.send('there was an error trying to prune messages in this channel!');
		});
	},
};
