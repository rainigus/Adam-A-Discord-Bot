//allow bot
const fs = require('node:fs');
const path = require('node:path');
const { Client, GatewayIntentBits, EmbedBuilder, Events, PermissionsBitField, Permissions } = require('discord.js')
const config = require("./config.json")

// the bot prefix (LEGACY)
// ex. gw!Preach

const prefix = 'gw!';

//discord gatewayintentbits
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent ]});

//logging bot startup
client.once(Events.ClientReady, () => {
	console.log('adam bot... success'); //successful startup
})

// creates a message; not deprecated???
client.on('messageCreate', (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ + /);
	const command = args.shift().toLowerCase();

	// message array

	const messageArray = message.content.split(" ");
	const argument = messageArray.slice(1);
	const cmd = messageArray[0];

	// commands

// the godword command

if (command === 'godword') { // checks if the word "godword" has been used with the prefix

// read the text file
const words = fs.readFileSync('godword.txt', 'utf-8').split('\n');

// function to generate a random word
function generateRandomWord() {

  // get a random index between 0 and the length of the array
  const randomIndex = Math.floor(Math.random() * words.length);
  
  // return the word at that index
  return words[randomIndex];
}

// make an empty string to stack the random words
let messageContent = "God says... ";

// do it 63 times since the first one was already made
for (let i = 0; i < 63; i++) {
  // add "God says..." and a random word to the message content string
  messageContent += generateRandomWord() + " ";
}

// add the final random word to the message content string
messageContent += generateRandomWord();

// send the message content string to the channel
message.channel.send(messageContent);
}
})



























client.login(config.token)
