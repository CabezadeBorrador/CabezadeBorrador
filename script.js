const partesDelCuerpo = [
  "Cuerpo", "Cabeza", "Orejas", "Ojos", "Nariz",
  "Piernas", "Cola", "Pelaje", "Color",
];

const animales = [
  "Perro", "Gato", "Conejo", "Hámster", "Cobaya", "Hurón", "Canario", "Periquito", "Loro", "Pez dorado",
  "Pez betta", "Tortuga de agua", "Tortuga de tierra", "Gallo", "Gallina", "Pato", "Ganso", "Paloma", "Caballo", "Burro",
  "Cabra", "Oveja", "Vaca", "Cerdo", "Pavo", "Asno", "Gallina de Guinea", "Codorniz", "Zarigüeya",
  "León", "Tigre", "Elefante africano", "Elefante asiático", "Rinoceronte", "Hipopótamo", "Jirafa", "Cebra", "Búfalo africano",
  "Antílope", "Ñu", "Gacela", "Leopardo", "Guepardo", "Oso pardo", "Oso polar", "Oso negro", "Panda gigante", "Koala",
  "Canguro", "Wallaby", "Lobo", "Zorro", "Hiena", "Chacal", "Mapache", "Tejón", "Nutria", "Castor", "Armadillo",
  "Perezoso", "Murciélago", "Erizo", "Lémur", "Mandril", "Babuino", "Gorila", "Chimpancé", "Orangután", "Dingo",
  "Guanaco", "Tapir", "Okapi", "Suricata", "Mono ardilla",
  "Águila", "Halcón", "Buitre", "Lechuza", "Búho", "Flamenco", "Pelícano", "Gaviota", "Albatros", "Pingüino emperador",
  "Pingüino de Humboldt", "Tucán", "Guacamayo", "Loro gris", "Cacatúa", "Pavo real", "Faisán", "Avestruz", "Emú",
  "Kiwi", "Colibrí", "Golondrina", "Ruiseñor", "Mirlo", "Jilguero", "Estornino", "Urraca", "Cuervo", "Grajo",
  "Pájaro carpintero", "Martín pescador", "Cigüeña", "Garza", "Ibis", "Ave del paraíso", "Tordo", "Pardillo",
  "Zorzal", "Petirrojo",
  "Tiburón blanco", "Tiburón martillo", "Tiburón tigre", "Tiburón ballena", "Orca", "Delfín mular", "Delfín rosado",
  "Ballena azul", "Ballena jorobada", "Narval", "Beluga", "Foca", "Lobo marino", "Morsa", "Manatí", "Dugongo",
  "Pez payaso", "Pez cirujano", "Pez león", "Pez globo", "Pez espada", "Pez vela", "Pez luna", "Atún rojo",
  "Salmón", "Trucha", "Bacalao", "Merluza", "Sardina", "Anchoa", "Caballa", "Arenque", "Anguila", "Raya",
  "Esturión", "Lenguado", "Rodaballo", "Pez gato",
  "Abeja", "Avispa", "Hormiga", "Mosquito", "Mosca", "Mariposa monarca", "Mariposa azul", "Polilla", "Escarabajo",
  "Mariquita", "Libélula", "Grillo", "Saltamontes", "Cigarra", "Cucaracha", "Termita", "Chinche", "Pulga", "Piojo",
  "Garrapata", "Araña", "Tarántula", "Escorpión", "Ciempiés", "Milpiés", "Caracol", "Babosa", "Almeja", "Mejillón",
  "Ostra", "Calamar", "Pulpo", "Medusa", "Estrella de mar",
  "Serpiente pitón", "Serpiente boa", "Anaconda", "Cobra real", "Mamba negra", "Víbora", "Culebra", "Serpiente de maíz",
  "Serpiente coral", "Serpiente de cascabel", "Iguana verde", "Iguana rinoceronte", "Camaleón pantera", "Camaleón velado",
  "Camaleón de Jackson", "Lagarto ocelado", "Lagarto monitor", "Lagartija ibérica", "Lagartija común", "Gecko leopardo",
  "Gecko tokay", "Salamandra común", "Tritón alpino", "Sapo común", "Rana de ojos rojos", "Tortuga de orejas rojas",
  "Tortuga mediterránea", "Tortuga de bosque", "Caimán de anteojos", "Cocodrilo del Nilo", "Dragón de Komodo"
];

// Estructura vacía al inicio
let criatura = {};

// Inicializa la tabla vacía sin valores asignados
function iniciarBestiario() {
  const contenedor = document.getElementById("categories");
  contenedor.innerHTML = "";

  partesDelCuerpo.forEach(parte => {
    criatura[parte] = "";
    agregarFila(parte, "");
  });
}

function obtenerAleatorio() {
  return animales[Math.floor(Math.random() * animales.length)];
}

function actualizarParte(parte) {
  criatura[parte] = obtenerAleatorio();
  const valorElemento = document.querySelector(`#valor-${parte}`);
  if (valorElemento) valorElemento.textContent = criatura[parte];
}

function agregarFila(parte, valor) {
  const contenedor = document.getElementById("categories");

  const fila = document.createElement("div");
  fila.className = "row";

  const etiqueta = document.createElement("div");
  etiqueta.className = "label";
  etiqueta.textContent = parte;

  const resultado = document.createElement("div");
  resultado.className = "value";
  resultado.id = `valor-${parte}`;
  resultado.textContent = valor;

  const boton = document.createElement("button");
  boton.textContent = "🔄";
  boton.style.marginRight= "10px";
  boton.onclick = () => actualizarParte(parte);

  fila.appendChild(etiqueta);
  fila.appendChild(resultado);
  fila.appendChild(boton);
  contenedor.appendChild(fila);
}

// Solo muestra la estructura vacía al cargar
window.onload = iniciarBestiario;
