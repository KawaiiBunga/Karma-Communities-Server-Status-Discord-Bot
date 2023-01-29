# Karma-Communities-Server-Status-Discord-Bot
## This lightweight bot uses NodeJS, DiscordJS, and Gamedig to query your game server and display the player count as the status of the bot.

![image](https://user-images.githubusercontent.com/107073565/213132696-41b4c62b-9319-4fe5-8c23-d1688808eceb.png)
![image](https://user-images.githubusercontent.com/107073565/213132811-1441f256-6eb5-4db8-8c79-ca2898437696.png)

### **Known Bugs -**
- If your server goes offline while the bot is running, after a while it will flood Discord's API with a bunch of requests, causing your bot token to be reset. Currently working on this.

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

```"serverName": "KarmaRP"``` - Name of your server (Used in embeds AND console output)

```"website": "https://krma.site/"``` - Your website (Used in embeds)

```"iconURL": "https://cdn.noclip.gg/ojdghuvWM9W_X2BV/z6UvrvLO8wjnIniLeGgjzfp0Dikqps-metaa2FybWEucG5n-.png"```- Icon URL (512x512 or less) (Used in embeds)

```"connectURL": "steam://connect/darkrp.krma.site"``` - (Used in embeds) (Can really be whatever you want it to be, the button says "Connect" though)

```"clientId": ""``` - Bot Client ID (Client Id can be found on the first page, remember it's not the bot token)

```"Game": "garrysmod"``` - Game compatibility list here: https://www.npmjs.com/package/gamedig#games-list

```"serverIP": "45.61.170.100"``` - IP of your games server

```"Port": "27015"``` - Port of your games server
	
```"Status": "on KarmaRP - :playerCount/:maxPlayers"``` - Use :playerCount and :maxPlayers for # of players connected and max # of players who can join

```"Presence": ":Online"``` -- ":Online", ":Idle", ":DND"

### **Running the Bot -**

1. Install the dependencies by opening a terminal/cmd prompt in the folder your bot is located in and run ```npm install```

2. Run the bot in a terminal/command prompt with NodeJS (or PM2 with nodejs installed for linux)
- In a terminal or Command Prompt, run 
```node index.js``` or ```npm start``` (for PM2, use ```pm2 start "npm start" --name "Whatever you wanna name this"```)
- If everything is configured correctly, your bots output should look like this:
![image](https://user-images.githubusercontent.com/107073565/213130755-2daacb76-b479-446e-b496-3acdd2c87c6d.png)

Final result should look something like this:
![image](https://user-images.githubusercontent.com/107073565/213130875-714302a7-9c3e-439f-b0b0-db23fd487a57.png)

### **Inviting the bot to your server -**

1. Go to your bots dev app page and click "OAuth2" on the left side

2. Under "OAuth2", click "URL Generator"

3. Select scopes as shown in the below image

4. Select bot permissions as shown in the below image

5. Copy the link under the "Bot Permissions" box, paste it in your browser, login with Discord, and invite the bot to your server!
![gitreadme](https://user-images.githubusercontent.com/107073565/213134525-ff29f242-25c8-4e29-ac7c-f348674a7053.png)



*slash commands being added later down the line for more functionality
