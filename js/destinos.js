const dataDestinos = [
  {
    id: 1,
    title: "Madrid",
    description: "Madrid es la capital de España y una de las ciudades más importantes del país, es una ciudad que combina la rica historia con la modernidad, ofreciendo una experiencia única a sus visitantes. Una de las principales características de Madrid es su arquitectura impresionante. La ciudad alberga una gran cantidad de edificios históricos, como el Puerto de Alcalá, el Palacio Real y la Plaza Mayor.",
    image: "../assets/img/D_madrid.webp",
    genre: "Europa | España | Histórico | Solo Vuelo",
    price: 1000,
    stock: 12,
  },
  {
    id: 2,
    title: "Roma",
    description: "Es uno de los principales centros turísticos de Italia y Europa, es famosa por sus muchos monumentos y museos, entre los que se cuentan el Coliseo, la Catedral de San Pablo, el Museo Vaticano, la Basílica de San Pedro, el Palacio de los Papas en el Vaticano, entre muchos otros",
    image: "../assets/img/D_roma.webp",
    genre: "Europa | Italia | Turismo | Histórico | Solo Vuelo",
    price: 850,
    stock: 6,
  },
  {
    id: 3,
    title: "Londres",
    description: "La capital de Inglaterra y del Reino Unido siendo una ciudad diversa, colorista, cosmopolita, deslumbrante. Una ciudad que cuenta con una historia de más de dos mil años, pero en la que se funde lo moderno y futurista con una gran profusión de artes y espectáculos.",
    image: "../assets/img/D_londres.webp",
    genre: "Europa | Londres | Histórico | Solo Vuelo",
    price: 920,
    stock: 93,
  },
  {
    id: 4,
    title: "Paris",
    description: "La ciudad es uno de los principales destinos turísticos del mundo, con una amplia variedad de restaurantes, bares, discotecas y teatros. También alberga numerosas galerías de arte, museos y exhibiciones.",
    image: "../assets/img/D_paris.webp",
    genre: "Europa | Francia | Romántico | Turismo | Solo Vuelo",
    price: 950,
    stock: 0,
  },
  {
    id: 5,
    title: "Estambul",
    description: "Antiguamente conocida como Bizancio y Constantinopla, es la ciudad más poblada de Turquía y el centro histórico, cultural y económico del país.",
    image: "../assets/img/D_estambul.webp",
    genre: "Europa | Asia | Histórico | Solo Vuelo",
    price: 893,
    stock: 86,
  },
  {
    id: 6,
    title: "Río de Janeiro",
    description: "Rio de Janeiro es conocida en todo el mundo por su increíble naturaleza: mar, playas, montañas y selvas tropicales forman un deslumbrante paisaje que se entrelaza con iconos creados por el hombre como el Cristo del Corcovado o el mirador del Pan de Azúcar.",
    image: "../assets/img/D_rio_de_janeiro.webp",
    genre: "Latinoamérica | América | Brasil | Verano | Solo Vuelo",
    price: 465,
    stock: 35,
  },
  {
    id: 7,
    title: "Nueva York",
    description: "Desde explorar los famosos monumentos hasta disfrutar de la cultura, el arte, las compras y la comida. No importa cuáles sean tus intereses, seguro encontrarás algo emocionante para hacer en esta increíble ciudad.",
    image: "../assets/img/D_new_york.webp",
    genre: "América | Estados Unidos | Turismo | Solo Vuelo",
    price: 1099,
    stock: 65,
  },
  {
    id: 8,
    title: "Ushuaia",
    description: "Situada en el extremo sur de Argentina, es la ciudad más austral del mundo rodeada por el mar y la cordillera ofreciendo unos paisajes inolvidables con una gran cantidad de actividades para hacer.",
    image: "../assets/img/D_ushuaia.webp",
    genre: "Latinoamérica | América | Argentina | Invierno | Turismo | Solo Vuelo",
    price: 550,
    stock: 10,
  },
  {
    id: 9,
    title: "Islas Phi Phi",
    description: "Asia es privilegiada también por sus playas paradisiacas. De hecho, se dice que el continente tiene algunas de las más bonitas del planeta. Las islas Phi Phi son una apuesta segura. ¡Es paraíso en la Tierra! Este archipiélago se encuentra en el tranquilo Mar de Andamán.",
    image: "../assets/img/D_tailandia_ko_phi_phi.webp",
    genre: "Asia | Thailandia | Verano | Turismo | Solo Vuelo",
    price: 850,
    stock: 10,
  },
  {
    id: 10,
    title: "Petra",
    description: "Siendo una de las Siete Maravillas del Mundo Moderno, Petra, ubicada en Jordania, es uno de los atractivos turísticos más visitados de Asia por su gran atractivo arqueológico.",
    image: "../assets/img/D_petra_jordania.webp",
    genre: "Oriente Medio | Asia | Jordania | Turismo",
    price: 1200,
    stock: 10,
  },
  {
    id: 11,
    title: "Viaje Tanzania + tour todo incluido",
    description: " descripcion",
    image: "../assets/img/D_tanzania.webp",
    genre: "África | Tanzania | Turismos | Paquetes",
    price: 1200,
    stock: 10,
  },
  {
    id: 11,
    title: "Viaje Madagascar + tour + hotel todo incluido",
    description: " descripcion",
    image: "../assets/img/D_madagascar.webp",
    genre: "África | Madagascar | Turismos | Paquetes",
    price: 1200,
    stock: 10,
  },
  {
    id: 12,
    title: "Viaje Kiribati + resort todo incluido",
    description: " descripcion",
    image: "../assets/img/D_kiribati.webp",
    genre: "Oceanía | Kiribati | Turismos | Paquetes",
    price: 1200,
    stock: 10,
  },
  {
    id: 13,
    title: "China - Corea del Sur - Japón",
    description: " descripcion",
    image: "../assets/img/D_china_corea_japon.webp",
    genre: "Asia | China  | Corea del Sur  | Japón  | Turismos | Paquetes",
    price: 1200,
    stock: 10,
  },
  {
    id: 13,
    title: "Islas Marshall + alojamiento",
    description: " descripcion",
    image: "../assets/img/D_islas_marshall.webp",
    genre: "Ocenía | República de las Islas Marshall  | Turismos | Paquetes",
    price: 1200,
    stock: 10,
  },    
];

const container = document.querySelector(".container");
const categorias = document.querySelector(".categorias")
const input = document.querySelector(".barra-buscar");

let destinosFiltrados = dataDestinos;

const createCards = (destinosFiltrados) =>{
  const card = destinosFiltrados.map((destinos) =>{
    return `<div class="tarjetas">
              <div class="card">
                <div class="verMas">
                  <img src="${destinos.image}" class="card-img-top" alt="Imagen de la pelicula ${destinos.title}">
                    <!--${destinos.stock === 0? `<div class="sinStock">Sin stock</div>`: ""}-->
                  <div class="card-body">
                    <div class="textos">
                      <h5 class="">${destinos.title}</h5>
                        <small class="card-genre">usd$${destinos.price}</small>
                    </div>
                    <!--<p class="card-text">${destinos.description.slice(0, 100)}...</p>-->
                  </div>
                </div>
              </div>
            </div>`;
  });
  container.innerHTML = card.join("");
};

const filterDestinos = (event) => {
  const destinosBuscar = event.target.value.toLowerCase();
  destinosFiltrados = dataDestinos.filter((destinos) => 
      destinos.title.toLowerCase().includes(destinosBuscar) ||
      destinos.genre.toLowerCase().includes(destinosBuscar)
  );
  createCards(destinosFiltrados);
};


input.addEventListener("input", filterDestinos);

const filtro = [
  "Todo",
  "África",
  "América",
  "Asia",
  "Europa",
  "Oceanía",
  "Solo vuelo",
  "Paquetes",
];

const botones = filtro.map(
  (filtro) => `<button class="genre-button">${filtro}</button>`
);

categorias.innerHTML = botones.join("");

const filterDestinosByGenre = (genre) => {
  let filteredDestinos;
  if (genre === "Todo") {
    filteredDestinos = dataDestinos;
  } else {
    filteredDestinos = dataDestinos.filter((destino) =>
      destino.genre.toLowerCase().includes(genre.toLowerCase())
    );
  }
  createCards(filteredDestinos);
};
  
const genreButtons = document.querySelectorAll(".genre-button");
genreButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    filterDestinosByGenre(event.target.innerText);
  });
});

createCards(destinosFiltrados);