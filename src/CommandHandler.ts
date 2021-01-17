import { Message } from "discord.js"


const prefix = "!"
const commands = new Map([
  ["ping", (args: string[]) => "Pong"],
  ["pong", (args: string[]) => "Ping"],
  ["teste", (args: string[]) => `args: ${args.join(",")}\nlen(args) ${args.length}`]
])

export default function commandHandler (message: Message): void {
  // Filtering
  if (!message.content.startsWith(prefix) || message.author.bot) return
  // Sanitizing
  const args = message.content.slice(prefix.length).trim().split(/ +/)
  const command = args.shift()?.toLowerCase() || ""
  // Executing
  const result_command = commands.get(command) || ((arg: string[]) => "Invalid Command")
  // Echo response
  message.channel.send(result_command(args))
}