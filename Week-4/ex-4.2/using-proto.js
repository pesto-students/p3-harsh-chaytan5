let Person = function () { };

Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}

// create class teacher and method teach

function Teacher(name) {
    Person.call(this, name);
}

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

Teacher.prototype.teach = function (subject) {
    console.log(`${this.name} is now teaching ${subject}`);
}


let him = new Teacher();

him.initialize('Adam', 45);
him.teach('inheritance')
// [teacher's name]is now teaching[subject]