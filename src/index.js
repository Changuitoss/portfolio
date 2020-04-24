function creaCeldas() {
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
proyectoSketch.addEventListener('mouseleave', despintarFlecha);