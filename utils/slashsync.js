module.exports = async (client, options = {
    debug: false,
    guildId: null
}) => {

    const log = (message) => options.debug && console.log(message);

    const ready = client.readyAt ? Promise.resolve() : new Promise(resolve => client.once('ready', resolve));
    await ready;
    const currentCommands = await client.application.commands.fetch(options.guildId && { guildId: options.guildId });

    log(`Synchronizing commands...`);
    log(`Currently ${currentCommands.size} commands are registered to the bot.`);
   

    log(`Commands synchronized!`);

    return {
        currentCommandCount: currentCommands.size
    };

};
