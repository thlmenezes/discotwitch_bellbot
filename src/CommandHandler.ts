import { DMChannel, Message } from "discord.js"


const prefix = "!"
const commands = new Map([
  ["ping", (args: string[], message: Message) => "Pong"],
  ["pong", (args: string[], message: Message) => "Ping"],
  ["test", (args: string[], message: Message) => `args: ${args.join(",")}\nlen(args) ${args.length}`],
  ["prune", (args: string[], message: Message) => {
    const num = parseInt(args[0])
    if (isNaN(num)) return "Not a Number"

    if (message.channel instanceof DMChannel) return "Invalid Channel"

    message.channel.bulkDelete(Math.min(num, 10), true).catch(err => {
      console.error(err)
      message.channel.send("there was an error trying to prune messages in this channel!")
    })

    return "done"
  }]
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
  message.reply(result_command(args, message))
  // NOTE: use message.channel.send() to notifications
}