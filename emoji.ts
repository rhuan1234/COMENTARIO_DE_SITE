class Emoji implements Componente{
    protected tipo: string;
    constructor(tipo: string){
        this.tipo = tipo
    }
    desenhar(pai: Element): void {
        const artigo=document.createElement('article')
        artigo.classList.add("emoji");
        if(this.tipo == 'coracao'){
        artigo.innerHTML = '&#10084;&#65039;&#65039;'
        }
        else if(this.tipo == 'like'){
            artigo.innerHTML = '&#128077'
        }
        else
             artigo.innerHTML = '&#128078'

        const primeiroIrmagoArtigo=pai.querySelector('article');
        if(primeiroIrmagoArtigo==null)
            pai.appendChild(artigo)
        else
            pai.insertBefore(artigo, primeiroIrmagoArtigo);
    }
}