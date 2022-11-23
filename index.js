import  { nanoid } from 'nanoid'
import  { v4 as uuidv4 } from 'uuid';
import  KSUID from 'ksuid'

const uuidExample = uuidv4();
const nanoidExample = nanoid();
const ksuidExample = KSUID.randomSync()

console.log(`uuid: ${uuidExample}`)
console.log(`nanoid: ${nanoidExample}`)
console.log(`ksuid: ${ksuidExample}`)

