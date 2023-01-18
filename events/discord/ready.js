const register = require('../../utils/slashsync');
const Gamedig = require("gamedig")
const { ActivityType } = require("discord.js");

module.exports = async (client) => {
    await register(client, client.register_arr.map((command) => ({
      name: command.name,
      description: command.description,
      options: command.options,
      type: '1'
    })), {
      debug: true
    });
    // Register slash commands - ( If you are one of those people who read the codes I highly suggest ignoring this because I am very bad at what I am doing, thanks LMAO )
    console.log(`[ / | Slash Command ] - ✅ Loaded all slash commands!`)
    console.log(`[STATUS] ${client.user.tag} is now online!`);

    
      setInterval(() => {
          const { Game, serverIP, Port, serverName} = require('../../config.json'); 
          //gamedig ping for server status//
          Gamedig.query({
            type: Game, 
            host: serverIP, 
            port: Port 
          }).then((serverPing) => {
              //Consts for config/status replacement
              let { Status, Presence } = require('../../config.json'); 
              const playerCount = serverPing.players.length;
              const maxPlayers = serverPing.maxplayers;
              
              const Online = "online";
              const Idle = "idle";
              const DND = "dnd";

              //Replace strings in config with proper code
              Status = Status.replace(":playerCount", playerCount);
              Status = Status.replace(":maxPlayers", maxPlayers);

              Presence = Presence.replace(":Online", Online);
              Presence = Presence.replace(":Idle", Idle);
              Presence = Presence.replace(":DND", DND);

              client.user.setPresence({
              activities: [{ name: Status, type: ActivityType.Playing }],
              status: Presence,
              });
              console.log(`[STATUS] Presence Updated, ${playerCount}/${maxPlayers} on ${serverName}`);
            });  
    //How often gamedig will query server, set in config
    }, 25000); //10 seconds (x * 1000 = seconds)


};
