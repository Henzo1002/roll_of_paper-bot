const { Client, Intents, ReactionEmoji } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = 'r';



//haupt ding
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


client.on('message', message => {
	if (message.content === 'peepee') {
		message.reply('I love peepee osu, if you disagree on my opinion ill fucking stab your dumb dog <:YanK1:421040453912363009><:YanK2:421040453782208527><:YanK3:421040454147244032>🐶<:YanK4:421040453845123084>');
	}
});

client.on('message', message => {
	if (message.content === 'i forgor') {
		message.reply('<:iforgor:869465394262441994>');
		message.react('<:iforgor:869465394262441994>');
	}
});

client.on('message', message => {
	if (message.content === 'i rember') {
		message.reply('<:irember:869465367322427493>');
		message.react('<:irember:869465367322427493>');
	}
});

client.on('message', message => {
	if (message.content === '<:irember:869465367322427493>') {
		message.react('<:irember:869465367322427493>');
	}
});

client.on('message', message => {
	if (message.content === '<:iforgor:869465394262441994>') {
		message.react('<:iforgor:869465394262441994>');
	}
});

client.on('message', message => {
	if (message.content === 'i hate roll_of_paper bot') {
		message.reply('<:sbetdepressed:798439572484390923>');
	}
});

client.on('message', message => {
	if (message.content === 'Henzo') {
		message.stickers('');
	}
});





client.login(process.env.token);
