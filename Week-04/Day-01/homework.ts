class Person{
    public name: string;
    public age: number;
    public gender: string;

    constructor(name: string, age: number, gender: string){
        this.age = age;
        this.gender = gender;
        this.name = name;
    };
    


    public introduce(){
        return 'Hi, im '+ this.name+',a '+this.age+' year old '+this.gender+'.'
    };

    public getGoal(){
        return 'My goal is: Live for the moment!'
    };
};

class Student{
    public name: string;
    public age: number;
    public gender: string;
    public previousOrganization: string;
    public skippedDays: number;

    constructor(name: string, age: number, gender: string, prevOrg: string){
        this.age = age;
        this.gender = gender;
        this.name = name;
        this.previousOrganization = prevOrg;
        this.skippedDays = 0;
    };
    
    public introduce(){
        return 'Hi, im '+ this.name+',a '+this.age+' year old '+this.gender+' from '+this.previousOrganization+' who skipped '+this.skippedDays+' days from the course already.'
    };

    public getGoal(){
        return 'Be a junior software developer'
    };

    public set skipDays(numberOfDays){
        this.skippedDays += numberOfDays;
    };
};

class Mentor{
    public name: string;
    public age: number;
    public gender: string;
    public level: string;

    constructor(name: string, age: number, gender: string, level: string){
        this.age = age;
        this.gender = gender;
        this.name = name;
        this.level = level;
    };
    
    public getGoal(){
        return 'Educate brilliant junior software developers.'
    };

    public introduce(){
        return 'Hi im '+this.name+' a '+this.name+' year old '+this.gender+' '+this.level+' mentor.'
    };



};

class Sponsor{
    public name: string;
    public age: number;
    public gender: string;
    public company: string;
    public hiredStudents: number;

    constructor(name: string, age: number, gender: string, company: string){
        this.age = age;
        this.gender = gender;
        this.name = name;
        this.hiredStudents = 0;
        this.company = company;
    };
    
    public hire(){
        this.hiredStudents++;
    };

    public getGoal(){
        return 'Hire brillian junior software developers.'
    };

    public introduce(){
        return 'Hi im '+this.name+' a '+this.name+' year old '+this.gender+' who represents '+this.company+' and hired '+this.hiredStudents+' students so far.'
    }

};

let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
// let jane = new Person();
// people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
// let student = new Student();
// people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
// let mentor = new Mentor();
// people.push(mentor);
// let sponsor = new Sponsor();
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

// student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
//   sponsor.hire();
}

people.forEach((person) => {
  person.introduce();
  person.getGoal();
});