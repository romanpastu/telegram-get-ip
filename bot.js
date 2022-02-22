const { Telegraf } = require('telegraf')
require('dotenv').config()
const axios = require('axios')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply('Welcome'))

bot.command('ip', (ctx) => {
    if (process.env.USER_ID === ctx.update.message.from.id.toString()) {
        axios
            .get('https://api.ipify.org')
            .then(res => {
                ctx.reply(res.data)
            })
            .catch(error => {
                ctx.reply(error.toString())
            })
    } else {
        ctx.reply("You are not whitelisted")
    }
})

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
