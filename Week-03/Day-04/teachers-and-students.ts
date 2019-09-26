// Create Student and Teacher classes
// Student
// learn() -> prints the student is learning something new
// question(teacher) -> calls the teachers answer method
// Teacher
// teach(student) -> calls the students learn method
// answer() -> prints the teacher is answering a question
// Instantiate a Student and Teacher object
// Call the student's question() method and the teacher's teach() method

class Student {
    public _name: string;
    constructor(name) {
        this._name = name;
    };
    learn() {
        return console.log('the student, '+ this._name +' is learning something new');
    };
    question(Teacher) {
        return Teacher.answer();
    };

}

class Teacher {

    public _name: string;
    constructor(name) {
        this._name = name;
    };
    teach(Student) {
        return Student.learn();
    };
    answer() {
        return console.log('the teacher, '+ this._name+' is answering a question');
    };
}

let teacher = new Teacher('Tibi bacsi');
let student = new Student('Karcsika');

teacher.teach(student);
student.question(teacher);