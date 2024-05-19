 const { Message } = require('discord.js');

module.exports = {
 config: {
  name: 'horror',
  aliases: ['scary'],
  version: '1.0',
  author: 'Hassan',
  countDown: 5,
  role: 0,
  shortDescription: {
   vi: 'Gửi một thông điệp kinh dị ngẫu nhiên',
   en: 'Send a random horror-themed message'
  },
  longDescription: {
   vi: 'Gửi một thông điệp kinh dị ngẫu nhiên để gây sốt xuất hiện cho người dùng',
   en: 'Send a random horror-themed message to spook the user'
  },
  category: 'horror',
  guide: {
   vi: '{pn}',
   en: '{pn}'
  }
 },

 onStart: async function({ message }) {
  const horrorMessages = [
   '👻 BOO! Did I scare you?',
   '🦇 Be careful... something sinister is lurking nearby!',
   '💀 Are you brave enough to face your fears?',
   '🕸 Watch your step... a web of horror awaits!',
   '🌑 Darkness creeps in from every corner... what lurks in the shadows?',
   '😱 A chill runs down your spine as you feel an eerie presence in the room.',
   '😨 You hear the creak of a door that you thought was closed... and you’re alone.',
   '🥶 You sense a sudden drop in temperature and see your breath mist in the cold air, even though it’s the middle of summer.',
   '👤 A shadow moves across the wall, but there’s no one there to cast it.',
   '☎ You receive a phone call, but all you hear is heavy breathing on the other end.',
   'A bloodcurdling scream echoes through the darkness.',
   'You feel a cold hand on your shoulder, but there’s no one there.',
   'The hairs on the back of your neck stand up as you sense a malevolent presence nearby.',
   'You hear a sinister laugh that seems to come from all around you.',
   'Your heartbeat quickens as you realize you’re not alone in the room.',
   'You see a figure in the shadows, but it disappears when you look directly at it.',
   'The walls seem to close in around you as you feel an oppressive weight on your chest.',
   'You notice a strange symbol drawn in blood on the wall.',
   'Your breath catches in your throat as you feel something brush past you in the dark.',
   'You hear a creaking sound and realize the door to the room has closed and locked behind you.',
   'Your pulse races as you feel an unseen force pulling you towards the basement.',
   'You see a reflection in the mirror, but it’s not your own.',
   'A shiver runs down your spine as you hear the sound of a child giggling menacingly.',
   'The candle flame flickers and dies, plunging you into darkness.',
   'You feel a sharp pain as something pierces your skin, but you can’t see what it is.',
   'You hear a voice whispering your name, but there’s no one else in the room.',
   'You realize with horror that the eyes in the painting are following you around the room.',
   'A chill runs through you as you see a ghostly figure glide past the window.',
   'Your blood runs cold as you feel a sudden gust of icy wind in the otherwise still room.',
   'You hear a strange scratching sound coming from inside the walls.',
   'You feel an overwhelming sense of dread as you enter the abandoned house.',
   'You hear a low growling sound and realize there’s something in the room with you.',
   'You see a dark shape lurking at the edge of your vision, but it vanishes when you turn to look.',
   'You feel a sudden sense of vertigo as the room seems to spin around you.',
   'You realize with horror that the footsteps you hear are not your own.',
   'A cold gust of wind extinguishes the candle, leaving you in darkness.',
   'You see a shadowy figure standing at the foot of your bed, watching you sleep.',
   'You hear a strange, unearthly howl coming from the woods outside.',
   'You feel a sudden wave of nausea as you realize the meat you’re eating is human flesh.',
   'You see a strange, otherworldly light shining from beneath the door.',
   'Your skin crawls as you feel something brush against your leg in the dark.',
   'You hear a loud crash and realize something has just broken into the house.',
   'You feel a sense of déjà vu as you realize you’ve been in this nightmare before.',
   'You see a pair of glowing red eyes staring at you from the darkness.',
   'You hear a strange, whispering sound coming from the pages of an ancient book.',
   'You feel a strange compulsion to open the mysterious locked box.',
   'Your heart sinks as you realize the phone line has been cut.',
   'You see a figure in the window, but when you look again it’s gone.',
   'You feel a sudden chill as you see your breath frost in the air.',
   'You hear a strange, unearthly chanting coming from the woods.',
   'You realize with horror that the creepy doll is no longer in its case.'
  ];

  const horrorMessage = horrorMessages[Math.floor(Math.random() * horrorMessages.length)];
  await message.reply(horrorMessage);
 }
};