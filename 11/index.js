function aggiungiTogliClasseImmagine(){
    let elements = document.querySelectorAll('img');
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        if (!element.classList.contains('not-visible')){
            element.classList.add('not-visible');
        } else {
            element.classList.remove('not-visible');
        }
    }
}
aggiungiTogliClasseImmagine();