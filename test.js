const main = require('./dist/index.js');

main.SPARQLtoJsonLd('SELECT * WHERE { ?x <http://ex.org/pred> ?z, "pluto", 42 }').then((result) => {
    console.log(JSON.stringify(result, null, 2));
});