const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp');
require('dotenv').config()

const client =  new SteamUser();

const logOnOptions = {
  accountName: 'riwhiz',
  password: process.env.PASSWORD,
  // twoFactorCode: SteamTotp.generateAuthCode(process.env.CODE),
};

client.logOn(logOnOptions);

client.on('loggedOn', ()=> {
  console.log('Logged into Steam');

  client.setPersona(SteamUser.EPersonaState.Online);
  client.gamesPlayed(440);
})
