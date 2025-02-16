"use strict";
onload = function () {
    const botao = document.getElementById('btAdicionar');
    botao.onclick = function () {
        const c = new Comentario(document.getElementById('titulo').value, document.getElementById('descricao').value);
        const d = new InformaData();
        mostrarDentroDaSessao(c);
        mostrarDentroDaSessao(d);
    };
    const coracao = document.getElementById('coracao');
    coracao.onclick = function () {
        const e = new Emoji('coracao');
        mostrarDentroDaSessao(e);
    };
    const like = document.getElementById('like');
    like.onclick = function () {
        const e = new Emoji('like');
        mostrarDentroDaSessao(e);
    };
    const deslike = document.getElementById('deslike');
    deslike.onclick = function () {
        const e = new Emoji('deslike');
        mostrarDentroDaSessao(e);
    };
};
function mostrarDentroDaSessao(c) {
    const sessao = document.getElementById('comentarios');
    c.desenhar(sessao);
}
class InformaData {
    desenhar(pai) {
        const artigo = document.createElement('article');
        artigo.classList.add("informadata");
        const data = new Date();
        artigo.innerHTML = `<p>Dia: ${data.toLocaleDateString()}<br>Hora: ${data.toLocaleTimeString()}</p>`;
        const primeiroIrmagoArtigo = pai.querySelector('article');
        if (primeiroIrmagoArtigo == null)
            pai.appendChild(artigo);
        else
            pai.insertBefore(artigo, primeiroIrmagoArtigo);
    }
}
class Comentario {
    constructor(titulo, descricao) {
        this.titulo = titulo;
        this.descricao = descricao;
    }
    desenhar(pai) {
        const artigo = document.createElement('article');
        const titulo2 = document.createElement('h2');
        const par = document.createElement('p');
        const noTexto = document.createTextNode(this.titulo);
        titulo2.appendChild(noTexto);
        par.textContent = this.descricao;
        artigo.appendChild(titulo2);
        artigo.appendChild(par);
        artigo.classList.add("comentario");
        const primeiroIrmagoArtigo = pai.querySelector('article');
        if (primeiroIrmagoArtigo == null) {
            pai.appendChild(artigo);
        }
        else
            pai.insertBefore(artigo, primeiroIrmagoArtigo);
    }
}
class Emoji {
    constructor(tipo) {
        this.tipo = tipo;
    }
    desenhar(pai) {
        const artigo = document.createElement('article');
        artigo.classList.add("emoji");
        if (this.tipo == 'coracao') {
            artigo.innerHTML = '&#10084;&#65039;&#65039;';
        }
        else if (this.tipo == 'like') {
            artigo.innerHTML = '&#128077';
        }
        else
            artigo.innerHTML = '&#128078';
        const primeiroIrmagoArtigo = pai.querySelector('article');
        if (primeiroIrmagoArtigo == null)
            pai.appendChild(artigo);
        else
            pai.insertBefore(artigo, primeiroIrmagoArtigo);
    }
}
