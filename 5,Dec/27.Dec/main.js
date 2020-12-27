function display(n,a){
    this.name=n;
    this.age=a;
    }
    var s1 = new display("ramki",26);
    document.getElementById("demo").innerHTML= "Person Name : " +s1.name + "<br> Person Age IS : " +s1.age;