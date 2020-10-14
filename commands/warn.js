const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "warn",
  category: "moderation",
  usage: "warn <@mention> <reason>",
  description: "Avise quem não obedece às regras",
  run: async (client, message, args) => {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("Você deve ter permissões de administrador para usar este comando!")
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
      return message.channel.send("Mencione a pessoa a quem você deseja avisar - warn @mention <reaosn>")
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("Você não pode avisar os bots")
    }
    
    if(message.author.id === user.id) {
      return message.channel.send("Você não pode se avisar")
    }
    
    if(user.id === message.guild.owner.id) {
      return message.channel.send("Seu idiota, como você pode avisar o dono do servidor -_-")
    }
    
    const reason = args.slice(1).join(" ")
    
    if(!reason) {
      return message.channel.send("Forneça um motivo para avisar - warn @mention <reason>")
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === 3) {
      return message.channel.send(`${message.mentions.users.first().username} already reached his/her limit with 3 warnings`)
    }
    
    if(warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1)
      user.send(`Você foi avisado em **${message.guild.name}** for ${reason}`)
      await message.channel.send(`Você avisou **${message.mentions.users.first().username}** for ${reason}`)
    } else if(warnings !== null) {
        db.add(`warnings_${message.guild.id}_${user.id}`, 1)
       user.send(`Você foi avisado em **${message.guild.name}** for ${reason}`)
      await message.channel.send(`Você avisou **${message.mentions.users.first().username}** for ${reason}`)
    }
    
  
  } 
}