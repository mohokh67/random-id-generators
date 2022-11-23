import  { nanoid, customAlphabet } from 'nanoid'


const customNanoid = customAlphabet('123abcdef', 10)
const nanoidExample = nanoid();

console.log(`nanoid: ${nanoidExample}`)
console.log(`nanoid with 10 chars length: ${ nanoid(10)}`)

console.log(customNanoid())

