const SteamUser = require('steam-user');
const client =  new SteamUser();
import { PASSWORD } from 'dotenv';

const logOnOptions = {
  accountName: 'riwhiz',
  password: PASSWORD,
};

client.logOn(logOnOptions);

client.on('loggedOn', ()=> {
  console.log('Logged into Steam');
})
