import {
  type CommandInteraction,
  type CommandInteractionOptionResolver,
  type SlashCommandBuilder,
} from "discord.js";

export type SlashCommandHandler = (
  interaction: CommandInteraction,
  options: CommandInteractionOptionResolver
) => any | Promise<any>;

export interface SlashCommand {
  data: SlashCommandBuilder;
  execute: SlashCommandHandler;
}
