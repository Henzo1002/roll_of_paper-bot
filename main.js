const { Client, Intents, ReactionEmoji } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = 'r';



client.on("messageCreate", msg => msg.react('🧻'));



client.once('ready', () => {
     console.log('haha less go im online');
});

client.on('message', message => {
	if (message.content === 'toilet paper') {
		message.reply('🧻');
	}
});

client.on('message', message => {
	if (message.content === 'roll of paper') {
		message.reply('🧻');
	}
});

client.on('message', message => {
	if (message.content === 'roll_of_paper') {
		message.reply('🧻');
	}
});

client.on('message', message => {
	if (message.content === ':roll_of_paper:') {
		message.reply('🧻');
	}
});



client.login(provess.env.token);
