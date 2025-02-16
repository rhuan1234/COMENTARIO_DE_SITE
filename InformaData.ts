class InformaData implements Componente{

    desenhar(pai: Element): void {
        const artigo=document.createElement('article')
        artigo.classList.add("informadata");
        const data=new Date();
        artigo.innerHTML=`<p>Dia: ${data.toLocaleDateString()}<br>Hora: ${data.toLocaleTimeString()}</p>`;

        const primeiroIrmagoArtigo=pai.querySelector('article');
        if(primeiroIrmagoArtigo==null)
            pai.appendChild(artigo)
        else
            pai.insertBefore(artigo, primeiroIrmagoArtigo);
    }
}