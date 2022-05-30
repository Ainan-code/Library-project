
const openModal = document.querySelector('.open-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-button');


openModal.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});


let myLibrary = [];

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}
let NewBook = document.getElementById('new_book');







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

//displayBook();




