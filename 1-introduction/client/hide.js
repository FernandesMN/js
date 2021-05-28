function hide(e, reflow) { // Oculta o elemento e faz script de seu estilo
    if(reflow) {
        e.style.display = "none"; // oculta o elemento e utiliza seu espaço
    } else {
        e.style.visibility = "hidden"; // torna-o invisível, mas deixa seu espaço
    };
};

function highlight(e) { // Destaca e, definindo uma classe CSS
    // Basta definir ou anexar no atributo da classe HTML.
    // Isso presume que uma folha de estilos CSS já define a classe "hilite"
    if(!e.className) e.className = "hilite"
    else e.className += "hilite";
};

/*
JavaScript nos permite fazer scripts do conteúdo HTML e da apresentação CSS 
de documentos em navegadores Web, mas também nos permite definir o comportamento
desses documentos com rotinas de tratamento de evento. Uma rotina de tratamento
de evento é uma função JavaScript que registramos no navegador e que este 
chama quando ocorre algum tipo de evento especificado. O evento de interesse 
pode ser um clique de mouse ou um pressionamento de tecla (ou, em um smartphone,
pode ser um gesto de algum tipo, feito com dois dedos). Ou então, uma rotina de 
tratamento de evento pode ser ativada quando o navegador termina de carregar 
um documento, quando o usuário redimensiona a janela do navegador ou quando o 
usuário insere dados em um elemento de formulário HTML.

O modo mais simples de definir rotinas de tratamento de evento é com atributos 
HTML que co-meçam com “on”.
*/