let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${pesan}`
let teks = `*⺀ACTIVENCE BOTS NICO&CHOTY⺀*\n\n❏ ${oi}\n\n Bot creado por Charlie no permito reventa parq adquirir el bot +51994156047\n`
for (let mem of participants) {
teks += `•🍃 @${mem.id.split('@')[0]}\n`}
teks += `└@nico7u7cabrera`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
