var person = new Object();
console.log( person instanceof Object);
person.name="Ramki";
person.age="26";
person.place="Gudalur";
console.log(person.name,person.age,person.place);
person.greeting= function wish()
{

     console.log("Hi"+" " +person.name+ " "+"Good Mrng" );
}

person.greeting();


var num1=10;
var num2=num1;
var obj1= new Object();
var obj2=obj1;

console.log('Num1: ', num1);
console.log('Num2: ', num2);
obj1.name="Ramki";
obj1.age="26";
obj2.plc="GDR";
console.log('Obj1 ',obj1);
console.log('Obj2 ',obj2);




var employee = {
name : 'ramki',
age : 27,
place :'CBE'
}

console.log("Obj3 " ,employee);

var employee1={};

Object.defineProperty(employee1,'name',{
     configurable:true,
     enumerable:true,
     writable:true,
     value:'Ramki'
});

employee1.name="Geetha";

console.log("Obj4 ", employee1.name);