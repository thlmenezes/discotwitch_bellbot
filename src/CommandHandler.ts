import { Message } from "discord.js"


const prefix = "!"
const commands = new Map([
  ["ping", "Pong"],
  ["pong", "Ping"]
])

export default function commandHandler (message: Message): void {

  if (!message.content.startsWith(prefix) || message.author.bot) return

  const args = message.content.slice(prefix.length).trim().split(" ")
  const command = args.shift()?.toLowerCase() || ""

  message.channel.send(commands.get(command) || "Comando Inválido")
}