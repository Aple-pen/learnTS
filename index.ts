import {Student} from "./Student/Student"

let student1 = new Student("국문학과",123123)

let student2 = new Student("실용음악과",132312)

student2.setStudent = {className : "test",studentNumber : 123123}
console.log(student1.getStudent)
console.log(student2.getStudent)
