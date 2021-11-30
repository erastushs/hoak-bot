module.exports = {
    name: 'clear',
    description: 'menghapus pesan dalam text channel',
    execute(Message, args) {
        if (!args[1]) {
            return Message.reply('masukan jumlah chat yang akan dihapus')
        } else {
        Message.channel.bulkDelete(args[1])
        }
    }

}