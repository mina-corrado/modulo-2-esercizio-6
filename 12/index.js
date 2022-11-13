function cambiaColorePrezzo(){
    let elements = document.querySelectorAll('td div');
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        const R = Math.ceil(Math.random()*255);
        const G = Math.ceil(Math.random()*255);
        const B = Math.ceil(Math.random()*255);
        element.style.color = `rgb(${R},${G},${B})`;
    }
}
cambiaColorePrezzo();