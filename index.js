const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'DarkSMP32.aternos.me', // CHANGE THIS
    port: 53573,
    username: 'AFK_Bot'
  })

  bot.on('spawn', () => {
    console.log('Bot joined')

    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 500)
    }, 30000)
  })

  bot.on('end', () => {
    console.log('Reconnecting...')
    setTimeout(createBot, 5000)
  })
}

createBot()
