window.addEventListener('DOMContentLoaded', (event) => {
      cargarDatos()
    
});

let cargarDatos = () => {
 
      var apikey= '4a055161818e0a0f4a9e7cb1e50b2c34';
      var base = 'https://api.themoviedb.org/3/';
     
 
      /*10 peliculas mas populares de la temporada*/
      let urlp='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4a055161818e0a0f4a9e7cb1e50b2c34';
      console.log(urlp)
      const datos =[];
      const popularidad =[];
      fetch(urlp)
          .then(response => response.json())
          .then(data => {
              
              for (let i=0;i<10;i++){
                
                datos.push(data.results[i].title);
                popularidad.push(data.results[i].popularity)
                
              };
            console.log(datos);



            
            
        const ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: datos,
            datasets: [
              {
                data: popularidad,
                lineTension: 0,
                backgroundColor: "transparent",
                borderColor: "#007bff",
                borderWidth: 4,
                pointBackgroundColor: "#007bff",
              },
            ],
          },
          options: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: false,
                  },
                },
              ],
            },
            legend: {
              display: false,
            },
          },
        });



          })
          

             





          .catch(console.error);


        


 };


/*
// Graph
var ctx = document.getElementById("myChart");

var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Sundayy",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
        lineTension: 0,
        backgroundColor: "transparent",
        borderColor: "#007bff",
        borderWidth: 4,
        pointBackgroundColor: "#007bff",
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
  },
});

*/