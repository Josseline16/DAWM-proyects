window.addEventListener('DOMContentLoaded', (event) => {
      cargarDatos();
      cargarGeneros();
      
     
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
          type: "horizontalBar",
          data: {
            labels: datos,
            datasets: [
              {
                
                data: popularidad,
                lineTension: 0,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 205, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(201, 203, 207, 0.2)',
                  'rgba(255, 90, 132, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 205, 86, 0.2)'
                 
                ],
                borderColor:  [
                  'rgb(255, 99, 132)',
                  'rgb(255, 159, 64)',
                  'rgb(255, 205, 86)',
                  'rgb(75, 192, 192)',
                  'rgb(54, 162, 235)',
                  'rgb(153, 102, 255)',
                  'rgb(201, 203, 207)',
                  'rgb(255, 99, 132)',
                  'rgb(255, 159, 64)',
                  'rgb(255, 205, 86)'
                  
                ],
                borderWidth: 2,
                pointBackgroundColor: "#007bff",

              },
            ],
          },
          options: {
            indexAxis: 'y',
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
          

             /*

              mejores peliculas por año
             */





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

let cargarGeneros = () => {
 
      var apikey= '4a055161818e0a0f4a9e7cb1e50b2c34';
      var base = 'https://api.themoviedb.org/3/';
     
 
      /*10 peliculas mas populares de la temporada*/
      let urlpp='https://api.themoviedb.org/3/genre/movie/list?api_key=4a055161818e0a0f4a9e7cb1e50b2c34';
      console.log(urlpp)
      
      fetch(urlpp)
          .then(response => response.json())
          .then(data1 => {
              let select = document.getElementsByClassName('custom-select')[0];
              
              for(let i=0;i<data1.genres.length;i++){
                  
                  console.log(data1.genres[i].id);
                  let option = document.createElement("option")

                  
                  option.setAttribute("value", data1.genres[i].id);
                  option.innerHTML = data1.genres[i].name;
                  select.appendChild(option);
              };


       



          })
          

             /*

              mejores peliculas por año
             */





          .catch(console.error);


        


 };