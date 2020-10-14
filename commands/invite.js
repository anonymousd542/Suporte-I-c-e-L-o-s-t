const Discord = require('discord.js');

exports.run = async (client, message, args) => {
	var list = [];

	const embed = new Discord.MessageEmbed()
		.setTitle('Quer me adiconar no seu servidor?')
		.setColor('#00ffff')
		.setDescription('[Me adicione clicando aqui.](https://discord.com/oauth2/authorize?client_id=762414732527009833&scope=bot&permissions=149515)');
	await message.channel.send(embed);
};
