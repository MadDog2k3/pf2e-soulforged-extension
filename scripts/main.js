//export const moduleID = 'pf2e-soulforged-extension';


//export const log = x => (x);
CONFIG.debug.hooks = true;

Hooks.once('init', () => {
    console.log("Init hook Test Message!");
});



Hooks.on('createItem', async (feat, options, userID) => {
    if (!feat.actor) return; // no actor
    if (userID !== game.user.id) return; 

    if(feat.name == 'Soulforger Dedication') {
        console.log("-- Hook for adding the Soulforger Dedication!");
    }

    //test
});