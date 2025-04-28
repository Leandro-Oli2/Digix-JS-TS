function selectById(id) {
    const titulo = document.getElementById(id);
    console.log(titulo);
}

function selectByClass(className) {
    const titulo = document.getElementsByClassName(className);
    console.log(titulo);
}
function selectTag(tag) {
    const titulo = document.getElementsByTagName(tag);
    console.log(titulo);
}

selectById("teste1");
selectByClass("paragrafo");
selectTag("h1");