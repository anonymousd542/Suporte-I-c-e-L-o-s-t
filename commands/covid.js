const fetch = require('node-fetch');

const Discord = require('discord.js');

module.exports = {
    name: "covid",
    description: "Acompanhar casos COVID-19 em um país ou em todo o mundo",

    async run (client, message, args){

        let countries = args.join(" ");

        //Créditos para ¡¡Şαyy™ ✘#0666 e Snow#3962 pelo comando :3

        const noArgs = new Discord.MessageEmbed()
        .setTitle('Argumentos ausentes')
        .setColor('#982452')
        .setDescription('Estão faltando alguns argumentos (Exemplo: m!covid all || m!covid Canada)')
        .setTimestamp()

        if(!args[0]) return message.channel.send(noArgs);

        if(args[0] === "all"){
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`Estatísticas mundiais do COVID-19 🌎`)
                .addField('Casos confirmados', confirmed)
                .addField('Recuperados', recovered)
                .addField('Mortes', deaths)

                message.channel.send(embed)
            })
        } else {
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`COVID-19 Stats for **${countries}**`)
                .setColor(`#982452`)
                .addField('Casos confirmados', confirmed)
                .addField('Recuperados', recovered)
                .addField('Mortes', deaths)

                message.channel.send(embed)
            }).catch(e => {
                return message.channel.send(':x: País fornecido **inválido**!')
            })
        }
    }
}