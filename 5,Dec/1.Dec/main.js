var person = new Object();
console.log( person instanceof Object);
person.name="Ramki";
person.age="26";
person.place="Gudalur";
console.log(person.name,person.age,person.place);
person.greeting= function wish()
{

     console.log("Hi"+" " + person.name + " "+"Good Mrng" );
}

person.greeting();