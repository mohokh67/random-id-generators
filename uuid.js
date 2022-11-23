import  { v4 as uuidv4, NIL as NIL_UUID, parse, validate as uuidValidate } from 'uuid';

const uuidExample = uuidv4();
const bytes = parse('6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b');

console.log(`uuid: ${uuidExample}`)
console.log(`place holder: ${NIL_UUID}`)
console.log(`Parse result: ${bytes}`)

console.log(`is "not a UUID" a valid uuid: ${uuidValidate('not a UUID')}`);
console.log(`valid UUID: ${uuidValidate('6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b')}`);
