import {Term} from "rdf-js";
import {Util} from "jsonld-streaming-serializer";
import {ContextParser} from "jsonld-context-parser";
import { Algebra } from 'sparqlalgebrajs-input';

const ctxtParser = new ContextParser();

export async function translateTerms(operation: Algebra.Operation): Promise<Algebra.Operation> {
    const ctxt = await ctxtParser.parse({});
    function translateObj(obj: any): any {
        if (typeof obj !== 'object' || obj === null) {
            return obj;
        }
        if (Array.isArray(obj)) {
            console.log('array');
            return obj.map(i => translateObj(i));
        }
        if (obj.termType && obj.termType !== 'Quad' && obj.termType !== 'Variable' && obj.termType !== 'DefaultGraph') {
            console.log('term');
            return Util.termToValue(obj, ctxt);
        } 
        return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, translateObj(v)]));
    }
    return translateObj(operation);
}