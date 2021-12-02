module.exports = {
    name: 'ban',
    description: 'Command untuk Banned member',
    execute(Message) {
        var role = Message.member.roles.cache.find(r => r.name === '🔱Assistant of Hoak🔱')
            if(!role) {
                return Message.reply("Kamu bukan Admin, kamu tidak memiliki akses untuk melakukan ban")
            } else {
                const userBan = Message.mentions.users.first()
                
                if(userBan) {
                    const memberBan = Message.guild.member(userBan)

                    if (memberBan) {
                        memberBan.ban({
                            reason: 'Kamu berkelakuan tidak baik'
                        }).then(() =>{
                            Message.reply(`${userBan.tag} sudah berhasil di ban`)
                        }).catch(console.error)
                    } else {
                        Message.reply("User yang anda tag tidak ad dalam server ini")
                    }
                } else {
                    Message.reply("Silahkan mention member yang ingin di ban")
                }
            }
    }

}