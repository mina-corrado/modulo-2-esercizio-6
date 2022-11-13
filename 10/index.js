function aggiungiClasse(){
    let links = document.querySelectorAll('a');
    for (let index = 0; index < links.length; index++) {
        const element = links[index];
        element.className ='link';
    }
}
aggiungiClasse();