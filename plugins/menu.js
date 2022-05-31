let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 MENU UTAMA 」
│ .start : mencari partner
│ .next : menemukan partner baru
│ .leave : keluar dari sesi anon
│ .sendkontak : membagikan kontak
╰────
╭─「 Lainnya 」
│ .jadibot
│ .donate
│ .rules
╰────
Bot Aktif 24 jam
`.trim(), 'Anonymous Chat', 'Donate', '.donasi', m) // Tambah sendiri kalo mau
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(m|menu|help|\?)$/i

module.exports = handler
