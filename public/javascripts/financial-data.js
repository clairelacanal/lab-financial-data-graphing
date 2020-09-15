
const url = `https://api.coindesk.com/v1/bpi/historical/close.json`;
 
axios
  .get(url)
  .then(response => {
    console.log(response.data)
  })
  .catch(err => console.log('Error while getting the data: ', err));



 
