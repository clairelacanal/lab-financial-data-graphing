
// Je mets des valeurs initiales a mon tableau, si je ne fais pas ça, j'ai une page blanche
let startInitial = document.querySelector('#start'); 
startInitial.value = '2016-01-01'

let endInitial = document.querySelector('#end');
endInitial.value = '2018-01-01'


//Fonction getBitcoinInfo() dans laquelle j'utilise axios
  const getBitcoinInfo = () => {
    //Je recupère la valeur de mon user pour le START
    let startDate = document.querySelector('#start').value;
    //Je recupère la valeur de mon user pour le END
    let endDate = document.querySelector('#end').value;

    
  
    axios
    //Grâce à axios j'obtiens les données de mon API, je rajoute les deux valeurs de mon user selectionnées précedemment
    .get(`https://api.coindesk.com/v1/bpi/historical/close.json$?start=${startDate}&end=${endDate}`)
    .then(response => {
      console.log(response.data)
    //Je rappelle ma fonction printData pour imprimer visuellement mes données
      printData(response.data)
    })
    .catch(err => console.log('Error while getting the data: ', err));

    
  
    //Function qui imprime mes données
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



// Va permettre de changer le graphique en fonction des données émises par l'utilisateur
document.getElementById('start').addEventListener("change", getBitcoinInfo);
document.getElementById('end').addEventListener("change", getBitcoinInfo);
 

