// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
        //props
        this.name=attributes.name;
        this.age=attributes.age;
        this.location=attributes.location;
    }
    //Methods
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person{
    constructor(instAttributes){
        super(instAttributes);
        this.specialty=instAttributes.specialty;
        this.favLanguage=instAttributes.favLanguage;
        this.catchPhrase=instAttributes.catchPhrase;
    }
    demo(){
        return `Today we are learning about {subject}.`;
    }
    grade(){
        return `{student.name} receives a perfect score on {subject}`;
    }
}