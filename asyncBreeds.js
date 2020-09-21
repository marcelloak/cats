const fs = require('fs');

const breedDetailsFromFile = function(breed, done) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) done(data);
    else done(undefined);
  });
};

module.exports = breedDetailsFromFile;

const printOutCatBreed = breed => console.log(breed);

breedDetailsFromFile('Bombay', printOutCatBreed);