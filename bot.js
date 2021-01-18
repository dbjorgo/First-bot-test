require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

const BOT_PREFIX = "!"
const MOD_ME_COMMAND = 'mod-me'

client.on('ready', () => {
  console.log('Our bot is ready to go!');
}); 

client.on("messageDelete", msg => {
  msg.channel.send("Stop deleting messages")
})

client.on('message', msg => {
  if(msg.content == 'I love ZambieDags') {
    msg.react('❤️');
  }

  if(msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
    // msg.member.roles.add("800655009637072926");
    modUser(msg.member);
  }
})

function modUser(member) {
  member.roles.add("800655009637072926");
}

client.login(process.env.BOT_TOKEN);
