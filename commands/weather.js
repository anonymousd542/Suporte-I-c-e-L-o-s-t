const weather = require('weather-js');

const Discord = require('discord.js');

module.exports = {
    name: "weather",
    description: "Verifica a previsão do tempo",

    async run (client, message, args){

    weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
        // 'C' pode ser alterado para 'F' para resultados farneheit
        if(error) return message.channel.send(error);
        if(!args[0]) return message.channel.send('Especifique um local')

        if(result === undefined || result.length === 0) return message.channel.send('Localização **inválida**');

        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Previsão do tempo para ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor('#00e3ff')
        .addField('Fuso horário', `UTC${location.timezone}`, true)
        .addField('Tipo de grau', 'Celsius', true)
        .addField('Temperatura', `${current.temperature}°`, true)
        .addField('Vento', current.winddisplay, true)
        .addField('Parece', `${current.feelslike}°`, true)
        .addField('Umidade', `${current.humidity}%`, true)


        message.channel.send(weatherinfo)
        })        
    }
}