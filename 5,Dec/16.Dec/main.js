var test=document.createElement('section');
test.setAttribute('id','test');

var ul=document.createElement('ul');


document.body.appendChild(test);
test.appendChild(ul);

for (var i=0; i<array.length; i++){

    var li=document.createElement('li');

    ul.appendChild(li);
    li.innerHTML=li.innerHTML + array[i];

}