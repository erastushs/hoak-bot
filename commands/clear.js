module.exports = {
    name: 'clear',
    description: 'menghapus pesan dalam text channel',
    execute(Message, args) {
        var role= Message.member.roles.cache.find(r => r.id === "755060269775978497", "755062412801081434")
        if (role) {
            if (!args[1]) {
                return Message.reply('masukan jumlah chat yang akan dihapus')
            } else {
            Message.channel.bulkDelete(args[1])
            }
        } else {
            Message.channel.send('Kamu tidak punya akses ini')
        }
    }
}