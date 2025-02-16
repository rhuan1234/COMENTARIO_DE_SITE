class Comentario implements Componente{
    private titulo:string;
    private descricao: string;

    constructor (titulo:string, descricao:string){
        this.titulo = titulo;
        this.descricao = descricao;
    }

    desenhar(pai: Element): void {
        const artigo=document.createElement('article');
        const titulo2=document.createElement('h2');
        const par=document.createElement('p');

        const noTexto=document.createTextNode(this.titulo)
        titulo2.appendChild(noTexto)

        par.textContent=this.descricao
        artigo.appendChild(titulo2)
        artigo.appendChild(par)
        artigo.classList.add("comentario");

        const primeiroIrmagoArtigo=pai.querySelector('article')
        if(primeiroIrmagoArtigo==null){
            pai.appendChild(artigo)
        }
        else
            pai.insertBefore(artigo, primeiroIrmagoArtigo);
    }
}