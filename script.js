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
  myLibrary.push(title.value);
  myLibrary.push(author.value);
  myLibrary.push(page.value)

}

function displayBook() {
  // looping trough the array
  myLibrary.forEach((item)=>{
    let display = document.getElementById('display');
    let li = document.createElement("div");
    li.innerText = item;
    display.append(li);
  })
}

displayBook();