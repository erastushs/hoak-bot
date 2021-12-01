module.exports = {
    name: 'kick',
    description: 'command kick member',
    execute(Message) {
        if(Message.member.roles.cache.find(r => r.name === '🔱Assistant of Hoak🔱')) {
            const userKick = Message.mentions.users.first()

            if(userKick) {
                memberKick = Message.guild.member(userKick)

                if(memberKick) {
                    memberKick.kick("Kamu di kick dari server").then(() => {
                        Message.channel.bulkDelete(1)
                        Message.reply(`${userKick.tag} berhasil di kick`)
                    }).catch(err => {
                        Message.channel.bulkDelete(1)
                        Message.reply("Saya tidak bisa melakukan kick pada member ini")
                        console.log(err)
                    })
                }
            } else {
                Message.channel.bulkDelete(1) 
                Message.reply('Silahkan mention member yang ingin di ban')
            } 
        } else{
            Message.channel.bulkDelete(1)
            return Message.reply("Kamu bukan Admin, kamu tidak memiliki akses untuk melakukan kick")
        }
    }
}