const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src: "./assets/img/casa3.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src: "./assets/img/casa4.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "./assets/img/casa6.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de casa",
      src:
        "./assets/img/casa2.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "./assets/img/casa5.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "./assets/img/casa1.jpg",
      rooms: 5,
      m: 500
    }
  ];
  
  function TemplateCard(propiedad) {
    let templateHTML = `
              <div class="propiedad">
                  <div class="img" style="background-image: url('${propiedad.src}')"></div>
                  <section>
                      <h5>${propiedad.name}</h5>
                      <div class="d-flex justify-content-between">
                          <p>Cuartos: ${propiedad.rooms}</p>
                          <p>Metros: ${propiedad.m}</p>
                      </div>
                      <p class="my-3"> ${propiedad.description}</p>
                      <button class="btn btn-info ">Ver más</button>
                  </section>
              </div>
              `;
  
    return templateHTML;
  }
  
  function filtrarPropiedades() {
    let cantidadCuartos = document.querySelector('#cantidadCuartos').value;
    let metrosDesde = document.querySelector('#desde').value;
    let metrosHasta = document.querySelector('#hasta').value;
  
    if (cantidadCuartos == '' || metrosDesde == '' || metrosHasta == '') {
      alert('Debe rellenar todos los datos solicitados');
    }
    else {
  
      let htmlFiltrado = '';
      let cantidadCasas = 0;
  
      for (let casa of propiedadesJSON) {
        if (cantidadCuartos == casa.rooms && casa.m >= metrosDesde && casa.m <= metrosHasta) {
  
          htmlFiltrado += TemplateCard(casa);
          cantidadCasas++;
        }
      }
  
      let cards = document.querySelector('.propiedades');
      let totalElementos = document.querySelector('#totalElementos');
  
  
      cards.innerHTML = htmlFiltrado;
      totalElementos.innerHTML = cantidadCasas;
  
    }
  }
  
  let html = '';
  for (let propiedad of propiedadesJSON) {
    TemplateCard(propiedad);
    html += TemplateCard(propiedad);
    
  
  }
  
  let propiedadesDiv = document.querySelector('.propiedades');
  
  propiedadesDiv.innerHTML = html;
  