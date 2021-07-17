const   express     	= require("./web/app");
const	Discord			= require("discord.js");
const	config			= require("./config.json");
const 	vrbl			= require('./variable.json');
const   client      	= new Discord.Client();
const   format     		= require('./modules/format')
const	shortMsg		= require('./modules/shortMessage')
const	get				= require('./modules/getResponce')
const   cfg         	= config.tokenGeneral



// express();

client.login(cfg)
client.on('ready', () => {
	tmpMsg = `Бот был запущен с ${client.users.cache.size} пользователями, на каналах ${client.channels.cache.size} на серверах ${client.guilds.cache.size}. `;
	client.user.setActivity("за "+client.guilds.cache.size +" серверами", { type: 'WATCHING' }) // Что обображать в статусе бота"
	shortMsg.logs(tmpMsg, "");
	client.generateInvite(["ADMINISTRATOR"]).then(link => {
		console.log(link);
	});
	// client.guilds.cache.get('710928391569670186').leave()
});
client.on('disconnect',()=>{
	tmpMsg=`Бот был отключен`
	shortMsg.logs(tmpMsg, "")
});
client.on('reconnecting',()=>{
	tmpMsg=`Бот был перезапущен`
	shortMsg.logs(tmpMsg, "")
})
client.on('guildCreate',guild=>{
	tmpMsg=`Бот добавлен на еще один сервер`
	shortMsg.logs(tmpMsg, "");
	client.users.cache.get("290170884520673281").send(tmpMsg+"\n"+guild.name);
	guild.channels.cache.last().createInvite().then(invite =>client.users.cache.get("290170884520673281").send(`Приглашение ${invite}`)).catch(console.log("Ошибка получения инвайта"))
	// client.guilds.cache.get('540965001314172949').leave()
	client.user.setActivity("за "+client.guilds.cache.size +" серверами", { type: 'WATCHING' }) // Что обображать в статусе бота"

})

client.on('message', message => {
	// console.log(typeof (+message.content));
	if(format.isNum(message.content))return;
	if(message.content.length === 2)return;
	if(message.author.bot) return;
	//if(message.author.bot) return;
	if(message.attachments.size===1){message.react('👍'); return}
	// if(message==1){console.log;return}
	if(message.content === 'ping') {message.reply('Pong!')}
	if(message.content.toUpperCase()==="reset") {
        console.log("Перезапуск")
        client.destroy().then(async () => {
            await client.login(cfg)
        })
    }

	format.russianText(message.content);

	if(msg.search("привет") !== -1)shortMsg.hello(message);
	if(msg.search("почему") !== -1)shortMsg.why(message);
	if(msg.search("в смысле") !== -1)shortMsg.meaning(message);
	if(msg.search("без бота") !== -1)shortMsg.handmade(message);
	if(msg.search("разработчик ") !==-1)shortMsg.checkDev(message);
	if(msg.search("анекдот") !==-1)shortMsg.joke(message);
	if(msg === "разработчик")shortMsg.checkDev(message);
	if(msg.startsWith(config.prefix+'рудз')){shortMsg.help(message);return}
	if(msg.startsWith('рудз')){shortMsg.help(message);return}
	if(msg.startsWith(config.prefix+'помощь')){shortMsg.help(message);return}
	if(msg.startsWith('помощь')){shortMsg.help(message);return}
	if(msg.startsWith('!здфн')){return;}
	if(msg.startsWith('!ылшз')){return;}
	if(msg.startsWith('!ыуфкср')){return;}
	if(msg.startsWith('!куздфн')){return;}
	if(msg.startsWith('!ыещз')){return;}
	if(msg.startsWith('!зфгыу')){return;}
	if(msg.startsWith('!счет')) {shortMsg.allCrow(message, msg);return;}
	if(msg.startsWith('!счёт')) {shortMsg.allCrow(message, msg);return;}
	if(msg.startsWith('счет')) {shortMsg.allCrow(message, msg);return;}
	if(msg.startsWith('счёт')) {shortMsg.allCrow(message, msg);return;}
	if(msg.startsWith('!короны')) {shortMsg.allCrow(message, msg);return;}
	if(msg.startsWith('короны')) {shortMsg.allCrow(message, msg);return;}
	if(msg.startsWith('!коронки')) {shortMsg.allCrow(message, msg);return;}
	if(msg.startsWith('коронки')) {shortMsg.allCrow(message, msg);return;}
	if(msg.startsWith('!время')) {shortMsg.allCrow(message, msg);return;}
	if(msg.startsWith('время')) {shortMsg.allCrow(message, msg);return;}
	if(msg.startsWith(config.prefix+"удалить")){format.deleted(message,msg);return}
	if(msg.startsWith(config.prefix+"инвайт")){shortMsg.inviteLink(client, message);return}
	if(msg.startsWith(config.prefix+"добавить")){shortMsg.inviteLink(client, message);return}
	if(msg.startsWith(config.prefix+"ссылканабота")){shortMsg.inviteLink(client, message);return}
	if(msg.startsWith(config.prefix+"ссылка")){shortMsg.inviteLink(client, message);return}
	if(msg.startsWith(config.prefix+"добавитьбота")){shortMsg.inviteLink(client, message);return}
	if(msg.startsWith("удалить")){format.deleted(message,msg);return}
	if(msg.startsWith("инвайт")){shortMsg.inviteLink(client, message);return}
	if(msg.startsWith("добавить")){shortMsg.inviteLink(client, message);return}
	if(msg.startsWith("ссылканабота")){shortMsg.inviteLink(client, message);return}
	if(msg.startsWith("ссылка")){shortMsg.inviteLink(client, message);return}
	if(msg.startsWith("добавитьбота")){shortMsg.inviteLink(client, message);return}
	if(msg.startsWith(config.prefix+"клан")){format.searchValue(message, "2", "clan", false, true,"",null);return}
	if(msg.startsWith(config.prefix+"участники")){format.searchValue(message, "2", "members", false, true,"",null);return}
	if(msg.startsWith("0")){format.searchValue(message, "0", "spec", false, true,"",null)}
	if(msg.startsWith("1")){format.searchValue(message, "1", "arh", false, true,"",null)}
	if(msg.startsWith(config.prefix)){format.searchValue(message, config.prefix, "spec", true, true,"",null);return}
	if(msg.startsWith('тест')) {
		inviteLink(client, message)
		function inviteLink(client,message) {
			client.generateInvite(["ADMINISTRATOR"]).then(link => {
				console.log("Запрос ссылки на добавления бота",link);
				message.reply(link)
			});

		}
		message.channel.send(client.guilds.cache.map(guild => guild.id+"|"+guild.name).join(", \n"));
        // console.log("client.guilds.cache.", client.guilds.cache)
		m=message.author.username;
        console.log("m", m)
        message.reply(m)
		// message.reply(m)
		// console.log("545640");
		// message.guild.channels.cache.last().createInvite()
		// 	.then(invite =>console.log(`Приглашение ${invite}`))
		// 	.catch(console.log("Ошибка получения инвайта"))
        // console.log("message.guild.channels.cache.first()", message.guild.channels.cache)
		// txt = (message.attachments.size==0)?1:2
        // console.log("txt", txt)
	}

});

