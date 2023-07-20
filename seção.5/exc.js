// criar um objeto de endereço com 3 propriedades (rua, cidade e cp) e mostrar todo o objeto em uma função

let address = {
    rua: 'a',
    cidade: 'b',
    zipCode: 'c'
};

function showAddress(address) {
    for (let key in address)
      console.log(key, address[key]);
}

showAddress(address);




//inicializar um objeto de endereço usando a função de fabrica e depois usando a função de contrutor

//fabrica
let endereco = createaddress('a', 'b', 'c');
console.log(endereco);

function createaddress(rua, cidade, zip) {
    return {
        rua,
        cidade,
        zip
    };
}

//construtora
let endereco1 = new Address('a', 'b', 'c');

console.log(endereco1);

function Address(rua, cidade, zip) {
    this.rua  = rua;
    this.cidade = cidade;
    this.zip = zip;
} 



//função para retornar true or false caso os objetos sejam iguais e função para se os endereços apontam para o mesmo objeto 
let endereco2 = new Address('a', 'b', 'c');

function areEqual(endereco1, endereco2) {
    return endereco1.rua === endereco2.rua &&
    endereco1.cidade === endereco2.cidade &&
    endereco1.zip === endereco2.zip;
}

function areSame(endereco1, endereco2) {
    return endereco1 === endereco2;
}

console.log(areEqual(endereco1, endereco2));
console.log(areSame(endereco1, endereco2));



//sintaxe e inicializar 

let post = {
    tittle: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        {author: 'a', body: 'b'},
        {author: 'c', body: 'd'},
    ],
    isLive: true
};

console.log(post);



//função para sinalizar uma postagem 'rascunho'

let post1 = new Post('a', 'b', 'c');
console.log(post1);

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}



//matriz de objetos com faixas de preço

let priceRanges = [
    { label: '$', tooltip: 'inexpensive', minPerPerson: 0, maxPerPerson: 10 },
    { label: '$$', tooltip: 'moderate', minPerPerson: 11, maxPerPerson: 20 },
    { label: '$$$', tooltip: 'expensive', minPerPerson: 21, maxPerPerson: 50 }
];

let restaurants = [
    { averagePerPerson: 5 }
];
