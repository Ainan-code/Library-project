
const openModal = document.querySelector('#addBook');
const modal = document.querySelector('#popupForm');
const closeModal = document.querySelector('.cancelBtn');
let submitBtn = document.getElementById('submitBtn');
let title = document.getElementById('title');
let author = document.getElementById('author');
let page = document.getElementById('page');
let display = document.getElementById('display');

let myLibrary = [];

openModal.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});




function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}







submitBtn.addEventListener("click", addBooktoLibrary);


function addBooktoLibrary () {
  
 
  const newBook = new Book(title.value, author.value, page.value);
  myLibrary.push(newBook);
  modal.style.display = "none";


}





submitBtn.addEventListener("click", displayBook); 


 
function displayBook() {
  // looping trough the array
  
  for (let i=0; i < myLibrary.length; i++) {
   let div = document.createElement('div')
   div.setAttribute('id', i)
   let remove = document.createElement('button')
   remove.innerText = "Remove"
   remove.setAttribute("id", "removeBtn")
  

   div.innerText = `Title: ${myLibrary[i].title}  
  Author: ${myLibrary[i].author}  
  Pages:  ${myLibrary[i].pages}`
   div.appendChild(remove)
   display.appendChild(div)

   remove.addEventListener("click", () => {
      
    myLibrary.splice(i, 1)
    display.removeChild(div)

 })
 
}
} 






