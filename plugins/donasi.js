let handler = async m => m.reply(` 
╭─「 *Donasi* 」 
│ • DANA : 085700921759
│ • https://sociabuzz.com/hdiiofficial
│ • https://saweria.co/hdiiofficial
│ • https://trakteer.id/hdiiofficial/tip
╰────
`.trim())
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
