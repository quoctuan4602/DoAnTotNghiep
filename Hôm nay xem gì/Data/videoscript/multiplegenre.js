const buttonContainer = document.getElementById('button-container');
const mergeButton = document.getElementById('merge-button');
const result = document.querySelector("ol")
const show = document.querySelector(".show")
const arrays = [["The 355", "All Quiet on the Western Front", "Ambulance", "Avatar: The Way of Water", "The Batman", "Beast", "Black Adam", "Black Panther: Wakanda Forever", "Brahmāstra", "Bullet Train", "Catwoman: Hunted", "A Day to Die", "Day Shift", "Doctor Strange in the Multiverse of Madness", "The Gray Man", "Jurassic World Dominion", "The Man from Toronto", "Morbius", "Samaritan", "Secret Headquarters", "Sisu", "Sonic the Hedgehog 2", "Thor: Love and Thunder", "Top Gun: Maverick", "Uncharted", "Violent Night", "Kung fu Ghost", "Sonic HedgeHog2", "The Man from Toronto", "the Out-Lows", "Thor: Love and Thunder", "Too Cool to Kill", "Tower of Strength", "The Adam Project", "Jurassic World Dominion", "Lightyear", "Moonfall", "Sonic the Hedgehog 2", "Strange World", "Warriors of Future", "Ambulance", "Beast", "Bheemla Nayak", "Bullet Train", "A Day to Die", "Memory", "Monkey Man", "Mr. Harrigan's Phone", "Prey", "The 355", "The Batman", "The Contractor", "The Expendables 4", "The Gray Man", "Valimai", "Vikram", "Prey", "Qodrat", "The Retaliators", "A Day to Die", "Oppanda", "The Batman"],

["Beast", "The Man from Toronto", "Secret Headquarters", "Sonic the Hedgehog 2", "13 The Musical", "A Man called Otto", "About Fate", "Amsterdam", "Another me", "Anything's possible", "Beavis and Butthead do the universe", "Bhediya", "Bob's Burgers: The Movie", "Bros", "Cheaper by the Dozen", "Chip 'n Dale: rescue Rangers", "DC League of Super Pets", "Disenchanted", "Do Revenge", "Dog", "Easter Sunday", "Everything Everyewhere all at One", "Hocus Pocus 2", "Hotel Transylvania: Transformia", "Jackass Forever", "KillRoy was Here", "Kung fu Ghost", "Laal Singh Chaddha", "Luck", "Marry Me", "Minions: The Rise of Gru", "My Best Friend's Exorcism", "Paws of Fury: The Legend of Hank", "Puss in Boots: The Last Wish", "Rosaline", "Sneakerella", "South Park: The Streaming Wars", "Tall Girl 2", "The Bad Guyz", "The Valet", "Thor: Love and Thunder", "Ticket to Paradise", "Too Cool to Kill", "Tower of Strength", "Wendell and Wild", "White Noise", "Bhool Bhulaiyaa 2", "Bodies Bodies Bodies", "Fresh", "Gatlopp: Hell of a Game", "Slayers", "Studio 666", "Bhamakalapam", "Glass Onion: A Knives Out Mystery", "See How They Run"],

["Top Gun: Maverick", "A Man called Otto", "Laal Singh Chaddha", "A Jazzman's Blues", "A Man Called Otto", "After Ever Happy", "All Quiet on the Western Front", "Armageddon Time", "Babylon", "Blonde", "Devotion", "Downton Abbey: A New Era", "Elvis", "Empire of Light", "Hollywood Stargirl", "Whitney Houston: I Wanna Dance with Somebody", "Laal Singh Chaddha", "Men", "Mrs. Harris Goes to Paris", "Prancer: A Christmas Tale", "Redeeming Love", "She Said", "The Fabelmans", "The Good House", "Till", "Where the Crawdads Sing", "White Bird: A Wonder Story", "Women Talking", "After Yang", "Crimes of the Future", "Dual", "Petrópolis", "Prey", "Rubikon", "Spiderhead", "Where the Crawdads Sing", "Choose or Die", "The Mean One", "Speak No Evil", "You Won't Be Alone", "The Outfit"],

["Day Shift", "Morbius", "Bhediya", "Hocus Pocus 2", "Hotel Transylvania: Transformia", "KillRoy was Here", "My Best Friend's Exorcism", "Wendell and Wild", "Men", "Crimes of the Future", "Nope", "Prey", "Bed Rest", "The Black Phone", "The Devil's Light", "The Pale Blue Eye", "Barbarian", "The Bride", "Bodies Bodies Bodies", "Choose or Die", "Dig", "Doctor Strange in the Multiverse of Madness", "The Elderly", "Fresh", "Firestarter", "Gatlopp: Hell of a Game", "Halloween Ends", "Hatching", "Hellraiser", "Ivanna", "Jaula", "KillRoy Was Here", "M3GAN", "The Mean One", "Mr. Harrigan's Phone", "Nanny", "No Exit", "Nope", "Orphan: First Kill", "The Pale Blue Eye", "Pearl", "Piggy", "Prey", "Qodrat", "The Retaliators", "The Requin", "Run Sweetheart Run", "The Sadness", "Satan's Slaves 2: Communion", "Scream", "The Seed", "Skinamarink", "Slayers", "Smile", "Speak No Evil", "Studio 666", "Terrifier 2", "Texas Chainsaw Massacre", "They Live in the Grey", "Umma", "Venus", "X", "You Won't Be Alone"],

["The Batman", "Catwoman: Hunted", "Spiderhead", "Catwoman: Hunted", "Deep Water", "Don't Worry Darling", "The Batman", "Pearl", "Amsterdam", "Bhamakalapam", "Capturing the Killer Nurse", "Catwoman: Hunted", "A Day to Die", "Death on the Nile", "Enola Holmes 2", "Glass Onion: A Knives Out Mystery", "Oppanda", "See How They Run", "The American Dream", "The Bad Guys", "The Batman", "The Good Nurse", "The Killer", "The Outfit", "Marlowe"],

["About Fate", "Anything's possible", "Bros", "Disenchanted", "Do Revenge", "Marry Me", "Rosaline", "Tall Girl 2", "The Valet", "Ticket to Paradise", "After Ever Happy", "Empire of Light", "Hollywood Stargirl", "Redeeming Love", "Oppanda"],

["Avatar: The Way of Water", "Jurassic World Dominion", "Beavis and Butthead do the universe", "The Adam Project", "After Yang", "Avatar: The Way of Water", "The Batman", "Bigbug", "Black Panther: Wakanda Forever", "Crimes of the Future", "Dual", "Jurassic World Dominion", "Lightyear", "Maika: The Girl From Another Galaxy", "Moonfall", "Nope", "Petrópolis", "Prey", "Rubikon", "Sonic the Hedgehog 2", "Spiderhead", "Strange World", "Troll", "Warriors of Future", "Mr. Harrigan's Phone", "Prey", "M3GAN", "Nope", "Prey"],

["The 355", "Ambulance", "Avatar: The Way of Water", "The Batman", "Bullet Train", "A Day to Die", "Day Shift", "The Gray Man", "Morbius", "Samaritan", "Violent Night", "Too Cool to Kill", "Where the Crawdads Sing", "The Batman", "Black Panther: Wakanda Forever", "Dual", "Jurassic World Dominion", "Nope", "Prey", "Spiderhead", "Warriors of Future", "365 Days: This Day", "Alice, Darling", "All the Old Knives", "Ambulance", "Bed Rest", "Beast", "Bheemla Nayak", "Bullet Train", "Catwoman: Hunted", "A Day to Die", "Death on the Nile", "Deep Water", "Don't Worry Darling", "Emancipation", "KIMI", "Master", "Memory", "Monkey Man", "Mr. Harrigan's Phone", "Prey", "Run Sweetheart Run", "Samaritan", "Scream", "The 355", "The Batman", "The Black Phone", "The Contractor", "The Devil's Light", "The Expendables 4", "The Gray Man", "The Northman", "The Pale Blue Eye", "Valimai", "Vikram", "Violent Night", "Where the Crawdads Sing", "Marlowe", "Barbarian", "Bed Rest", "The Black Phone", "The Bride", "Jaula", "M3GAN", "Men", "Mr. Harrigan's Phone", "Nanny", "No Exit", "The Pale Blue Eye", "Piggy", "The Requin", "Run Sweetheart Run", "The Sadness", "Speak No Evil", "They Live in the Grey", "Bhamakalapam", "Catwoman: Hunted", "Death on the Nile", "The American Dream", "The Batman", "The Good Nurse", "The Killer", "Marlowe"]];


const buttons = Array.from(buttonContainer.getElementsByTagName('button'));

buttons.forEach((button, index) => {
  button.addEventListener('click', function() {
    button.classList.toggle('pressed');
  });
});

mergeButton.addEventListener('click', function() {
  while (result.firstChild) {result.removeChild(result.firstChild)};

  const selectedButtons = buttons.filter(button => button.classList.contains('pressed'));

  if (selectedButtons.length === 0) {
    result.textContent = 'Please select at least one array.';
    return;
  }

  const selectedArrays = selectedButtons.map(button => {
    const arrayIndex = buttons.indexOf(button);
    return arrays[arrayIndex];
  });

  const mergedArray = selectedArrays.reduce((accumulator, currentArray) => {
    return accumulator.filter(element => currentArray.includes(element));
  });

  const resultArray = Array.from(new Set(mergedArray))
  for (let i = 0;i<resultArray.length;i++)
  {
    const li = document.createElement("li");
    li.textContent = resultArray[i];
    result.appendChild(li);
  }
});


