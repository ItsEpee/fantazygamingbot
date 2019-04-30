const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!FantazyGaming";

client.on("ready", function() {
    client.user.setActivity("BOT FantazyGaming ! En dev :) DEV PAR ITSEPEE");
    console.log("Le bot est en ligne !");
});

client.login(process.env.TOKEN);

client.on('message', message =>{
    if(message.content === "Bonjour FantazyGaming !"){
        message.channel.sendMessage('Bonjour ! :heart:');
        console.log('répond à bonjour');
    }
});


client.on('message', message =>{
    if(message.content === "Qui est ton créateur ?"){
        message.channel.sendMessage('Mon createur est ItsEpee ! :heart:');
        console.log('répond à créateur');
    }
});


client.on('guildMemberAdd', member =>{
    let embed = new Discord.RichEmbed()
        .setDescription(':tada: **' + member.user.username + '** a rejoint le serveur discord de la chaîne  ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('558715512758992908').send(embed)
    member.addRole('558716700262924308')

});

client.on('guildMemberRemove', member =>{
    let embed = new Discord.RichEmbed()
        .setDescription(':cry: **' + member.user.username + '** a quitté ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('558715512758992908').send(embed)

});
