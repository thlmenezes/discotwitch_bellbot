import Discord from "discord.js"

import commandHandler from "./CommandHandler"


const client = new Discord.Client()

client.on("message", commandHandler)

client.login(process.env.BOT_TOKEN)