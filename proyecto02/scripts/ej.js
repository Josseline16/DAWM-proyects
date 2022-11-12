window.addEventListener('DOMContentLoaded', (event) => {
      cargarDatos()
    
});

let cargarDatos = () => {
      let url = 'scripts/order.xml';
      fetch(url)
        .then(response => response.text())
        .then(data => {
          const parser = new DOMParser();
          const xml = parser.parseFromString(data, "application/xml");
          // Procesamiento de la constante xml

          let test=document.createElement('section');

          let names = xml.getElementsByTagName('Address');

          let ul=document.createElement('ul');
          document.body.appendChild(test);
          test.appendChild(ul);
          Array.from(names).forEach(function(element) {
            

            let li = document.createElement('li');
            ul.appendChild(li);

            li.innerHTML= li.innerHTML+element.getElementsByTagName("Name")[0].innerHTML;
            

          });
          

        })
        .catch(console.error);
}