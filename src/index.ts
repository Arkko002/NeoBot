import { Client, Intents } from 'discord.js';
import { token, } from '../config.json';

const client = new Client({ intents: [Intents.FLAGS.GUILDS]})

client.once('ready', () => {
	console.log('rdy')
});

client.on('interactionCreate', async interaction => {
	if
})

client.login(token)

