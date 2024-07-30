const Func = require('./cjsExportModules');
const {subtract:sub, div} = require('./cjsExportModules')

const {Person} = require('./person')


console.log(`the output of add is: ${Func.add(2,5)} used only the basic method`)

console.log(`the output of subtract is: ${sub(5,3)} used only the object method`)

console.log(`the div output ${div(4,2)}`)


const user = new Person('Ajay', 20);

console.log(`The name of the person is ${user.personName}`)
console.log(`The age of a person is ${user.personAge}`)



