// Tudo que vem após barras normais duplas é um comentário em linguagem natural.
// Leia os comentários atentamente: eles explicam o código JavaScript.

// VARIÁVEIS
// variável é um nome simbólico para um valor.
// As variáveis são declaradas com a palavra-chave var:
var x; // Declara uma variável chamada x

// Valores podem ser atribuídos às variáveis com o sinal =
x = 0; // Agora a variável x tem o valor 0
x // => 0: Uma variável é avaliada com seu valor

// JavaScript aceita vários tipos de valores
x = 1; // Números
x = 0.01; // Apenas um tipo number para inteiros e reais
x = "Hello world"; // Strings de textos entre aspas
x = 'JavaScript'; // Apóstrofos também delimitam strings
x = true; // Valores booleanos
x = false; // Outro valor booleano
x = null; // Null é um valor especial que significa "Nenhum valor"
x = undefined; // É como o null

// OBJETOS
// O tipo de dados mais importante de JavaScript é o objeto.
// Um objeto é uma coleção de pares nome/valor ou uma string para mapa de valores.
var book = { // Objetos são colocados entre chaves
    topic: "JavaScript",
    fat: true
}; // A chave marca o fim do objeto

// Acesse as propriedades de um objeto com . ou []
book.topic // => "JavaScript"
book["fat"] // => true: otro modo de acessar valores de propriedades
book.author = "Flanagan"; // Crie novas prorpriedades por meio de atribuição
book.contents = {}; // {} é um objeto vazio sem qualquer propriedade

// ARRAYS
// JavaScript também aceita arrays (listas indexadas numericamente) de valores.
var primes = [2, 3, 5, 7]; // Um array de quatro valores delimitados com [ e ]
primes[0] // => 2: o primeiro elemento (índice 0) do array
primes.length // => 4: quantidade de elementos do array
primes[primes.length - 1]; // => 7: último elemento do array
primes[4] = 9; // Adiciona um novo elemento por meio de atribuição.
primes[4] = 11; // Ou altera um elemento existente por meio de atribuição.
var empty = []; // É um array vazio sem qualquer elemento

// Os arrays e objetos podem conter outros arrays e objetos:
var points = [ // Um array com dois elementos
    { x: 0, y: 0 }, // Cada elemento é um objeto
    { x: 1, y: 1 }
];

var data = { // Um objeto com duas propriedades
    trial1: [[1,2], [3,4]], // O valor de cada propriedade é um array
    trial2: [[2,3], [4,5]] // Os elementos dos arrays são arrays
};

/*
A sintaxe ilustrada anteriormente para listar elementos de array entre chaves ou
para mapear nomes de propriedade de objeto em valores de propriedade entre 
colchetes é conhecida como expressão ini-cializadora e é apenas um dos assuntos 
do Capítulo 4, Expressões e operadores. Uma expressão é uma frase em JavaScript 
que pode ser avaliada para produzir um valor. O uso de . e [] para se referir ao
va-lor de uma propriedade de objeto ou a um elemento de array é uma expressão, 
por exemplo.
*/

// OPERADORES
// OPERADORES: ARITMÉTICOS
// Uma das maneiras mais comuns de formar expressões em JavaScript é usar
// operadores, como segue:
// Os operadores atuam sobre os valores (operandos) para produzir um novo valor.
// Os operadores aritméticos são os mais comuns:
3 + 2 // => 5: Adição
3 + 2 // => 5: Adição
3 + 2 // => 5: Adição
3 / 2 // => 1.5: Divisão
points[1].x - points[0].x // => 1: operandos mais complicados também funcionam
"3" + "2" // => 32: + soma números, ou concatena strings

// JavaScript define alguns operadores aritméticos de forma abreviada
var count = 0; // Define uma variável
count++; // Incrementa a variável
count--; // Decrementa a variável
count += 2; // Soma 2: o mesmo que count = count + 2;
count *= 3; // Multiplica por 3: o mesmo que count = count * 3;
count // => 6: nomes de variáveis também são expressões.

//OPERADORES: RELACIONAIS
// Os operadores de igualdade e relacionais testam se dois valores são iguais,
// desiguais, menores que, maiores que, etc. São avaliados como verdadeiros ou falsos.
var x = 2, y = 3; // Esses sinais = são atribuições e não testes
                  // de igualdade.
x == y // => falso: igualdade
x != y // => verdadeiro: desigualdade
x < y // => verdadeiro: menor que
x <= y // => verdadeiro: menor ou igual a
x > y // => falso: maior que
x >= y // => falso: maior ou igual a
"two" == "three" // => falso: as duas strings são diferentes
"two" > "three" // => verdadeiro: "tw" é alfabeticamente maior do que "th"
false == (x > y) // => verdadeiro: falso é igual a falso

// OPERADORES: LÓGICOS
// Os operadores lógicos combinam ou invertem valores booleanos
(x == 2) && (y == 3) // => verdadeiro: as duas comparações são verdadeiras. &&
                     // é E
(x > 3) || (y < 3) // => falso: nenhuma das comparações é verdadeira. || é OU
!(x == y) // => verdadeiro: ! inverte um valor booleano

//FUNÇÕES
// Uma função é um bloco de código JavaScript nomeado e parametrizado que você 
// define uma vez e, então, pode chamar repetidamente.
// As funções são blocos de código JavaScript parametrizados que podemos chamar.
function plus1(x) { // Define uma função chamada "plus1", com o parâmetro "x"
    return x + 1;
}; // As funções são incluídas entre chaves

plus1(y) // => 4: y é 3; portanto, essa chamada retorna 3+1
var square = function(x) { // As funções são valores e podem ser atribuídas a
                           //variáveis
    return x * x;
}; // Um ponto e vírgula marca o fim da atribuição.

square(plus1(y)); // => 16: chama duas funções em uma única expressão

// MÉTODOS
// Quando combinamos funções com objetos, obtemos métodos:
var a = []; // Cria um array vazio
a.push(1,2,3); // O método push() adiciona elementos em um array
a.reverse(); // Outro método: inverte a ordem dos elementos

// Também podemos definir nossos próprios métodos. A palavra-chave "this" se 
// refere ao objeto no qual o método é definido: neste caso, o array de pontos 
// anterior.
points.dist = function() { // Define um método para calcular a distância entre
                           // pontos
    var p1 = this[0];
    var p2 = this[1];
    var a = p2.x - p1.x;
    var b = p2.y - p1.y;

    return Math.sqrt(a*a + b*b); //Teorema de Pitágoras
                                 //Math.sqrt() calcula a raiz quadrada
};

points.dist(); // => 1.414 distância entre nossos dois pontos

// ESTRUTURAS DE CONTROLE
// As instruções JavaScript incluem condicionais e laços que usam a sintaxe
// das linguagens C, C++, Java e outras.
function abs(x) {
    if(x >= 0) { // A instrução if...
        return x; // Executa este código, se a comparação for verdadeira
    } // Fim da cláusula if 
    else { // A cláusula opcional else executa seu código se
           // a comparação for falsa
        return -x; // Chaves são opcionais quando há 1 instrução por cláusula
    };
};

function factorial(n) { // Uma função para calcular fatoriais
    var product = 1;

    while(n > 1) { // Repete as instruções que estão em {}, enquanto a
                   // expressão em () for verdadeira
        product *= n; // Atalho para product = product * n;
        n--; // Atalho para n = n – 1
    }; // Fim do laço

    return product;
};

factorial(4) // => 24: 1*4*3*2

//Outra forma de obter o mesmo resultado
function factorial2(n) {
    var i, product = 1;
    
    for(i = 2; i <= n; i++) {
        product *= i;
    };

    return product;
};

factorial2(5);