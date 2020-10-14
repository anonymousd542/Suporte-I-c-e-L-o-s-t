const Discord = require('discord.js');

exports.run = async (client, message, args) => {
	var list = [
		'https://i.pinimg.com/236x/9a/d8/ac/9ad8accb00b77668c167e732e7eee086.jpg',
		'https://i.pinimg.com/474x/04/c2/9c/04c29cf7a83bc4921bcfac0a9a879ffc.jpg',
		'https://i.ytimg.com/vi/XwMw6CzpJfw/maxresdefault.jpg',
		'https://i.pinimg.com/236x/e9/77/01/e977012b55273c6ee7af41debff83887.jpg',
		'https://d3q93wnyp4lkf8.cloudfront.net/revista/post_images/29272/086ec5bcf367dc06f82318eee018e68040ce3a62.png?1589228004',
		'https://amazonasatual.com.br/wp-content/uploads/2020/01/meme7-Copia-426x437.jpg',
		'https://m.leiaja.com/sites/default/files/field/image/negocios/2020/05/WhatsApp%20Image%202020-05-11%20at%2012.45.45%20%281%29.jpeg',
		'https://d3q93wnyp4lkf8.cloudfront.net/revista/post_images/29277/8f0072162de574df8f015681467b40274c0a3122.png?1589228385',
		'https://i.pinimg.com/236x/81/a1/14/81a1147fb0af970e2b11cff143d59d04.jpg',
		'https://i.pinimg.com/originals/9a/6e/23/9a6e23e04d50766561c097ae43a3d320.jpg',
		'https://i.pinimg.com/originals/f2/ec/3a/f2ec3aee083a28fa9566adacc209fd21.jpg',
		'https://i.pinimg.com/originals/17/6e/a4/176ea4d9384697191d1274792f3499c1.png',
		'https://img.r7.com/images/meme-terceira-guerra-03012020103903545',
		'https://www.portaltucuma.com.br/wp-content/uploads/2020/02/Manu-1024x778.png',
		'https://www.folhadelondrina.com.br/img/Facebook/2980000/Surto-de-memes-no-pais-da-piada-pronta0298201600202003101829.jpg',
		'https://i.pinimg.com/736x/fc/0e/4b/fc0e4b426f1affa39e1b1950b0febdec.jpg',
		'https://i.pinimg.com/236x/22/74/22/227422e5942c87bad5f09a9567613839.jpg',
		'https://i.pinimg.com/236x/69/a5/34/69a534b8a140e9fa7f3665407514eaa3.jpg',
		'https://i.pinimg.com/236x/9d/c2/54/9dc254f5a588425592cb39f946b33fba.jpg',
		'https://i.pinimg.com/236x/2a/7d/de/2a7dded13b2a0ad70fe954a410cba584.jpg',
		'https://pbs.twimg.com/media/ENC6XzIXsAAy8Bd.jpg',
		'https://pm1.narvii.com/7482/0b52dd63a89431c343c417f697c16c52cbf1f050r1-1285-1262v2_00.jpg',
		'https://i.pinimg.com/236x/e9/59/d5/e959d505f75bedcbaeef90e18aaff8c2.jpg',
		'https://i.pinimg.com/236x/ab/d8/2d/abd82d5cebe25c7e7343dd7698ba1bf8.jpg',
		'https://scontent.fgru5-1.fna.fbcdn.net/v/t1.0-0/p526x296/106128706_1845499068949039_213101206405618430_o.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_ohc=gQCnQ-xtkkAAX82En5l&_nc_ht=scontent.fgru5-1.fna&_nc_tp=6&oh=d0138d3cc5baa9cd278d0baee5858358&oe=5F55F95D',
		'https://scontent.fgru5-1.fna.fbcdn.net/v/t1.0-0/p180x540/117301592_1686293281522977_4176341516622659972_n.png?_nc_cat=1&_nc_sid=730e14&_nc_ohc=y3crS7GyPHEAX_2SXDq&_nc_ht=scontent.fgru5-1.fna&oh=0bd9340550a2a5b1945af414fc217e15&oe=5F532344w',
		'https://cdn.discordapp.com/attachments/724845889373601892/742158321301323786/unknown.png',
		'https://img.ibxk.com.br/ns/rexposta/2019/03/07/07104246573110.jpg?watermark=neaki&watermark=neaki',
		'https://imageproxy.ifunny.co/crop:x-20,resize:320x,crop:x800,quality:90x75/images/32d07ceef9a3561633280aed8e098941d11552a32957b968f57123404eae7262_1.jpg',
		'https://img.ibxk.com.br/ns/rexposta/2019/11/20/20212314402135.jpg?watermark=neaki&w=600',
		'https://uploads.spiritfanfiction.com/fanfics/capitulos/201803/vivendo-com-a-akatsuki-12456991-210320180146.gif',
		'https://img.ibxk.com.br/ns/rexposta/2018/08/11/11141959797243.jpg?watermark=neaki&w=600',
		'https://i.pinimg.com/236x/33/d2/62/33d262fecfd9d05ba388ab1cc0eca34e.jpg',
		'https://i.pinimg.com/736x/fa/9a/39/fa9a396496977fb96eb35e3cc7db4c50.jpg',
		'https://i.pinimg.com/736x/fa/25/44/fa254495bc7330abb4a86942426ea301.jpg',
		'https://scontent.fgru5-1.fna.fbcdn.net/v/t1.0-0/p180x540/117219824_119727633006998_3823398739383987407_o.jpg?_nc_cat=1&_nc_sid=8bfeb9&_nc_ohc=0Fi4_mXo8WkAX9cgrZG&_nc_ht=scontent.fgru5-1.fna&_nc_tp=6&oh=af014390ad44819c4fcf8b257a2b60d3&oe=5F558761',
		'https://cdn.discordapp.com/attachments/724845889373601892/742506854349013142/unknown.png'
	];

	var rand = list[Math.floor(Math.random() * list.length)];
	let avatar = message.author.displayAvatarURL({ format: 'png' });
	const embed = new Discord.MessageEmbed()
		.setTitle('Memes')
		.setColor('#000000')
		.setDescription(`${message.author} **UR UR UR Muito Meme** `)
		.setImage(rand)
		.setTimestamp()
		.setThumbnail(avatar)
		.setFooter('Memes')
		.setAuthor(message.author.tag, avatar);
	await message.channel.send(embed);
};
