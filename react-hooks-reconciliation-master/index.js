// ul in the DOM, using innterHTML will work:
ul.innerHTML += "<li>A final list item</li>";

//Bur this reubuilds the entire DOM inside div. On the other hand, using append would not cause a rebuild:
// ul in the DOM, using append will work:
let li = document.createElement("li");
li.textContent = "A final list ietm";
ul.append(li);


