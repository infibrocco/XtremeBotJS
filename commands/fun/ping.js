module.exports = {
	name: 'ping',
	description: 'Ping!',
	async execute(message) {
		let msg = await message.reply('Pinging...');
		await msg.edit(
			`Pong! Message round-trip took ${msg.createdTimestamp - message.createdTimestamp}ms.`
		);
		//await message.channel.send('Pong.');
	},
};
