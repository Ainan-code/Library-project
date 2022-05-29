let myLibrary = [];

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}



function addBooktoLibrary () {
  let title = document.getElementById('title');
  let author = document.getElementById('author');
  let page = document.getElementById('page'); 
 
  const newBook = new Book(title.value, author.value, page.value);
  myLibrary.push(newBook)


}


let button = document.getElementById('save-button');
button.addEventListener("click", displayBook);


function displayBook() {
  // looping trough the array
  let display = document.getElementById('display')
  for (let i=0; i < myLibrary.length; i++) {
   let div = document.createElement('div')
   div.innerText = `${myLibrary[i].title} +  ${myLibrary[i].author} + ${myLibrary[i].pages}`
   display.appendChild(div)
  }
}

displayBook();
let NewBook = document.getElementById('new_book');
NewBook.addEventListener("click", addBook)

Function addBook() {
  
}