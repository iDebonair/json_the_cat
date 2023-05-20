const request = require('request');

const fetchBreedDescription = (specifiedBreed, callback) => {
  const baseUrl = 'https://api.thecatapi.com/v1/breeds/search';
  const query = `?q=${specifiedBreed}`;

  const url = baseUrl + query;

  request(url, function(error, response, body) {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      const firstEntry = data[0];
      if (firstEntry) {
        callback(null, firstEntry.description);
      } else {
        callback("Error: Specified breed not found.", null);
      }
    }
  });
};

module.exports = fetchBreedDescription;
