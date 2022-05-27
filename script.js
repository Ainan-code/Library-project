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

