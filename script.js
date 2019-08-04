var quirks = []
quirks[0] = "You only ask questions.";
quirks[1] = "You think this is a job interview.";
quirks[2] = "You are a unsatisfied customer.";
quirks[3] = "You are a dog acting like a human.";
quirks[4] = "You are a fish out of water, constantly asking for water.";
quirks[5] = "You think someone is out to get you.";
quirks[6] = "You are in extreme pain and trying to hide it.";
quirks[7] = "You talk about manly things but with a feminine voice.";
quirks[8] = "You are constantly fishing for compliments.";
quirks[9] = "You are deaf in one ear.";
quirks[10] = "You are always trying to correct a word someone said correctly.";
quirks[11] = "You laugh at the end of everyone saying something.";
quirks[12] = "You are desperate for viewers on twitch.";
quirks[13] = "You are always out of breath.";
quirks[14] = "You are an IT tech support person.";
quirks[15] = "You are a kid faking to be an adult.";
quirks[16] = "Someone has a gravitational pull and you must orbit them.";
quirks[17] = "Everytime someone asks you a question, you get super offended.";
quirks[18] = "You are someones (whoever is playing) overprotected mother.";
quirks[19] = "You act like a KKona (country person)";
quirks[20] = "You act like an auctioneer.";
quirks[21] = "You have no awareness of personal space.";
quirks[22] = "You are a soviet spy.";
quirks[23] = "You have short term memory.";
quirks[24] = "You are a fbi most wanted.";
quirks[25] = "You are a detective.";
quirks[26] = "You are trying to summon demons.";
quirks[27] = "You can only talk in twitch emotes.";
quirks[28] = "You start as an old person and get younger with every drink or everytime you are talked to.";
quirks[29] = "You have a new persona whenever you switch seats.";

function Quirks () {
  var randomQuirk = Math.floor(Math.random()*(quirks.length));
  document.getElementById('pquirk').innerHTML = quirks[randomQuirk];
}
