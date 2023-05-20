const request = require('request');
const url = 'https://api.thecatapi.com/v1/breeds/search';
const body = [
  {
    weight: {
      imperial: "8 - 16",
      metric: "4 - 7"
    },
    id: "sibe",
    name: "Siberian",
    cfaUrl: "http://cfa.org/Breeds/BreedsSthruT/Siberian.aspx",
    vetstreetUrl: "http://www.vetstreet.com/cats/siberian",
    vcahospitalsUrl: "https://vcahospitals.com/know-your-pet/cat-breeds/siberian",
    temperament: "Curious, Intelligent, Loyal, Sweet, Agile, Playful, Affectionate",
    origin: "Russia",
    countryCodes: "RU",
    countryCode: "RU",
    description: "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ",
    lifeSpan: "12 - 15",
    indoor: 0,
    lap: 1,
    altNames: "Moscow Semi-longhair, HairSiberian Forest Cat",
    adaptability: 5,
    affectionLevel: 5,
    childFriendly: 4,
    dogFriendly: 5,
    energyLevel: 5,
    grooming: 2,
    healthIssues: 2,
    intelligence: 5,
    sheddingLevel: 3,
    socialNeeds: 4,
    strangerFriendly: 3,
    vocalisation: 1,
    experimental: 0,
    hairless: 0,
    natural: 1,
    rare: 0,
    rex: 0,
    suppressedTail: 0,
    shortLegs: 0,
    wikipediaUrl: "https://en.wikipedia.org/wiki/Siberian_(cat)",
    hypoallergenic: 1,
    referenceImageId: "3bkZAjRh1"
  }
];

const args = process.argv.slice(2);
const specifiedBreed = args[0];

const data = JSON.parse(JSON.stringify(body));
const firstEntry = data[0];

request(url, function(error) {
  if (error) {
    console.error('Error:', error);
  } else if (specifiedBreed && firstEntry.id === specifiedBreed) {
    console.log(firstEntry.description);
  } else {
    console.log("Error: Specified breed not found.");
  }
});
