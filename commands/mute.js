const discord = require('discord.js');

module.exports = {
	name: 'mute',
	description: 'Silenciar qualquer pessoa ao quebrar regras.',
	category: 'moderation',
	usage: 'mute <@mention> <reason>',
	run: async (client, message, args) => {
		if (!message.member.hasPermission('MANAGE_ROLES')) {
			return message.channel.send(
				'Sorry but you do not have permission to mute anyone'
			);
		}

		if (!message.guild.me.hasPermission('MANAGE_ROLES')) {
			return message.channel.send(
				'Eu não tenho permissão para mutar esse cargo!'
			);
		}

		const user = message.mentions.members.first();

		if (!user) {
			return message.channel.send('Por favor, mencione um membro para mutar!');
		}

		if (user.id === message.author.id) {
			return message.channel.send('Eu não posso mutar você, né besta -_-');
		}

		let reason = args.slice(1).join(' ');

		if (!reason) {
			return message.channel.send('Por favor, diga uma rasão para mutar.');
		}

		let muterole = message.guild.roles.cache.find(x => x.name === 'Muted');

		if (!muterole) {
			return message.channel.send('Esse servidor não possui o cargo: `Muted`');
		}

		if (user.roles.cache.has(muterole)) {
			return message.channel.send('Diga o usuário a ser mutado!');
		}

		user.roles.add(muterole);

		await message.channel.send(
			`Você mutou **${
				message.mentions.users.first().username
			}** por \`${reason}\``
		);

		user.send(
			`Você foi mutado pelo **${message.guild.name}** por \`${reason}\``
		);
	}
};
