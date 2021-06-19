module.exports = {
	name: 'args',
	description: 'Information about the arguments provided.',
	usage: '<foo:str> [args:list]',
	required_args: 1,
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};
