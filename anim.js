// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Odias todita esta ciudad", time: 9.5 },
  { text: "La gente te ha obligado a despedir", time: 14.5 },
  { text: "Días contados pa' escapar", time: 21.5 },
  { text: "Si lo haces, recuerda, estaré aquí", time: 25.5 },
  { text: "Y no es mucho", time: 32.5 },
  { text: "No soy tan distinto a los demás, mi niña", time: 36.3 },
  { text: "Pero si te vas recuerda", time: 40.5 },
  { text: "Estaré aquí, uh, uh", time: 47 },
  { text: "Te ha mentido toda esta ciudad", time: 55 },
  { text: "¿Qué han hecho? Si eres de admirar", time: 60.5 },
  { text: "Y mis brazos son para cuidar, mi amor", time: 65.5 },
  { text: "Estaré aquí, oh, oh", time: 75.5 },
  { text: "Siente mi alma, siempre fue pa' ti", time: 82.5 },
  { text: "Te amo más de lo que tú crees", time: 88.5 },
  { text: "Cuando arda toda esta ciudad, ya fue", time: 94.5 },
  { text: "Y estaré aquí", time: 102.5 },
  { text: "Uh, uh, uh, uh", time: 111.5 },
  { text: "Uh, uh, uh, uh", time: 116.5 },
  { text: "Uh, uh, uh, uh, uh", time: 121.5 },
  { text: "No estas sola siiii, un abrazoooo...!!!", time: 133.5 },
  { text: "Ahora si sigamos uh, uh", time: 139.5 },
  { text: "Uh, uh, uh, uh, uh", time: 145.5 },
  { text: "Si te han visto", time: 156.5 },
  { text: "Le has robado el brillo a la Luna y a Venus", time: 158.5 },
  { text: "Me has amado en guerra dulzura", time: 164.5 },
  { text: "Llevas tu luz", time: 171.5 },
  { text: "Y no es mucho", time: 178.5 },
  { text: "No soy tan distinto a los demás, mi niña", time: 181.5 },
  { text: "Pero si te vas recuerda", time: 187.5 },
  { text: "Estaré aquí", time: 193.5 },
  { text: "Te ha mentido toda esta ciudad", time: 201.5 },
  { text: "¿Qué han hecho? Si eres de admirar", time: 207.5 },
  { text: "Y mis brazos son para cuidar, mi amor", time: 212.5 },
  { text: "Estaré aquí", time: 221.5 },
  { text: "Siente mi alma, siempre fue pa' ti", time: 229.5 },
  { text: "Te amo más de lo que tú crees", time: 235.5 },
  { text: "Cuando arda toda esta ciudad, ya fue", time: 240.5 },
  { text: "Yo estaré aquí", time: 249.5 },
  { text: "Uh, uh, uh, uh", time: 258.5 },
  { text: "Uh, uh, uh, uh", time: 263.5 },
  { text: "Uh, uh, uh, uh, uh", time: 269.5 },
  { text: "Uh, uh, uh, uh", time: 280.5 },
  { text: "Uh, uh, uh, uh", time: 286.5 },
  { text: "Uh, uh, uh, uh, uh", time: 291.5 }
];  

// Optimizar la actualización de letras para móviles
function updateLyrics() {
    if (window.innerWidth < 600) { // Solo para móviles
        var time = Math.floor(audio.currentTime);
        var currentLine = lyricsData.find(
            (line) => time >= line.time && time < line.time + 4 // Reducir tiempo de visualización
        );

        if (currentLine) {
            var opacity = Math.min(1, (time - currentLine.time) / 0.5); // Transición más rápida
            lyrics.style.opacity = opacity;
            lyrics.style.fontSize = '16px'; // Tamaño fijo para móviles
            lyrics.innerHTML = currentLine.text;
        } else {
            lyrics.style.opacity = 0;
            lyrics.innerHTML = "";
        }
    } else {
        // Código original para desktop
    }
}

// Reducir intervalo de actualización para móviles
var updateInterval = window.innerWidth < 600 ? 500 : 1000;
setInterval(updateLyrics, updateInterval);

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
