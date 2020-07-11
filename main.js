 const element1 = document.getElementById("main1");
 console.log(element1);
 element1.textContent = "Div one"

 const element2 = document.getElementById("main2");
 console.log(element2);
 element2.textContent = "Div two"

 const element3 = document.getElementById("main3");
 console.log(element3);
 element3.textContent = "Div three"


 var button = document.getElementById("app")
 count = 0;
 app.addEventListener("click", function() {
     console.log("clicked")
     count += 1;
     button.innerHTML = "Click me " + count;
 })