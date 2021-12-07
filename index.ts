import {add} from "./HighOrderFunc"
import {Person,makePerson,testPerson} from "./Destructuring"

console.log(add(1)(2))

const fn = add(1)
console.log(fn(2))


console.log(makePerson("jack"))
console.log(testPerson("test",13))
