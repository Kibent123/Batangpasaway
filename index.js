const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const defaultColor = 0xFF0000;

// channel ID's
const botChannelID = '679272688644128789'; // bot-channel ID
const genChannelID = '731168540140503161'; // gen-channel ID
const gen2ChannelID = '710735265949548596'; // gen2-channel ID
const annoChannelID = '679447415371333668'; // announcement-channel ID
const rulesChannelID = '731379484946727003' // rules-channel ID
const spamChannelID = '679257174811082774' // spam-channel ID
const promChannelID = '721306801211047936' // promotions-channel ID

client.on('ready', () => { console.log('Open na!'); });

client.on('message', message => {

    // adminMembers 
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
        '624545972185464832'
    ];
    const messageEmbed = new MessageEmbed();

    // check custom command
    const bpCommand = message.content.toString().toLowerCase().indexOf('!bp');
    const sayCommand = message.content.indexOf('!say');
    const jarvisCommand = message.content.toString().toLowerCase().indexOf('love');
    const keterinaCommand = message.content.toString().toLowerCase().indexOf('katerina');
    const rawrCommand = message.content.toLowerCase().indexOf('rawr');

    // IS THE SENDER ADMIN
    const isAdmin = adminList.indexOf(message.author.id);

    // !say Command
    if (!message.author.bot && sayCommand == 0) {
        messageEmbed.setColor(defaultColor);

        if (isAdmin >= 0) {
            messageEmbed.setTitle('SERVER ANNOUNCEMENT!');
            messageEmbed.setDescription(`**${message.content.toLowerCase().split('!say')[1].toUpperCase()}**`);
            messageEmbed.setFooter(`THANK YOU FOR YOUR TIME`);
            message.channel.send(messageEmbed).then((response) => response.delete({ timeout: 10000 }));
        } else {
            messageEmbed.setTitle('Hmmmmmm~ batang pasaway ALERT');
            messageEmbed.setDescription(`.\n.\nWag ng pilitin.\nDi pa pwede sayo ang **!say** kasi wala ka pang say.\n.\n.\n`);
            messageEmbed.setThumbnail(message.member.user.displayAvatarURL());
            message.channel.send(messageEmbed).then((response) => response.delete({ timeout: 60000 }));

        }
    }
    // !bp Command
    if (!message.author.bot && bpCommand >= 0 && isAdmin >= 0) {
        const strippedEventsCommand = message.content.replace('!bp', '');

        // !bp events
        if (strippedEventsCommand.indexOf('events') >= 0) {
            if (message.channel.id !== annoChannelID) {
                messageEmbed.setDescription(`**Please use the !bp commands on <#${botChannelID}> channel ONLY.**`);
                message.channel.send(messageEmbed).then((response) => response.delete({ timeout: 60000 }));;
            } else {
                messageEmbed.setTitle("BATANG PASAWAWY PH")
                messageEmbed.setDescription("U p c o m i n g E v e n t s: 2 0 2 0")
                messageEmbed.setColor([63, 154, 255]);
                messageEmbed.setThumbnail("https://media.discordapp.net/attachments/731061289744334868/731129635349463040/123s.png");
                messageEmbed.setImage("https://media.discordapp.net/attachments/681100184389681152/731391215513370654/image0.png?width=1441&height=461")
                    .addField("(14, TUES) Mini-games", "--------")
                    .addField("(18, FRI) Bingo Night", "--------")
                    .addField("(19, SAT) Jamming Night", "--------")
                    .addField("(21, TUES) Mini-games", "--------")
                    .addField("(24, FRI) Bingo Night", "--------")
                // .addField("(25, SAT) Jamming Night", `<@${message.member.user.id}>`) // Sample format for tagging user <@id number>
                message.channel.send(messageEmbed);
            }
        }
        // !bp reminder (#)
        else if (strippedEventsCommand.indexOf('reminder') >= 0) {
            const stripReminder = strippedEventsCommand.replace('reminder', '').trim();
            switch (stripReminder) {
                case '1':
                    messageEmbed.setTitle('__CHANNEL RULE: 1__');
                    messageEmbed.setDescription(`We condemn swearing in this server.` +
                        `\n> __**Voice Channels**__: *If you're with friends you may, but please keep it in moderation. **BUT** swearing at someone without valid reason- will result to a warning.*` +
                        `\n> __**Text Channels**__: *Absolutely NOT. The list of vulgar and inapproproate words are listed below.*`);
                    break;
                case '2':
                    messageEmbed.setTitle('__CHANNEL RULE: 2__');
                    messageEmbed.setDescription('*Only converse in **English**, **Tagalog**, other **Filipino** dialects, **Japanese**, and **Korean**. Any __other language__ that is not stated is not to be spoken.*');
                    break;
                case '3':
                    messageEmbed.setTitle('__CHANNEL RULE: 3__');
                    messageEmbed.setDescription('*No **\"ear-rape\"** in voice channels. If you are in a noisy environment, **please use push to talk.** Do not be overly excited.*');
                    break;
                case '4':
                    messageEmbed.setTitle('__CHANNEL RULE: 4__');
                    messageEmbed.setDescription('Only **__ONE BOT in VC.__** Don\'t occupy more than one bot, so that others may use the rest.');
                    break;
                case '5':
                    messageEmbed.setTitle('__CHANNEL RULE: 5__');
                    messageEmbed.setDescription(`*Server role perks are only applicable in <#${gen2ChannelID}>. Due to #deleted-channel being the main channel, if role perks are applied, it might be abused and may fall into a state of chaos. Abusing your role perks may cause you warn from mods or uninstallation of your role.*`);
                    break;
                case '6':
                    messageEmbed.setTitle('__CHANNEL RULE: 6__');
                    messageEmbed.setDescription(`*Spamming is discouraged when done in any channel other than <#${spamChannelID}>. This includes, spamming words and mentioning @/someone repeatedly. No repeated joining/leaving the server, this also counts as spamming.*`);
                    break;
                case '7':
                    messageEmbed.setTitle('__CHANNEL RULE: 7__');
                    messageEmbed.setDescription(`**__Abusing the channels__**\n
                    > *As we said, use the text and voice channels according to its specific purpose. Don't disrespect the channel's uniqueness, why use it for anything else?*\n
                    > *The general chat is made for chatting only. If you want to use Yggdrasil, please use <#${gen2ChannelID}> or <#${botChannelID}> This has been said many times, that's why <#${gen2ChannelID}> exists.*`);
                    break;
                case '8':
                    messageEmbed.setTitle('__CHANNEL RULE: 8__');
                    messageEmbed.setDescription(`Repetitive use of: \n
                    Pls **WARN**, **BAN**, or **KICK** \n
                    Using __@/everyone__ or __@/here__\n
                    > *You don't have permission to do so, so it mentions no one. But still, it will result to a violation. (**__makalat kasi so please wag nang gawin__**)*`);
                    break;
                case '9':
                    messageEmbed.setTitle('__CHANNEL RULE: 9__');
                    messageEmbed.setDescription(`**__Alternate Accounts (Alts/ Alt Accs)__**\n
                    > *The problem with alternate accounts is that it confuses the members and moderation in the server. **Stay loyal, one is enough.***`);
                    break;
                case '10':
                    messageEmbed.setTitle('__CHANNEL RULE: 10__');
                    messageEmbed.setDescription(`**__Raiding & Trolling__**\n
                    > *Raiding is not allowed. It does not benefit the server in a good way whatsoever. Please, just don't raid the server.* \n
                    > *Trolling is not tolerated when it has gone too far. There's a difference between harmless fun and trolling. Think before you speak, do not cross the line.*`);
                    break;
                case '11':
                    messageEmbed.setTitle('__CHANNEL RULE: 11__');
                    messageEmbed.setDescription(`**__Voice Modifications__**
                    > *The use of voice modifications are prohibited. These include voice changer users.*`);
                    break;
                case '12':
                    messageEmbed.setTitle('__CHANNEL RULE: 12__');
                    messageEmbed.setDescription(`**__Not Tinder/Dating Platform__**
                    > *This is not a place for people who want to make **LANDI.** \n
                    * This server is a place where people can make friends, not jowas. There are other servers that allow that. And let us remind you of the well-known hashtag in the server, \n
                    **__#NOTOTINDERCORD__**`);
                    break;
                case '13':
                    messageEmbed.setTitle('__CHANNEL RULE: 13__');
                    messageEmbed.setDescription(`**__Advertising__**\n
                    > *Advertising a server is not allowed. If you wish to become a server partner, please proceed to ping or dm the <@Server Partnership Manager>.\n
                    *However, advertising your social media, youtube channel, and such is allowed as long as it is done in <#${promChannelID}>`);
                    break;
                default:
                    messageEmbed.setDescription(`**Please read the rules and regulations in the <#${rulesChannelID}> channel.**`);
                    break;
            }
            message.channel.send(messageEmbed).then((response) => response.delete({ timeout: 60000 }));
        }
        else if (strippedEventsCommand.indexOf('warning') >= 0) {
            const stripWarning = strippedEventsCommand.replace('warning', '').trim();
            switch (stripWarning) {
                case '1':
                    messageEmbed.setTitle('__MAINSTREAM RULE: 1__');
                    messageEmbed.setDescription(`**__Everyone must follow the Discord ToS and Discord Community Guidelines.__** \n` +
                        `We are against the following:` +
                        `> **Harassment** \n` +
                        `> **Discrimination** \n` +
                        `> **Threat** \n` +
                        `> **Evasion** \n` +
                        `> **Phishing** \n` +
                        `> **Users with age of 12 & below (will be kicked out)**`);
                    break;
                case '2':
                    messageEmbed.setTitle('__MAINSTREAM RULE: 2__');
                    messageEmbed.setDescription(`*Please do not disrespect the staff, this includes the Moderators and Administrators. Also, even if someone is not a member of the staff, respect them. As said, **DON'T BE PASAWAY.***`);
                    break;
                case '3':
                    messageEmbed.setTitle('__MAINSTREAM RULE: 3__');
                    messageEmbed.setDescription(`**__Personal info (P.I.)__** \n` +
                        `**DOXXING** *such as sharing and publishing information of a particular individual is not allowed. Enough said, please respect others’ private information.*` +
                        `*Do not force someone to spill out any of their P.I. if they do not want it. (**__Do not influence someone else to convince that person either. Peer pressure is a NO NO__**) \n` +
                        `*It is **YOUR** choice if you choose to share your social media accounts or any personal info but please be mindful of your actions. If anything happens; it is your responsibility and we're out of it.*`);
                    break;
                case '4':
                    messageEmbed.setTitle('__MAINSTREAM RULE: 4__');
                    messageEmbed.setDescription(`**__Feuds__** \n` +
                        `We do not condone any fights here (__especially if it happened in a different __). What happens in that server stays there. \n` +
                        `Avoid getting into heated arguments, as this could turn into a fight. When push comes to shove, please resolve it privately and respectfully. \n` +
                        `Offensive jokes are not allowed as these may lead to unintentional arguments.`);
                    break;
                case '5':
                    messageEmbed.setTitle('__MAINSTREAM RULE: 5__');
                    messageEmbed.setDescription(`**__NSFW__** \n` +
                        `***ANY** I repeat, **ANY** form of NSFW content (emojis, pictures, videos, etc.) is __not allowed here.__ This is a major violation that will immediately result to a **mute**, a **BAN**, or **BOTH.** \n` +
                        `*Inappropriate profile picture or nickname is prohibited. When a moderator or admin asks you to change your pfp or nickname or anything for the sake of the server, do it. Failure to follow three times will result to a warning.*`);
                    break;
                case '6':
                    messageEmbed.setTitle('__MAINSTREAM RULE: 6__');
                    messageEmbed.setDescription(`**Manipulation** \n` +
                        `Deception is condemned. This means no catfishing, lying, controlling others to do what you want. This is not tolerated since the feelings of a person is involved.` +
                        `As you can see on the side, we have quite a selection of channels for you to enjoy. So please use the channels accorrding to its purpose.`);
                    break;
                default:
                    messageEmbed.setDescription(`**Please read the rules and regulations in the <#${rulesChannelID}> channel.**`);
                    break;
            }
            message.channel.send(messageEmbed).then((response) => response.delete({ timeout: 60000 }));
        }
    }
    // rawr Command
    if (!message.author.bot && rawrCommand >= 0) {
        messageEmbed.setDescription('Rawr! RaWr! RaaaWr!');
        messageEmbed.setFooter('This message self destruct in 3 seconds');
        message.channel
            .send(messageEmbed)
            .then((response) => response.delete({ timeout: 3000 }));
    }
    // JARVIS 
    if (!message.author.bot && jarvisCommand >= 0 && (message.member.id === '624545972185464832' || message.member.id === '504034019802087444')) {
        messageEmbed.setColor([63, 154, 255]);
        const removedJarvis = message.content.replace('love', '').toString();
        if (removedJarvis.indexOf('regards') >= 0) {
            messageEmbed.setTitle("Hi Love!! I would like to sends my regards. Please enjoy your stay here!");
        } else if (removedJarvis.indexOf('welcome') >= 0) {
            messageEmbed.setTitle("Hi Love!! Welcome to our lovely server. I hope you enjoy your stay here.");
        } else if (removedJarvis.indexOf('goodnight') >= 0 || removedJarvis.indexOf('good night') >= 0) {
            messageEmbed.setTitle(`Goodnight, Love. Love you!!.`);
        } else if (removedJarvis.indexOf('goodmorning') >= 0 || removedJarvis.indexOf('good morning') >= 0) {
            messageEmbed.setTitle(`Good morning, Love!! What can I do for you today?`);
        } else if (removedJarvis.indexOf('goodevening') >= 0 || removedJarvis.indexOf('good evening') >= 0) {
            messageEmbed.setTitle(`Good Evening, Love!! What can I do for you tonight?`);
        } else {
            messageEmbed.setTitle("I\'m here Love. What can I do for you?");
        }
        message.channel.send(messageEmbed).then((response) => response.delete({ timeout: 10000 }));
    }
    // KATERINA
    if (!message.author.bot && keterinaCommand >= 0 && (message.member.id === '270486410035855360' || message.member.id === '644417531154661376' || message.member.id === '624545972185464832')) {
        messageEmbed.setTitle("Katerina");
        messageEmbed.setColor([63, 154, 255]);
        if (message.content.toString().toLowerCase().indexOf('ily') >= 0) {
            messageEmbed.setDescription("Hi Sean Where do you wanna teleport");
        } else if (message.content.toString().toLowerCase().indexOf('pls') >= 0) {
            messageEmbed.setDescription("Higupin kita hanggang huling hininga mo");
        }
        else {
            messageEmbed.setDescription("Welcome Sir Kevin Pogi. What can I do for you today Sir?");
        }
        message.channel.send(messageEmbed);
    }
});

client.on('guildMemberAdd', member => {
    const genchatChannel = member.guild.channels.cache.find(ch => ch.id === genChannelID);
    const messageEmbed = new MessageEmbed();
    if (genchatChannel) {
        messageEmbed.setTitle(`Welcome to Batang Pasaway PH`);
        messageEmbed.setDescription(`WELCOME <@${member.user.id}>! Feel Free to Join VC's! \n I hope you enjoy your stay here at Batang Pasaway PH \n\n Please read the <#679274762010099724> and do some <#679288499484098560> \n\n After that head to <#679451760393322499>  to get yourself one or even many! \n\n\n\n Enjoy your stay and start chatting! \n\n\n\n`);
        messageEmbed.Color = 834242;
        messageEmbed.setImage("https://media.discordapp.net/attachments/731061289744334868/731129635349463040/123s.png");
        messageEmbed.setThumbnail(member.user.displayAvatarURL());
        messageEmbed.setAuthor("BP-Bot", "https://media.discordapp.net/attachments/731061289744334868/731129635349463040/123s.png", "https://discord.gg/7Mz6g6");
        genchatChannel.send(messageEmbed);
    }
});

client.on('guildMemberRemove', member => {
    const genchatChannel = member.guild.channels.cache.find(ch => ch.id === genChannelID);
    const messageEmbed = new MessageEmbed();
    if (genchatChannel) {
        messageEmbed.setTitle(`Maraming Salamat sa pag bisita sa Batang Pasaway PH`);
        messageEmbed.setDescription('Sana ay nag enjoy ka sa pagtambay sa aming muntinig tahanan');
        messageEmbed.Color = 834242;
        messageEmbed.setThumbnail("https://media.discordapp.net/attachments/731061289744334868/731129635349463040/123s.png");
        messageEmbed.setImage(member.user.displayAvatarURL());
        messageEmbed.setAuthor("BP-Bot", "https://media.discordapp.net/attachments/731061289744334868/731129635349463040/123s.png", "https://discord.gg/7Mz6g6");
        genchatChannel.send(messageEmbed);
    }
});

client.login(process.env.token);