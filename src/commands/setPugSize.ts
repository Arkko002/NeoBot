import { SlashCommandBuilder } from '@discordjs/builders';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const data = new SlashCommandBuilder()
	.setName('size')
	.setDescription('Sets the size of pug (6, 8, 10)')
	.addIntegerOption(option => 
		option.addChoices([
			["6", 6],
			["8", 8,],
			["10", 10]
		])
		.setRequired(true)
	);
