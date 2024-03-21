const fs = require('fs');
const axios = require('axios');

// Get API key from command line arguments
const apiKey = process.argv[2];

if (!apiKey) {
  console.error('Please provide the API key as a command line argument.');
  process.exit(1);
}

// URL to fetch data from
const apiUrl = `https://itch.io/api/1/${apiKey}/my-games`;

// Function to fetch data and save it to a JSON file
async function fetchDataAndSave() {
  try {
    const response = await axios.get(apiUrl);
    const jsonData = response.data;

    // Save data to a JSON file
    fs.writeFileSync('games.json', JSON.stringify(jsonData, null, 2));
    console.log('Data saved to games.json successfully.');
  } catch (error) {
    console.error('Error fetching or saving data:', error.message);
  }
}

// Call the function to fetch data and save it
fetchDataAndSave();