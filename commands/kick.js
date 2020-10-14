const Discord = require('discord.js');
module.exports = {
	name: 'kick',
	category: 'moderation',
	description: 'expulsar algum membro',
	run: async (client, message, args, guild) => {
		let kicked =
			message.mentions.users.first() || client.users.resolve(args[0]);
		let reason = args.slice(1).join(' ');

		// MESSAGES

		if (!kicked) {
			let kickinfoembed = new Discord.MessageEmbed()
				.setTitle('Explusar algum membro')
				.setDescription(
					`**Description:** Expulsar o membro. \n` +
						'**Sub Commands:**\n' +
						'\n' +
						'**Usage:**\n' +
						'-kick [user] (reason) \n' +
						'**Exemplos:** \n' +
						'-kick <@597253939469221891> spam'
				)
				.setColor('#2C2F33');
			message.channel.send(kickinfoembed);

			return;
		}

		if (message.author === kicked) {
			let sanctionyourselfembed = new Discord.MessageEmbed()
				.setDescription(`Você não pode se selecionar`)
				.setColor('#2C2F33');
			message.channel.send(sanctionyourselfembed);

			return;
		}

		if (!reason) {
			let noreasonembed = new Discord.MessageEmbed()
				.setDescription(`Insira um motivo`)
				.setColor('#2C2F33');
			message.channel.send(noreasonembed);

			return;
		}

		if (!message.member.permissions.has('KICK_MEMBERS')) {
			let nopermsembed = new Discord.MessageEmbed()
				.setDescription(
					'Você não tem permissão para `KICK MEMBERS` contatar um administradorr'
				)
				.setColor('#2C2F33');
			message.channel.send(nopermsembed);

			return;
		}

		if (!message.guild.me.permissions.has('KICK_MEMBERS')) {
			let botnopermsembed = new Discord.MessageEmbed()
				.setDescription(
					'Eu não tenho permissão para `Expulsar membros`, entre em contato com um administrador'
				)
				.setColor('#2C2F33');
			message.channel.send(botnopermsembed);

			return;
		}

		message.guild.member(kicked).kick(reason);

		let successfullyembed = new Discord.MessageEmbed()
			.setDescription(`${kicked.tag} foi expulso com sucesso.`)
			.setColor('#2C2F33');

		message.channel.send(successfullyembed);
	}
};
