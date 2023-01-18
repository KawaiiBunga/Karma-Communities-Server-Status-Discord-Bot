# Karma-Communities-Server-Status-Discord-Bot
## This lightweight bot uses NodeJS, DiscordJS, and Gamedig to query your game server and display the player count as the status of the bot.

### **Requirements -** 
- NodeJS 16+
- A discord bot
- A game server supported by Gamedig (listed here: https://www.npmjs.com/package/gamedig)

### **Dependencies -**
- discord.js 14.0+
- gamedig 3.0+

### **Config Walkthrough -**
1. Configure the config.json file to have your game server/bot parameters
![image](https://user-images.githubusercontent.com/107073565/213130567-0dfaea69-7482-4e5b-b95c-e56e0bf53c29.png)

```"token": ""``` - Discord Bot Token (https://docs.discordbotstudio.org/setting-up-dbs/finding-your-bot-token)

```"serverName": "KarmaRP"``` - Name of your server (Used in embeds)

```"website": "https://krma.site/" - Your website (Used in embeds)```

```"iconURL": "https://cdn.noclip.gg/ojdghuvWM9W_X2BV/z6UvrvLO8wjnIniLeGgjzfp0Dikqps-metaa2FybWEucG5n-.png"```- Icon URL (512x512 or less) (Used in embeds)

```"connectURL": "steam://connect/darkrp.krma.site"``` - (Used in embeds) (Can really be whatever you want it to be, the button says "Connect" though)

```"clientId": ""``` - Bot Client ID (Client Id can be found on the first page, remember it's not the bot token)

```"Game": "garrysmod"``` - Game compatibility list here: https://www.npmjs.com/package/gamedig#games-list

```"serverIP": "45.61.170.100"``` - IP of your games server

```"Port": "27015"``` - Port of your games server
	
```"Status": "on KarmaRP - :playerCount/:maxPlayers"``` - Use :playerCount and :maxPlayers for # of players connected and max # of players who can join

```"Presence": ":Online"``` -- ":Online", ":Idle", "DND"

### **Running the Bot -**

1. Run the bot in a terminal/command prompt with NodeJS (or PM2 with nodejs installed for linux)
- In a terminal or Command Prompt, run 
```node index.js``` or ```npm start```
- If everything is configured correctly, your bots output should look like this:
![image](https://user-images.githubusercontent.com/107073565/213130755-2daacb76-b479-446e-b496-3acdd2c87c6d.png)

Final result should look something like this:
![image](https://user-images.githubusercontent.com/107073565/213130875-714302a7-9c3e-439f-b0b0-db23fd487a57.png)


*slash commands being added later down the line for more functionality
