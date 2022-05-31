let handler = async m => m.reply(` 
╭─「 *Donasi* 」 
│ • https://saweria.co/hdiiofficial
│ • https://trakteer.id/hdiiofficial/tip
╰────
`.trim())
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
