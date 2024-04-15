ocument.addEventListener("DOMContentLoaded", function() {
    // Ocultar la sección de personajes y referencias al cargar la página
    document.getElementById("personajes").style.display = "none";
    document.getElementById("referencias").style.display = "none";

    // Mostrar u ocultar la sección de personajes al hacer clic en el botón correspondiente
    document.getElementById("btn-personajes").addEventListener("click", function() {
        var personajesSection = document.getElementById("personajes");
        if (personajesSection.style.display === "none") {
            personajesSection.style.display = "block";
            cargarPersonajes();
        } else {
            personajesSection.style.display = "none";
        }
    });

    // Mostrar u ocultar la sección de referencias al hacer clic en el botón correspondiente
    document.getElementById("btn-referencias").addEventListener("click", function() {
        var referenciasSection = document.getElementById("referencias");
        if (referenciasSection.style.display === "none") {
            referenciasSection.style.display = "block";
        } else {
            referenciasSection.style.display = "none";
        }
    });
});

// Función para cargar dinámicamente los personajes
function cargarPersonajes() {
    // Array de personajes
    var characters = [
        {
            nombre: "Rudeus Greyrat",
            seiyu: "Yumi Uchiyama1​, Rubén Quezada (español latino), Tomokazu Sugita2​ (vida anterior), Elliot Leguizamo (español latino) (vida anterior)",
            descripcion: "Antes de su reencarnación, era un NEET japonés de 34 años con sobrepeso que se convirtió en un recluido después de terminar la secundaria. Después de su reencarnación, descarta su identidad pasada y trabaja para hacer que su nueva vida como Rudeus Greyrat sea significativa. Como tal, adopta una personalidad de caballero, aunque la perversión de su vida pasada a veces surge y asusta a quienes lo rodean."
        },
        {
            nombre: "Sylphiette",
            seiyu: "Ai Kayano1​, Denisse Leguizamo (español latino)",
            descripcion: "Es la amiga de la infancia de Rudeus, que es en parte humana, elfa y de la raza de las bestias. Debido al 'Factor Laplace', un componente genético que otorga a sus dueños habilidades mágicas mejoradas, su cabello es de color verde. La influencia de Rudeus la ayudó a aprender a lanzar hechizos sin encantamiento y aumentar su capacidad mágica al entrenar desde pequeña. Es la primera esposa de Rudeus. Tiene orejas puntiagudas y tras el Incidente de Teletransportación, su cabello se vuelve blanco."
        },
        // Agregar más personajes aquí...
    ];

    // Obtener el contenedor de personajes
    var characterList = document.getElementById("character-list");

    // Limpiar el contenedor de personajes antes de agregar nuevos
    characterList.innerHTML = "";

    // Iterar sobre el array de personajes y agregar cada uno al HTML
    characters.forEach(character => {
        // Crear elementos HTML para el personaje
        var characterDiv = document.createElement("div");
        characterDiv.classList.add("character");

        var nombre = document.createElement("h3");
        nombre.textContent = character.nombre;
        characterDiv.appendChild(nombre);

        var seiyu = document.createElement("p");
        seiyu.textContent = "Seiyu: " + character.seiyu;
        characterDiv.appendChild(seiyu);

        var descripcion = document.createElement("p");
        descripcion.textContent = character.descripcion;
        characterDiv.appendChild(descripcion);

        // Agregar el personaje al contenedor de personajes
        characterList.appendChild(characterDiv);
    });
}
