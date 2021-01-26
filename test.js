const main = require('./index.js');

main.SPARQLtoJsonLd('SELECT * WHERE { ?x ?y ?z }').then((result) => {
    console.log(result);
});