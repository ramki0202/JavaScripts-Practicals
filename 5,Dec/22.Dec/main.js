const docs = [{
    id: "FgrbV2NTp72ie6xj",
    name: "Joe"
  }, {
    id: "agfadsfasdfq23",
    name: "Fred"
  }];
  
  docs.forEach(function(d) {
    document.getElementById('result').innerHTML += `<li onclick="insert('${d.id}')">${d.name}</li>`
  });
  
  function insert(id) {
    alert(id + " Inserted")
  }