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
    demo(subject){
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
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
        return `${this.favSubjects}`;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManager extends Instructor{
    constructor(pmAttributes){
        super(pmAttributes);
        this.gradClassName=pmAttributes.gradClassName;
        this.favInstructor=pmAttributes.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standup time!`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
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
    specialty: 'Back-end',
    catchPhrase: `What are those!`
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


  const mia = new ProjectManager({
    name: 'Mia',
    location: 'St. Louis',
    age: 24,
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `You got this!`,
    gradClassName: 'Web17',
    favInstructor: 'Fred',
  });
  
  const mike = new ProjectManager({
    name: 'Mike',
    location: 'New York',
    age: 28,
    favLanguage: 'HTML/CSS',
    specialty: 'Front-end',
    catchPhrase: `Study hard, don't hardly study`,
    gradClassName: 'Web16',
    favInstructor: 'Pat',
  });

  console.log(fred.name); //Fred
  console.log(pat.catchPhrase); //What are those!
  console.log(pat.demo()); //Today we are learning about {subject}.
  console.log(fred.grade(bob, 'js4')); //{student.name} receives a perfect score on {subject}
  console.log(mike.speak()); //Hello my name is {this.name}, I am from {this.location}
  console.log(bob.listsSubjects());
  console.log(tina.PRAssignment('JS3')); //{this.name} has submitted a PR for {subject}
  console.log(bob.sprintChallenge('JS week1')); //{this.name} has begun sprint challenge on {subject}
  console.log(tina.favSubjects);
  console.log(mia.gradClassName);
  console.log(mia.standUp('Best Group Ever')); //{this.name} announces to {channel}, @channel standup time!
  console.log(mike.favInstructor); //Pat
  console.log(mike.debugsCode(tina, 'JS2')); //{this.name} debugs {student.name}'s code on {subject}
