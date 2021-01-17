import { Message } from "discord.js"
import fileSystem from "fs"


const prefix = "!"
const commands = new Map()
const command_files = fileSystem.readdirSync("src/commands").filter(file => file.endsWith(".ts"))

command_files.forEach(async file => {
  const { default: command } = await import(`src/commands/${file}`)
  const basename = file.split(".").shift()
  commands.set(basename, command)
})

export default function commandHandler (message: Message): void {
  // Filtering
  if (!message.content.startsWith(prefix) || message.author.bot) return
  // Sanitizing
  const args = message.content.slice(prefix.length).trim().split(/ +/)
  const command = args.shift()?.toLowerCase() || ""
  // Executing
  const { execute: result_command } = commands.get(command) || ({ execute: (arg: string[]) => "Invalid Command" })
  // Echo response
  message.reply(result_command(args))
  // NOTE: use message.channel.send() to notifications
}