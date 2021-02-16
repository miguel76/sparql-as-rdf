import {translate} from 'sparqlalgebrajs-input';
import {translateTerms} from './rdfJsToJsonLd';

import * as jsonld from 'jsonld';

export async function SPARQLtoJsonLd(sparqlString: String) {
    const algebra = translate(sparqlString);
    const algebraWithJsonLdTerms = await translateTerms(algebra);
    return algebraWithJsonLdTerms;
}

export function SPARQLtoRDF() {

}

export function RDFtoSPARQL() {

}



