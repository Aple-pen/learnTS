export type Person = {
    name : string,
    age : number
}

export const makePerson = (name:string,age :number = 10): Person =>({name,age})
export const testPerson = (name:string,age:number) =>({name,age})
