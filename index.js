const { Client, MessageEmbed, Channel, Message } = require('discord.js');
const bot = new Client();


const PREFIX = '!';

bot.on('ready', () => {
    console.log('Open na!');
})

bot.on('message', message => {

    // check custom command
    const eventQueueIndex = message.content.toString().toLowerCase().indexOf('!eventqueue');
    const cuteIndex = message.content.toString().toLowerCase().indexOf('cute');
    const embedIndex = message.content.toString().toLowerCase().indexOf('!embed');
    const sayIndex = message.content.toString().toLowerCase().indexOf('!say');
    const jarvisIndex = message.content.toString().toLowerCase().indexOf('jarvis');
    const katerinaIndex = message.content.toString().toLowerCase().indexOf('katerina');

    // insert channel path
    const botChannel = message.guild.channels.cache.find(ch => ch.id === "679272688644128789");
    const genchatChannel = message.guild.channels.cache.find(ch => ch.id === "731168540140503161");
    const eventsChannel = message.guild.channels.cache.find(ch => ch.id === "707087844895883324");
    const currentChannel = message.guild.channels.cache.find(ch => ch.id === message.channel.id);




    const Embed = new MessageEmbed();
    // Trigger if !embed command is used
    if (embedIndex >= 0) {
        if (botChannel) {
            Embed.setTitle("Next Events!")
            Embed.setColor(0xFF0000)
            Embed.setDescription("BATANG PASAWAY EVENTS");
            Embed.setImage("https://media.discordapp.net/attachments/731070617670909973/731386377345695884/bpevents.png?width=1015&height=677")
                .addField("(14, TUES) Mini-games")
                .addField("(18, FRI) Bingo Night")
                .addField("(19, SAT) Jamming Night")
                .addField("(21, TUES) Mini-games")
                .addField("(24, FRI) Bingo Night")
                .addField("(25, SAT) Jamming Night")
            botChannel.send(Embed);
        };
        if (genchatChannel) {
            Embed.setTitle("Channel usage rule")
            Embed.setColor(0xFF0000)
            Embed.setDescription("Please make sure to use the !embed commands on <#679272688644128789> channel only. Thank you");
            genchatChannel.send(Embed);

        };
    }
    if (cuteIndex >= 0) {

        Embed.setTitle("Batang Pasaway Bot Approves")
        Embed.setColor(0xFF0000)
        Embed.setDescription("Oo pero mas cute si Kevin at Kei!");
        genchatChannel.send(Embed);
    }


    if (sayIndex >= 0 && message.member.permissions.has('ADMINISTRATOR')) {
        const currentChannel = message.guild.channels.cache.find(ch => ch.id === message.channel.id);
        currentChannel.send(message.content.split('!say')[1]);

    }
    if (jarvisIndex >= 0 && message.member.id === '624545972185464832') {
        Embed.setTitle("Jarvis");
        Embed.setColor([63, 154, 255]);
        if (message.content.toString().toLowerCase().indexOf('regards') >= 0) {
            Embed.setDescription("Master Kei sends his regards. Please enjoy your stay here!");
        } else if (message.content.toString().toLowerCase().indexOf('welcome') >= 0) {
            Embed.setDescription("Master Kei sends his warm welcome for you. I hope you enjoy your stay here.");
        }
        else {
            Embed.setDescription("Welcome Sir Kei. What can I do for you today Sir?");
        }
        currentChannel.send(Embed);
    }
    if (katerinaIndex >= 0 && (message.member.id === '270486410035855360' || message.member.id === '644417531154661376')) {
        Embed.setTitle("Katerina");
        Embed.setColor([63, 154, 255]);
        if (message.content.toString().toLowerCase().indexOf('ily') >= 0) {
            Embed.setDescription("Hi Sean Where do you wanna teleport");
        } else if (message.content.toString().toLowerCase().indexOf('pls') >= 0) {
            Embed.setDescription("Higupin kita hanggang huling hininga mo");
        }
        else {
            Embed.setDescription("Welcome Sir Kevin Pogi. What can I do for you today Sir?");
        }
        currentChannel.send(Embed);
    }
    const genericBotIndex = message.content.toString().toLowerCase().indexOf('master');
    if (genericBotIndex >= 0 && (message.member.id === '270486410035855360' || message.member.id === '624545972185464832')) {
        Embed.setTitle("Celestial Being");
        Embed.setColor([63, 154, 255]);
        Embed.setDescription("JARVIS is an A.I. created by KEI and KATERINA is a random human being created by KEVIN");
        currentChannel.send(Embed);
    }

    if (eventQueueIndex >= 0 && message.member.permissions.has('ADMINISTRATOR')) {
        var eventQueue = message.content.split('!eventqueue')[1];
        var eventList = eventQueue.split('|');
        var listParticipant = '';
        for (let index = 0; index < eventList.length; index++) {
            listParticipant = listParticipant + `${index + 1}.${eventList[index]} \n`;
        }
        currentChannel.send(listParticipant);
    }
});



bot.on('guildMemberAdd', member => {
    const genchatChannel = member.guild.channels.cache.find(ch => ch.id === "731168540140503161");
    const RichEmbedVar = new MessageEmbed();


    if (genchatChannel) {
        RichEmbedVar.setTitle("WELCOME TO BATANG PASAWAY: " + "" + member.user.username + "");
        RichEmbedVar.setDescription("WELCOME! Feel Free to Join VC's! \n I hope you enjoy your stay here at Batang Pasaway PH \n\n Please read the <#679274762010099724> and do some <#679288499484098560> \n\n After that head to <#679451760393322499>  to get yourself one or even many! \n\n\n\n Enjoy your stay and start chatting! \n\n\n\n");
        RichEmbedVar.Color = 834242;
        RichEmbedVar.setThumbnail("https://media.discordapp.net/attachments/731061289744334868/731129635349463040/123s.png");
        RichEmbedVar.setImage(member.user.displayAvatarURL());
        RichEmbedVar.setAuthor("BP-Bot", "https://media.discordapp.net/attachments/731061289744334868/731129635349463040/123s.png", "https://discord.gg/7Mz6g6");
        genchatChannel.send(RichEmbedVar);
    };
});

bot.login(process.env.token);