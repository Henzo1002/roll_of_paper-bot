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

client.on('message', message => {
	if (message.content === 'swagmoneygaming.com') {
		message.reply('<:sbetflushed:793643748851843102> best website on earth, if you disagree ill shoot your fucking cat<:sbetgun:799132599922589776>. https://www.swagmoneygaming.com <:sbetsexy:792311017107488769> (my favorite)');
	}
});



client.login(process.env.token);
