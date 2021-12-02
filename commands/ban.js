module.exports = {
    name: 'ban',
    description: 'Command untuk Banned member',
    execute(Message) {
        var role = Message.member.roles.cache.some(r=>["🔱Assistant of Hoak🔱", "⚜️Father of Hoak⚜️"].includes(r.name))
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
                        }).catch(err => {
                            Message.channel.bulkDelete(1)
                            Message.reply("Saya tidak bisa melakukan ban pada member ini")
                            console.log(err)
                        })
                    } else {
                        Message.reply("User yang anda tag tidak ad dalam server ini")
                    }
                } else {
                    Message.reply("Silahkan mention member yang ingin di ban")
                }
            }
    }

}