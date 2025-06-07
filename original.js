// Código original (simplificado)
var axios = require('axios');
function requestData(url) {
  var result;
  try {
    axios.get(url).then(function(response) {
      result = response.data;
    });
  } catch(e) {
    console.log('Erro na requisição');
  }
  return result;
}