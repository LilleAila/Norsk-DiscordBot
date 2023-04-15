// If melding starte med liten bokstav eller slutte uten punktum:
// Send: Jeg må nevne at det er et ufravikelig og universelt prinsipp i norsk skriftspråk at enhver setning skal innledes med en stor bokstav og avsluttes med et interpunksjonstegn som enten er et punktum, et utropstegn eller et spørsmålstegn.

const { Client, Events, GatewayIntentBits, ContextMenuCommandAssertions } = require("discord.js");
const { token, msg } = require("./config.json");

// const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent
  ],
});

client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

const endSymbols = "!.?:"

client.on(Events.MessageCreate, (message) => {
	if(message.author.bot) return;
	console.log(message.content);
    // console.log(message.content)
	// if(message.content == "ping") {
	// 	message.reply("pong")
	// }
	// const content = message.content.trim();
	// console.log(content)
	// if(content.slice(0, 4) == "http" || content.match(/<@[0-9]*>/g)) return;
	// if(content[0] == content[0].toUpperCase() && endSymbols.includes(content[content.length-1])) return;
	if(message.content.match(/^\ *(?:[A-Z0-9].*[!?.:]|<@[0-9]+>|https?:\/\/|@[a-zA-Z]+)\ *$/gm)) return;
	message.reply(msg);
});

client.login(token);
