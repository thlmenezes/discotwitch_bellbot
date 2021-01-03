import Discord from "discord.js"

const client = new Discord.Client()

client.on("message", message => {
  if (message.content === "!ping") {
    message.channel.send("Pong.")
  }
  else if (message.content === "!pong") {
    message.channel.send("Ping.")
  }
  else if (message.content === "!quit" && message.author.username === "Thales Menezes") {
    client.destroy()
  }
})

client.login(process.env.BOT_TOKEN)