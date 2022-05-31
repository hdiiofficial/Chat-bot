let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
| RULES BOT |
DILARANG MENELPON BOT
DILARANG SPAM BOT
DILARANG MENGIRIM MEDIA 18+
BOT INI 100% MENJAGA PRIVASI ANDA
BOT TIDAK MENYIMPAN DATA ATAU MEDIA YANG ANDA KIRIMKAN
GUNAKAN LAH BOT INI SEBAGAI JALAN UNTUK MENCARI ILMU ATAU PENGALAMAN
JANGAN MAKSIAT GOBLOK!!!!!
`.trim(), 'Anonymous Chat', 'Menu Utama', '.menu', m) // Tambah sendiri kalo mau
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(rules)$/i

module.exports = handler
