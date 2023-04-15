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

// |(?:`[^`\r\n]+`[\ \t]*)|(?:`{3}[^`\r\n]+`{3}[\ \t]*)+
// const oldRegex = /^\ *(?:[A-Z0-9ÆØÅ:].*[!?.:]|<@[0-9]+>|https?:\/\/|@[a-zA-Z0-9]+)\ *$/gm
const testRegex = /^[\ \t]*(?:(?:[\ \t]*[A-Z0-9ÆØÅ:][^?!.\r\n]*[?!.])+|<@[0-9]+>[^?!.\r\n]*[?!.](?:[\ \t]*[A-Z0-9ÆØÅ:][^?!.\r\n]*[?!.])*|https?:\/\/[^\r\n.]+\.[^?!.\r\n]+[?!.]?(?:[\ \t]*[A-Z0-9ÆØÅ:][^?!.\r\n]*[?!.])*|@[A-Za-z0-9]+[^?!.\r\n]*[?!.](?:[\ \t]*[A-Z0-9ÆØÅ:][^?!.\r\n]*[?!.])*|(?::[^:\r\n]+:[\ \t]*)+|(?:`[^`\r\n]+`[\ \t]*)|(?:`{3}[^`\r\n]+`{3}[\ \t]*)+)[\ \t]*$/gm

client.on(Events.MessageCreate, (message) => {
	if(message.author.bot || message.content.length < 1) return;
	// console.log(message.content);
	if(message.content.match(testRegex)) return;
	message.reply(msg);
});

client.login(token);
