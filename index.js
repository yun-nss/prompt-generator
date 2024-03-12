// index.js
const faker = require('faker');

function generatePrompt() {
    return faker.lorem.sentence();
}

module.exports = generatePrompt;
