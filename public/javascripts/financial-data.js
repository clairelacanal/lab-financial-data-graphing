
const url = `https://api.coindesk.com/v1/bpi/historical/close.json`;
 
axios
  .get(url)
  .then(response => {
    console.log(response.data)
    printData(response.data)
  })
  .catch(err => console.log('Error while getting the data: ', err));


  function printData(stockData) {
    const numberData = stockData['bpi'];

    const stockDates = Object.keys(numberData);
    const stockPrices = stockDates.map(date => numberData[date]);

    const ctx = document.getElementById('my-chart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: stockDates,
            datasets: [
                {
                    label: 'Financial Data Graph',
                    backgroundColor: 'red',
                    borderColor: 'yellow',
                    data: stockPrices
                }
            ]
        }
    })

  }

  
 


 
