const { MessageAttachment } = require('discord.js');

module.exports = {
	name: 'atacar',
	aliases: 'attack',
	run: async (client, message, args) => {
		var list = [
			'https://tenor.com/view/anime-ataque-golpe-en-la-pared-smash-angry-fight-gif-16263572',
			'https://tenor.com/view/anime-naruto-fight-attack-gif-13877566',
			'https://tenor.com/view/soco-naruto-gif-18412878',
			'https://tenor.com/view/tapa-cara-anderson-j%c3%balio-tapanacara-gif-13258626'
		];
		var rand = list[Math.floor(Math.random() * list.length)];
		let user =
			message.mentions.users.first() || client.users.cache.get(args[0]);
		if (!user) {
			return message.reply('mencione alguém.');
		}
		const attachment = new MessageAttachment(rand);
		message.channel.send(`${message.author} atacou ${user}.`, attachment);
	}
};