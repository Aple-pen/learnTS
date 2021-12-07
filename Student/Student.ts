interface studentInterface {
    className : string,
    studentNumber : number
}

export class Student{
    private readonly className : string;
    private readonly studentNumber : number
    constructor(className : string,studentNumber : number) {
        this.className = className;
        this.studentNumber = studentNumber;
    }

    get getStudent(){
        return {className : this.className, studentNumber : this.studentNumber}
    }
}


