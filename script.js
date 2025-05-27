const partesDelCuerpo = [
  "Cuerpo", "Cabeza", "Orejas", "Ojos", "Nariz",
  "Patas", "Cola", "Pelaje", "Color"
];

const animales = [
  "Perro", "Gato", "Conejo", "Hámster", "Cobaya", "Hurón", "Canario", "Periquito", "Loro", "Pez dorado",
  "Pez betta", "Tortuga de agua", "Tortuga de tierra", "Gallo", "Gallina", "Pato", "Ganso", "Paloma", "Caballo", "Burro",
  "Cabra", "Oveja", "Vaca", "Cerdo", "Pavo", "Asno", "Gallina de Guinea", "Codorniz", "Zarigüeya",
  "León", "Tigre", "Elefante africano", "Elefante asiático", "Rinoceronte", "Hipopótamo", "Jirafa", "Cebra", "Búfalo africano",
  "Antílope", "Ñu", "Gacela", "Leopardo", "Guepardo", "Oso pardo", "Oso polar", "Oso negro", "Panda gigante", "Koala",
  "Canguro", "Wallaby", "Lobo", "Zorro", "Hiena", "Chacal", "Mapache", "Tejón", "Nutria", "Castor", "Armadillo",
  "Perezoso", "Murciélago", "Erizo", "Lémur", "Mandril", "Babuino", "Gorila", "Chimpancé", "Orangután", "Dingo",
  "Guanaco", "Tapir", "Okapi", "Suricata", "Mono ardilla", "Águila", "Halcón", "Buitre", "Lechuza", "Búho",
  "Flamenco", "Pelícano", "Gaviota", "Albatros", "Pingüino emperador", "Pingüino de Humboldt", "Tucán", "Guacamayo",
  "Loro gris", "Cacatúa", "Pavo real", "Faisán", "Avestruz", "Emú", "Kiwi", "Colibrí", "Golondrina", "Ruiseñor",
  "Mirlo", "Jilguero", "Estornino", "Urraca", "Cuervo", "Grajo", "Pájaro carpintero", "Martín pescador", "Cigüeña",
  "Garza", "Ibis", "Ave del paraíso", "Tordo", "Pardillo", "Zorzal", "Petirrojo", "Tiburón blanco", "Tiburón martillo",
  "Tiburón tigre", "Tiburón ballena", "Orca", "Delfín mular", "Delfín rosado", "Ballena azul", "Ballena jorobada",
  "Narval", "Beluga", "Foca", "Lobo marino", "Morsa", "Manatí", "Dugongo", "Pez payaso", "Pez cirujano", "Pez león",
  "Pez globo", "Pez espada", "Pez vela", "Pez luna", "Atún rojo", "Salmón", "Trucha", "Bacalao", "Merluza", "Sardina",
  "Anchoa", "Caballa", "Arenque", "Anguila", "Raya", "Esturión", "Lenguado", "Rodaballo", "Pez gato", "Abeja", "Avispa",
  "Hormiga", "Mosquito", "Mosca", "Mariposa monarca", "Mariposa azul", "Polilla", "Escarabajo", "Mariquita", "Libélula",
  "Grillo", "Saltamontes", "Cigarra", "Cucaracha", "Termita", "Chinche", "Pulga", "Piojo", "Garrapata", "Araña",
  "Tarántula", "Escorpión", "Ciempiés", "Milpiés", "Caracol", "Babosa", "Almeja", "Mejillón", "Ostra", "Calamar",
  "Pulpo", "Medusa", "Estrella de mar", "Serpiente pitón", "Serpiente boa", "Anaconda", "Cobra real", "Mamba negra",
  "Víbora", "Culebra", "Serpiente de maíz", "Serpiente coral", "Serpiente de cascabel", "Iguana verde", "Iguana rinoceronte",
  "Camaleón pantera", "Camaleón velado", "Camaleón de Jackson", "Lagarto ocelado", "Lagarto monitor", "Lagartija ibérica",
  "Lagartija común", "Gecko leopardo", "Gecko tokay", "Salamandra común", "Tritón alpino", "Sapo común",
  "Rana de ojos rojos", "Tortuga de orejas rojas", "Tortuga mediterránea", "Tortuga de bosque", "Caimán de anteojos",
  "Cocodrilo del Nilo", "Dragón de Komodo"
];

let criatura = {};

function crearInterfaz() {
  const contenedor = document.getElementById("categories");
  partesDelCuerpo.forEach(parte => {
    const row = document.createElement("div");
    row.className = "row";
    row.onclick = () => {
      const aleatorio = animales[Math.floor(Math.random() * animales.length)];
      criatura[parte] = aleatorio;
      valor.textContent = aleatorio;
      valor.style.fontWeight = "bold";
    };

    const etiqueta = document.createElement("div");
    etiqueta.className = "label";
    etiqueta.textContent = parte;

    const valor = document.createElement("div");
    valor.className = "value";
    valor.textContent = "";

    row.appendChild(etiqueta);
    row.appendChild(valor);
    contenedor.appendChild(row);
  });
}

function generarImagen() {
  partesDelCuerpo.forEach(parte => {
    if (!criatura[parte]) {
      const aleatorio = animales[Math.floor(Math.random() * animales.length)];
      criatura[parte] = aleatorio;
    }
  });

  const contenedor = document.getElementById("resultadoFinal");
  contenedor.innerHTML = "";

  const titulo = document.createElement("h1");
  titulo.textContent = "BESTIARIO";

  const subtitulo = document.createElement("p");
  subtitulo.className = "autor";
  subtitulo.textContent = "by Cabeza de Borrador";

  const nombreLabel = document.createElement("p");
  nombreLabel.className = "nombre-label";
  nombreLabel.textContent = "Nombre de tu criatura:";

  const dibujo = document.createElement("div");
  dibujo.id = "dibujo";

  const descripcion = document.createElement("p");
  descripcion.className = "descripcion";
  let textoDescripcion = "Esta criatura tiene:\n";
  const partes = [];

  for (const parte of partesDelCuerpo) {
    if (criatura[parte]) {
      partes.push(`• ${parte.toLowerCase()} de ${criatura[parte]}`);
    }
  }

  textoDescripcion += partes.join("\n") + ".";
  descripcion.textContent = textoDescripcion;

  contenedor.appendChild(titulo);
  contenedor.appendChild(subtitulo);
  contenedor.appendChild(nombreLabel);
  contenedor.appendChild(dibujo);
  contenedor.appendChild(descripcion);

  contenedor.style.display = "block";

  html2canvas(contenedor).then(canvas => {
    const link = document.createElement("a");
    link.download = "bestiario.png";
    link.href = canvas.toDataURL();
    link.click();
    contenedor.style.display = "none";
  });
}

window.onload = () => {
  crearInterfaz();
};
