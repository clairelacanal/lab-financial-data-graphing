

let startInitial = document.querySelector('#start');
startInitial.value = '2016-01-01'

let endInitial = document.querySelector('#end');
endInitial.value = '2018-01-01'

  const getBitcoinInfo = () => {
    let startDate = document.querySelector('#start').value;
    let endDate = document.querySelector('#end').value;

    
  
    axios
    .get(`https://api.coindesk.com/v1/bpi/historical/close.json$?start=${startDate}&end=${endDate}`)
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
  }
  
  getBitcoinInfo()




document.getElementById('start').addEventListener("change", getBitcoinInfo);
document.getElementById('end').addEventListener("change", getBitcoinInfo);
 

