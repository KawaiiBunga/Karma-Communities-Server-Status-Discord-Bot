# Karma-Population-Discord-Bot
## This lightweight bot uses NodeJS, DiscordJS, and Gamedig to query your game server and display the player count as the status of the bot.

### **Requirements -** 
- NodeJS 18+
- A discord bot
- A game server supported by Gamedig (listed here: https://www.npmjs.com/package/gamedig)

### **Dependancies -**
- discord.js 13.12.0+
- gamedig 3.0.9+

### **Installation -**
1. Configure the index.js file to have your game server/bot parameters
![image](https://user-images.githubusercontent.com/107073565/208899748-c5e0672b-02a5-4193-8fec-2e943477119d.png)
![image](https://user-images.githubusercontent.com/107073565/208899933-18a414af-0a9f-4215-9c93-a798a6c7646e.png)

2A. Run the bot in a terminal/command prompt with NodeJS
- In a terminal or Command Prompt, run 
```node index.js```
- If the bot connects to your server, it will say "Bot initialized"
![image](https://user-images.githubusercontent.com/107073565/208900459-a98b3584-a4ec-41c9-ae1f-4538bbdbce79.png)

2B. Install with Docker
- In a terminal or command prompt, run:
``` docker build -t my-bot . ```
- Then, run the conatainer with:
``` docker run -d discord-bot ```

![image](https://user-images.githubusercontent.com/107073565/208900995-f527b1fd-abcf-4f5e-b967-efd7c8513f33.png)

