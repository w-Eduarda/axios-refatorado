// Código refatorado
const axios = require('axios');

async function requestData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Erro na requisição:', error.message);
    return null;
  }
}