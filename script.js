let counter = 1;
let nome = 'A'

/**
 * Limpa o conteúdo do container identificado por id.
 * @param {*} id o id do container a limpar.
 */
function limpar(id) {
    let container = this.document.getElementById(id);
    if (container === undefined) {
        console.error('Não foi encontrado elemento com id ' + id);
        return false;
    }
    container.innerHTML = '';
    counter = 1;
    nome = 'A';
}

/**
 * Adiciona um elemento 'p' ao container identificado por id.
 * @param {String} id id do container.
 * @param {boolean} background se true, coloca background no parágrafo. Se false, não coloca.
 */
function addParagraph(id, background = false) {
    let container = this.document.getElementById(id);
    if (container === undefined) {
        console.error('Não foi encontrado elemento com id ' + id);
        return false;
    }
    let paragrafo = criaParagrafo(counter + '. Parágrafo ' + String.fromCharCode(nome.charCodeAt(0) + (counter - 1)));
    container.appendChild(paragrafo);
    counter++;
    return true;
}

/**
 * Adiciona um elemento 'p' ao container do tipo 'ol' identificado por id.
 * @param {String} id id do container.
 * @param {boolean} background se true, coloca background no parágrafo. Se false, não coloca.
 */
function addParagraphToList(id, background = false) {
    let container = this.document.getElementById(id);
    if (container === undefined) {
        console.error('Não foi encontrado elemento com id ' + id);
        return false;
    }

    if (!container.nodeName.toLowerCase() === "ol") {
        console.error('Só posso adicionar a um elemento do tipo OL');
        return false;
    }

    let paragrafo = criaParagrafo('Parágrafo ' + String.fromCharCode(nome.charCodeAt(0) + (counter - 1)));
    let itemLista = document.createElement("li");
    itemLista.appendChild(paragrafo);
    container.appendChild(itemLista);
    counter++;
    return true;
}

/**
 * Cria um elemento do tipo 'p', adicionando texto e classes css.
 * @param {String} texto Texto a colocar no parágrafo.
 * @param {boolean} background se true, coloca background no parágrafo. Se false, não coloca.
 */
function criaParagrafo(texto, background = false) {
    let paragrafo = document.createElement("p");
    let comBackgroundCheckbox = document.getElementsByName('useBackground');
    let comBackground = false;
    for (let i = 0; i < comBackgroundCheckbox.length; i++) {
        if (comBackgroundCheckbox[i].checked) {
            comBackground = true;
        }
    }

    paragrafo.innerHTML = texto
    if (counter % 2 == 0) {
        paragrafo.className = 'amarelo';
        if (comBackground) {
            paragrafo.className = paragrafo.className + " back-vermelho";
        }
    } else {
        paragrafo.className = 'vermelho';
        if (comBackground) {
            paragrafo.className = paragrafo.className + " back-amarelo";
        }
    }

    return paragrafo;
}