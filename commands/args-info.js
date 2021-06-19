module.exports = {
	name: 'args-info',
	description: 'Information about the arguments provided.',
	async execute(message, args) {
		if (!args.length) {
			return await message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		} else if (args[0] === 'foo') {
			return await message.channel.send('bar');
		}

		await message.channel.send(`First argument: ${args[0]}`);
	},
};
