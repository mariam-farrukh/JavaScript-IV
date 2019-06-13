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

class Student extends Person{
    constructor(stuAttributes){
        super(stuAttributes);
        this.previousBackground=stuAttributes.previousBackground;
        this.className=stuAttributes.className;
        this.favSubjects=stuAttributes.favSubjects;
    }
    listsSubjects(){
        return this.favSubjects;
    }
    PRAssignment(){
        return `{this.name} has submitted a PR for {subject}`;
    }
    sprintChalenge(){
        return `{this.name} has begun sprint challenge on {subject}`
    }
}

class ProjectManager extends Instructor{
    constructor(pmAttributes){
        super(pmAttributes);
        this.gradClassName=pmAttributes.gradClassName;
        this.favInstructor=pmAttributes.favInstructor;
    }
    standUp(){
        return `${this.name} announces to ${channel}, @channel standup time!`
    }
    debugsCode(){
        return `${this.name} debugs ${stuAttributes.name}'s code on {subject}`
    }
}

/* objects for each class here*/

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const pat = new Instructor({
    name: 'Pat',
    location: 'Chicago',
    age: 42,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });


  const bob = new Student({
    name: 'Bob',
    location: 'Seattle',
    age: 30,
    previousBackground: 'Sales',
    className: 'Web22',
    favSubjects: [
        'HTML/CSS',
        'JavaScript',
      ],
  });

  const tina = new Student({
    name: 'Tina',
    location: 'Boston',
    age: 28,
    previousBackground: 'Pilot',
    className: 'Web20',
    favSubjects: [
        'HTML',
        'CSS',
        'Python',
        'JavaScript',
      ],
  });


  