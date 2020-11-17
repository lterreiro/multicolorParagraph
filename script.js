let counter = 1;

function addParagraph(id, background = false) {
    let container = this.document.getElementById(id);
    if (container === undefined) {
        console.error('Não foi encontrado elemento com id ' + id);
        return false;
    }
    var para = document.createElement("p");
    para.innerHTML = counter + '. Parágrafo ' + counter;
    if (counter % 2 == 0) {
        para.className = 'amarelo';
        if (background) {
            para.className = para.className + " back-vermelho";
        }
    } else {
        para.className = 'vermelho';
        if (background) {
            para.className = para.className + " back-amarelo";
        }
    }
    counter++;
    container.appendChild(para);
}