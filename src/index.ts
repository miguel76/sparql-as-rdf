import { translate } from 'sparqlalgebrajs-input';

import * as jsonld from 'jsonld';

export async function SPARQLtoJsonLd(sparqlString: String) {
    const algebra = translate(sparqlString);
    return algebra;
}

export function SPARQLtoRDF() {

}

export function RDFtoSPARQL() {

}



