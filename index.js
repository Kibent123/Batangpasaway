const { Client, MessageEmbed, Message, } = require('discord.js');
const client = new Client();

const messageMethod = new Message();

// Add channel ID
const genChatID = '731168540140503161';
const botChannelID = '679272688644128789';
const botStatusChannelID = '731403888757833798';


// adminMembers 


// Bot Settings
const defaultColor = 0xFF0000;

// Tag format
// <@ userID > Sample =  <@270486410035855360>
client.on('ready', () => {
    // channel path 
    const botStatusChannel = client.channels.cache.find(ch => ch.id === botStatusChannelID);
    botStatusChannel.send(`BP-bot is: **${client.user.presence.status.toLocaleUpperCase()}** \nLast Run: **${new Date()}** \n <@270486410035855360>`);
});

client.on('message', message => {
    try {
        const adminList = [
            '504034019802087444',
            '438195621778685963',
            '520912625954193428',
            '713235902201200750',
            '270486410035855360',
            '693005181352411148',
            '295024792002756611',
            '318522178855370753',
            '662963912559427607',
            '622307049002237956',
            '431991253471854593',
            '200624174568308736',
            '367959516882403329',
        ];
        const bot = new MessageEmbed();
        if(message.author.bot) { return }
        // check custom command
        const isEventCommand = message.content.toLowerCase().indexOf('!eventqueue')  >= 0;
        const isSayCommand = message.content.indexOf('!say');
        const isAdmin = adminList.indexOf(message.member.id);
        // check if !embed commands was sent on genChat
        if (isEventCommand  >= 0) {
            if (message.channel.id !== botChannelID) {
                bot.setTitle("Channel usage rule")
                bot.setColor(0xFF0000)
                bot.setDescription("Please make sure to use the !bot commands on <#679272688644128789> channel only. Thank you");
                message.channel.send(bot);
            } else {
                // check if sender is an admin
                // if () {
                //     // Sample request format: [ 'name|value', 'name|value' ];
                //     var x = ['Sample Event Name|Sample Event Value', 'Sample Event Name1|Sample Event Value1'];
                //     x.forEach(element => {
    
                //     });
                //     var eventQueue = message.content.split('!eventqueue')[1];
                //     var eventList = eventQueue.split('|');
                //     var listParticipant = '';
                //     for (let index = 0; index < eventList.length; index++) {
                //         listParticipant = listParticipant + `${index + 1}.${eventList[index]} \n`;
                //     }
                //     currentChannel.send(listParticipant);
                // }
                // array.forEach(element => {
    
                //});
            }
        }
        if (isSayCommand >= 0) {
            // !say im bored
            if (isAdmin >= 0) {
                bot.setTitle('BP Bot says');
                bot.setColor(defaultColor);
                bot.setDescription(`Master ${message.member.user.username} wants me to say: ${message.content.split('!say')[1]} \n`);
                message.channel.send(bot);
            } else {
                bot.setTitle('BP-bot warning');
                bot.setColor(defaultColor);
                bot.setDescription(`You do not have the permission to use the **!say** command. \n\n\n This message will self destruct in 5 seconds... `);
                message.channel.send(bot);
                   
            }
        }
    } catch (error) {
        message.channel.send(error.message);
    }
});



client.on('guildMemberAdd', member => {
    const genchatChannel = member.guild.channels.cache.find(ch => ch.id === genChatID);
    const bot = new MessageEmbed();
    if (genchatChannel) {
        bot.setTitle("WELCOME TO BATANG PASAWAY: " + "" + member.user.username + "");
        bot.setDescription("WELCOME! Feel Free to Join VC's! \n I hope you enjoy your stay here at Batang Pasaway PH \n\n Please read the <#679274762010099724> and do some <#679288499484098560> \n\n After that head to <#679451760393322499>  to get yourself one or even many! \n\n\n\n Enjoy your stay and start chatting! \n\n\n\n");
        bot.Color = 834242;
        bot.setThumbnail("https://media.discordapp.net/attachments/731061289744334868/731129635349463040/123s.png");
        bot.setImage(member.user.displayAvatarURL());
        bot.setAuthor("BP-Bot", "https://media.discordapp.net/attachments/731061289744334868/731129635349463040/123s.png", "https://discord.gg/7Mz6g6");
        genchatChannel.send(bot);
    }
});

client.login('NzI4OTgzNzE5NDMxMzcyODIw.Xwlh6g.PCovADUJ_1zvlU53PaJpcjYdH6w');