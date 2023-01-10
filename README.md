# RCMC
## Remote Controlled Minecraft
![Icon](/images/icon.png)
<sub>Icon made by sticks</sub>
### What is this project?
RCMC is a [ChatTriggers](https://github.com/ChatTriggers/ChatTriggers) module and discord bot that will allow you to control a Minecraft game remotely. This lets a real Minecraft client connect to a server that can be controlled remotely, so if a server bans bots and programs like Mineflayer, this wont be detected as a bot.

## Setup

Note: this bot is 1000000% not final and these instructions are likely to change. They also will be made clearer in the future (Step 5 is a mess so I'll add photos and stuff soon (tm))

Prerequesits:
- NodeJS
- ChatTriggers

1. Clone the git repo
```sh
git clone https://github.com/Beedit/RCMC.git
```
2. cd into the folder
```sh
cd RCMC
```
3. Copy the chat trigger to your minecraft install.
```sh
cp -r RCMC ~/path/to/mc/config/ChatTriggers/modules
```
and run `/ct reload` in game.
4. Setup the bot
```sh
cd Bot
npm i
cp .env.example .env
```
5. Edit .env with your own preffered text editor and add the values\
PORT is the port this runs on locally. Probably an awful idea to port forward this as it has no security.\
TOKEN is the token of your discord bot. Create an application [here](https://discord.com/developers/applications) and create a bot. The thing you need to place here is the token. To get one you may need to hit the regenerate button.\
CLIENTID is the ID of your application. Its found under general information on the same page as the bot ([here](https://discord.com/developers/applications))\
SERVERID is the ID of the discord server where you are running the bot.
6. Invite the bot to your server using the url generator under Oauth2 (WITH applications.commands AND bot TICKED).
7. Run the bot
```sh
npm run start
```
Optionally if you are adding to the bot (Thanks <3), you can run it with
```sh
npm run dev
```
to have it use nodemon.
