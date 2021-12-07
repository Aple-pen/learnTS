export interface studentInterface {
    className : string,
    studentNumber : number
}

export class Student{
    private className : string;
    private studentNumber : number
    constructor(className : string,studentNumber : number) {
        this.className = className;
        this.studentNumber = studentNumber;
    }

    get getStudent(){
        return {className : this.className, studentNumber : this.studentNumber}
    }

    set setStudent(value : studentInterface){
        const {className,studentNumber} = value
        this.className = className;
        this.studentNumber = studentNumber
    }
}


