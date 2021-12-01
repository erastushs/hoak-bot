module.exports = {
    name: 'testAdmin',
    description: 'Testing admin',
    execute(Message) {
        var role= Message.member.roles.cache.find(r => r.name ==='🔱Assistant of Hoak🔱')
        var role= Message.member.roles.cache.find(r => r.name ==='⚜️Father of Hoak⚜️')
        if (role) {
            Message.channel.send('Halo Admin')
        } else {
            Message.channel.send('Kamu tidak punya akses ini')
        }
    }

}