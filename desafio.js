
// Declaracion del personaje principal como un objeto donde se agrupan las variables asociadas a este personaje. Dentro de estas un array indicando los poderes que posee. 

let heroe = {
    vida: 1000,
    dano: 200,
    posiones: 2,
    poderes: [1,2,3,4]
}

// Declaracion del enemigo como un objeto donde se agrupan las variables asociadas a este personaje. Dentro de estas un array indicando el elemento que posee.

let enemigo = {
    vida: 2000,
    dano: 200,
    elementos: [1,2,3,4]
}

// Declaracion de variable para mantener el ciclo de combate activo, declaracion de variables check para validar que las opciones esten dentro del array, y declaracion de variables en general. 

let estadoCombate = true
let enemigoCheck = false
let poderesCheck = false
let indiceElementos
let tipoElemntoEnemigo

// Instrucciones de como interactuar con el juego.

alert ("🎊Bienvenido(a)🎊 al simulador de combate magico, te presentamos las instrucciones para utilizar esta herramienta: \n\n1. Selecciona un enemigo, los enemigos tienen un elemento natural por lo cual tendran fortalezas y debilidades contra ciertos elementos, tu mision es descubrirlas. \n\n2. la pantalla de estatus te indicara cuanto tienes de vida , cual es la vida del enemigo y la cantidad de posiones de vida disponibles. \n\n3. La pantalla de accion te indicara 3 acciones, atacar, beber posion o huir, las posiones te suman 200 de vida, huir termina el combate. \n\n4. tienes cuatro elementos para atacar a tu enemigo, descubre su debilidad. \n\n5. Si desas volver a jugar actualiza la pagina. \n\nBuena suerte 👍")

// Variable para selecionar tu oponente, se agrega la propiedad indexOf para validar dentro del array que l enemigo posea las propiedades descritas
while (enemigoCheck === false) { 
    tipoElemntoEnemigo = parseInt(prompt("Seleciciona tu contrincante: \n1. Slime de fuego 🔥 \n2. serpiente de agua 💧 \n3. Escorpion de arena 🗻 \n4. Alcon de viento 💨"))
    indiceElementos = enemigo.elementos.indexOf(tipoElemntoEnemigo)
    if (indiceElementos >= 0) {
        enemigoCheck = true
    } else if (indiceElementos === -1) {
        alert("Seleccion una opcion valida")
         enemigoCheck = false
    } 
}



// Funcion para mostrar en pantalla el estado de los jugadores en pantalla

function estadoActual() {
    alert("ESTADO ACTUAL" + "\n" + "\n💗Vida del heroe: " + heroe.vida + "\n🖤 Vida del enemigo: " + enemigo.vida + " " + "\n🍺 Cantidad de posiones: " + heroe.posiones)
}

// Funcion para recuperar vida con una posion, las posiones suman 200 de vida al heroe

function beberPosion() {
    if (heroe.vida < 1000 && heroe.posiones > 0) {
        heroe.posiones = heroe.posiones - 1
        heroe.vida = heroe.vida + 200
    } else if  (heroe.vida >= 1000) {
        alert ("Tu vida esta al 100  💗")

    } else if  (heroe.posiones <= 0) {
        alert ("No te quedan posiones 🍺")
    }
}

// Funcion para atacar al enemigo, vemos las posiciones de los array para identificarl el elemento de ataque enemigo y el tipo de ataque enemigo, segun sus fortalezas y debilidades se utilizan diferentes mensajes y multiplicadores de ataque.

function trunoDeAtaqueHeroe(indicePoderes) {
    if (indicePoderes === indiceElementos) {
        enemigo.vida = enemigo.vida - (heroe.dano /2)
        alert ("Usaste el mismo elemento que el enemigo \nNo es efectivo ❌")
    }  else if (indicePoderes === 0 && indiceElementos === 2) {
        enemigo.vida = enemigo.vida - (heroe.dano *2)
        alert ("Usaste LLamarada 🔥🔥🔥🔥🔥 \nEs super efectivo ✨")
    } else if (indicePoderes === 1 && indiceElementos === 0) {
        enemigo.vida = enemigo.vida - (heroe.dano *2)
        alert ("Usaste Pistola de agua 💧💧💧💧💧 \nEs super efectivo ✨")
    } else if (indicePoderes === 2 && indiceElementos === 3) {
        enemigo.vida = enemigo.vida - (heroe.dano *2)
        alert ("Usaste Bomba de arena 🗻🗻🗻🗻🗻 \nEs super efectivo ✨")
    } else if (indicePoderes === 3 && indiceElementos === 1) {
        enemigo.vida = enemigo.vida - (heroe.dano *2)
        alert ("Usaste Corte de viento 💨💨💨💨💨 \nEs super efectivo ✨")
    } else {
        enemigo.vida = enemigo.vida - heroe.dano
        alert ("tu ataque surtio efecto \nBusca su debilidad ❓")
    }
}

// Funcion de ataque del enemigo, el enemigo hace dano constante de 200

function turnodeAtaqueEnemigo() {
    heroe.vida = heroe.vida - enemigo.dano
    alert ("Recibiste dano enemigo 💥💥💥💥💥 \nCuida tu salud 💔")
    poderesCheck = false
}

// Ciclo de combate, el ciclo de combate cuenta con un verificador de estado para validar si el hero o el enemigo se encuentran con vida y poder seguir batallando. 

while (estadoCombate === true)    {

    estadoActual()

    let seleccionHeroe = parseInt(prompt("Seleciciona tu accion: \n1. Atacar 🧨 \n2. Beber posion 🍺 \n3. huir 🏃‍♂️"))

    if (seleccionHeroe === 1) {
        // verificador de seleccion para validar que las opciones seleccionadas se encuentren dentro del array y si no es asi repetir el ciclo.
        while (poderesCheck === false) { 
            tipoDeAtaqueHeroe = parseInt(prompt("Seleciciona tu tipo de ataque: \n1. Llamarada 🔥 \n2.Pistola de agua 💧 \n3. bomba de arena 🗻 \n4. corte de viento 💨"))
            indicePoderes = heroe.poderes.indexOf(tipoDeAtaqueHeroe)
            if (indicePoderes >= 0) {
                poderesCheck = true
            } else if (indicePoderes === -1) {
                alert("Seleccion una opcion valida")
                 enemigoCheck = false
            } 
        }
        trunoDeAtaqueHeroe(indicePoderes)
        turnodeAtaqueEnemigo()
    } else if (seleccionHeroe === 2) {
        beberPosion()
    } else if (seleccionHeroe === 3) {
        alert("Has huido del combate 🏃‍♂️💨")
        break
    } else {
        let seleccionHeroe = parseInt(prompt("Seleciciona una accion valida: \n1. Atacar 🧨 \n2. Beber posion 🍺 \n3. huir 🏃‍♂️"))
        continue      
    }   

    // resultado final, muestra si el combate se gano o se perdio o se empato. 

    if (heroe.vida > 0 && enemigo.vida <= 0) {
        alert("🎉Felicidades has ganado el combate🎉")
        estadoCombate = false
    } else if (heroe.vida <= 0 && enemigo.vida > 0) {
        alert("Lo siento has perdido, puedes volver a intentarlo 🎭")
        estadoCombate = false
    } else if (heroe.vida <= 0 && enemigo.vida <= 0) {
        alert("Casi lo logras ha sido un empate, puedes volver a intentarlo 🦥")
        estadoCombate = false
    }
}
