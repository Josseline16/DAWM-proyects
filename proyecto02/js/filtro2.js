 window.onload = function () {
        document.getElementById('buscar').addEventListener('click', () => {
          
          let anio = document.getElementById("anio");
          
          let aniotext= anio.options[anio.selectedIndex].text;
          console.log(aniotext);
          


          
          let genero = document.getElementById("genero");
          let generotext= genero.options[genero.selectedIndex].text;
          console.log(generotext);
          let value = document.getElementById("genero").value;
          console.log(value);

          if(aniotext=="Seleccione un año" || generotext=="Seleccione género"){
            alert('seleccione item válido');
          }

          /*mostrar grafico*/

          let url ='https://api.themoviedb.org/3/discover/movie?with_genres='+value+'&primary_release_year='+aniotext+'&api_key=4a055161818e0a0f4a9e7cb1e50b2c34';
          console.log(url);


          fetch(url)
          .then(response => response.json())
          .then(data1 => {
          
          let datos=[];
          let votos=[];
              
              for(let i=0;i<3;i++){
                  
                  let titulo =data1.results[i].title;
                  let voto=data1.results[i].vote_average;
                  datos.push(titulo);
                  votos.push(voto);
                  
              };


          const ctx = document.getElementById("myChart2");
        var myChart = new Chart(ctx, {
          type: "line",
          data: {
            labels: datos,
            datasets: [
              {
                
                data:votos,
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
          }).catch(console.error);




  })

};





