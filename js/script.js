const botones = document.querySelectorAll(".ver-mas"); //esto selecciona el boton, agregandole el All ya son varios
const botonesScroll = document.querySelector(".proyecto");
const seccion = document.querySelector("#proyectos");


botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        const proyecto = boton.parentElement;
        const detalle = proyecto.querySelector(".detalle");

        detalle.classList.toggle("oculto"); /*.toggle es lo que oculta*/ 

        if(detalle.classList.contains("oculto")) { /* contains, pregunta estado */
            boton.textContent = "ver más"; /*y esto dice cuando esta oculto es ver mas, cuando no esta oculto dice ver menos*/ 
        } else {
            boton.textContent = "Ver menos";
        }
    });
});

botonesScroll.addEventListener("click", () => {
    seccion.scrollIntoView({
        behavior: "smooth"
    });
});
