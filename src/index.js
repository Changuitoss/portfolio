
function creaCeldasCalendario() {
  const panelCalendario = document.querySelector('.proyectos__imagen--calendario');
  for(var i = 0; i <= 35; i++) {
      const div = document.createElement('div');
      div.classList.add(`proyectos__imagen--calendario-celda-${i}`, 'proyectos__imagen--calendario-celda');
      if (i == 16 || i == 26 || i == 13) { // Agrega las imagenes a las celdas que voy a animar.
        const imagen = document.createElement('img');
        imagen.classList.add(`proyectos__imagen--calendario-${i}`);
        imagen.setAttribute('src', './src/img/checkmark.png');
        div.appendChild(imagen);
      } else if (i == 30) {
        const imagen = document.createElement('img');
        imagen.classList.add(`proyectos__imagen--calendario-${i}`);
        imagen.setAttribute('src', './src/img/x.png');
        div.appendChild(imagen);
      }
      panelCalendario.appendChild(div);
  }
  agregaMesCalendario();
  agregaDiasCalendario();
}

function agregaMesCalendario() {
  const nombreMesArr = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const fechaObj = new Date();
  const mes = nombreMesArr[fechaObj.getMonth()]
  const celdaMes = document.querySelector('.proyectos__imagen--calendario-celda-0');
  celdaMes.textContent = mes;
}

function agregaDiasCalendario() {
  const nombreDiaArr = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];
  for (let i = 1; i <= 7; i += 1) {
    const celdaDia = document.querySelector(`.proyectos__imagen--calendario-celda-${i}`);
    celdaDia.textContent = nombreDiaArr[i - 1];
    celdaDia.style.border = '0';
    celdaDia.style.paddingTop = '.2rem';
  }

}

creaCeldasCalendario();






/* function creaCeldas() {
  const panelDibujo = document.querySelector('.proyectos__imagen--sketch-panel');
  for(var i = 0; i < 81; i++) {
      const div = document.createElement('div');
      div.classList.add(`proyectos__imagen--sketch-panel-celda-${i}`, 'proyectos__imagen--sketch-panel-celda');
      panelDibujo.appendChild(div);
  }
}

function pintarFlecha(e) {
  let count = 37;
  let count2 = 23;
  let count3 = 51;
  let count4 = 32;
  
  const interval = setInterval(() => {
    let proyectosBox = document.querySelector('.proyectos__sketch');
    let style = getComputedStyle(proyectosBox);
    let proyectosShadow = style.boxShadow; // Para chequear que aun estes :hover
    if (count <= 43 && proyectosShadow !== 'none') {
      const celda = document.querySelector(`.proyectos__imagen--sketch-panel-celda-${count}`);
      celda.classList.add('amarillo');
      count++;
    } else {
      clearInterval(interval)
    }
  }, 100)

  setTimeout(() => {
    const interval2 = setInterval(() => {
      let proyectosBox = document.querySelector('.proyectos__sketch');
      let style = getComputedStyle(proyectosBox);
      let proyectosShadow = style.boxShadow;
      if (count2 <= 33 && proyectosShadow !== 'none') {
        const celda = document.querySelector(`.proyectos__imagen--sketch-panel-celda-${count2}`);
        celda.classList.add('amarillo');
        count2 += 10;
      } else {
        clearInterval(interval2)
      }
    }, 100)
  }, 600);

  setTimeout(() => {
    const interval3 = setInterval(() => {
      let proyectosBox = document.querySelector('.proyectos__sketch');
      let style = getComputedStyle(proyectosBox);
      let proyectosShadow = style.boxShadow;
      if (count3 <= 59 && proyectosShadow !== 'none') {
        const celda = document.querySelector(`.proyectos__imagen--sketch-panel-celda-${count3}`);
        celda.classList.add('amarillo');
        count3 += 8;
      } else {
        clearInterval(interval3)
      }
    }, 100)
  }, 1200);

  setTimeout(() => {
    const interval4 = setInterval(() => {
      let proyectosBox = document.querySelector('.proyectos__sketch');
      let style = getComputedStyle(proyectosBox);
      let proyectosShadow = style.boxShadow;
      if (count4 <= 50 && proyectosShadow !== 'none') {
        const celda = document.querySelector(`.proyectos__imagen--sketch-panel-celda-${count4}`);
        celda.classList.add('amarillo');
        count4 += 18;
      } else {
        clearInterval(interval4)
      }
    }, 100)
  }, 1800);
}

function despintarFlecha(e) {
  const celdasPintadas = Array.from(document.querySelectorAll('.amarillo'));

  celdasPintadas.forEach((celda) => celda.classList.remove('amarillo'));
}

creaCeldas();

const proyectoSketch = document.querySelector('.proyectos__sketch');
proyectoSketch.addEventListener('mouseenter', pintarFlecha);
proyectoSketch.addEventListener('mouseleave', despintarFlecha); */