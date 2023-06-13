const axios = require('axios');

// Function to generate a token
async function generateToken() {
  try {
    const response = await axios.post('https://outpost.mapmyindia.com/api/security/oauth/token', {
      grant_type: 'client_credentials',
      client_id: '33OkryzDZsId9jFby7Id9MQ9mXamhVziuRmbf14GHyTppglYf7oQn0RGc5xD3pUgBf-STKP6bp1FJImNpobjgQ==',
      client_secret: 'lrFxI-iSEg_DjgE1-wsqNcKjXxuNAKR2qUZ0OsyWvbJaZLhtW9YIEROE5RLNmTYwU8B-pGX0wAQYlMIt0C3Dg4UKuRX5VqMu',
    });

    // Extract the access token from the response
    const accessToken = response.data.access_token;

    // Use the token to make an authenticated API request
    const apiUrl = 'https://apis.mapmyindia.com/advancedmaps/v1/c0e549c22fcecb03115384feee58c014/map_load?v=1.5';
    const apiResponse = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    console.log(apiResponse.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function to generate token and make API request
generateToken();
