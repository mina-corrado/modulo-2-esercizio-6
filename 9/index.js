function cambiaIndrizzo(){
    window.history.pushState(null, null,  window.location.toString()+'/bblah');
}
cambiaIndrizzo();