onload = function(){
    const botao=document.getElementById('btAdicionar')!;
    botao.onclick=function(){
        const c=new Comentario((<HTMLInputElement> document.getElementById('titulo')).value,
            (<HTMLInputElement> document.getElementById('descricao')).value
        );
        const d=new InformaData();
        mostrarDentroDaSessao(c);
        mostrarDentroDaSessao(d);
    }
    const coracao= document.getElementById('coracao')!
    coracao.onclick=function(){
        const e= new Emoji('coracao')
        mostrarDentroDaSessao(e)
    }
    const like= document.getElementById('like')!
    like.onclick=function(){
        const e= new Emoji('like')
        mostrarDentroDaSessao(e)
    }
    const deslike= document.getElementById('deslike')!
   deslike.onclick=function(){
        const e= new Emoji('deslike')
        mostrarDentroDaSessao(e)
    }
}
function mostrarDentroDaSessao(c:Componente){
    const sessao=document.getElementById('comentarios')!;
    c.desenhar(sessao);
}