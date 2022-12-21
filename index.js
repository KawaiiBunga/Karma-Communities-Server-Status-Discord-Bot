const { Client, Intents } = require('discord.js');
const Gamedig = require('gamedig');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', async () => {
//CONFIG//////////////////////////////////////////////////////////////////////////////////////
    const pingInterval = "5"; // How often the bot queries the server in seconds
    const game = "garrysmod"; // https://www.npmjs.com/package/gamedig - Games List
    const IP = "45.61.170.100"; // IP of server to query 
    const port = "27015"; // Port of server to query   
//CONFIG//////////////////////////////////////////////////////////////////////////////////////

//NO TOUCH///////////////////////////////////////////////////////////////////////////////////
    setInterval(async () => {
        try {
            const serverPing = await Gamedig.query({
                type: game, 
                host: IP, 
                port: port 
            });
    
            const playerCount = serverPing.players.length;
            const maxPlayers = serverPing.maxplayers;
//NO TOUCH////////////////////////////////////////////////////////////////////////////////////

//CHANGE STATUS///////////////////////////////////////////////////////////////////////////////
            const status = `on KarmaRP - ${playerCount}/${maxPlayers}` // Bot status, "Playing on KarmaRP - x/x"
//CHANGE STATUS///////////////////////////////////////////////////////////////////////////////

//NO TOUCH///////////////////////////////////////////////////////////////////////////////////
            client.user.setActivity(status)
        }
        catch (ex) {
            console.log(ex);
        }
    }, pingInterval);

    console.log("Bot initialized");
})
//NO TOUCH//////////////////////////////////////////////////////////////////////////////////

const token = process.env.BOT_TOKEN;

//BOT TOKEN/////////////////////////////////////////////////////////////////////////////////
client.login("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"); // Change to discord bot token
//BOT TOKEN/////////////////////////////////////////////////////////////////////////////////