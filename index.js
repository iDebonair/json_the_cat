const fetchBreedDescription = require('./breedFetcher');

const specifiedBreed = process.argv[2];

fetchBreedDescription(specifiedBreed, (error, desc) => {
  if (error) {
    console.log('Error fetching breed details:', error);
  } else {
    console.log(desc);
  }
});
