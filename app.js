submitBtn = document.querySelector('#submit');
warning = document.querySelector('#warning');
libraryTable = document.querySelector('#library-table');
libraryTableBody = document.querySelector('#library-table-body');
formBtn = document.querySelector('#form-btn');
form = document.querySelector('#form');
readStatusBtn = document.querySelector('.readStatusToggle');

let myLibrary = [];

//Book object constructor
function Book() {
    this.title = form.title.value
    this.author = form.author.value
    this.pages = form.pages.value
    this.readStatus = form.readStatus.checked
}

//If all inputs are filled in on form a new instance of Book is created and pushed to myLibrary array
//Form does not submit
function addBookToLibrary() {
    let newBook;
    event.preventDefault();
    if (form.title.value != '' && form.author.value !='' && form.pages.value > 0) {
        warning.innerText = ''
        newBook = new Book();
        myLibrary.push(newBook);
        form.reset();
        addToTable();
    }
    else {
        warning.innerText = "*Please provide all of the information about the book"
    }
    form.style.display = 'none';
}

//Adds new row to table with book info
function addToTable() {
    let i = myLibrary.length - 1;

    newRow = document.createElement('tr');
    libraryTableBody.appendChild(newRow).classList.add('library-row');

    newTitle = document.createElement('td');
    newTitle.innerText = myLibrary[i].title;
    newRow.appendChild(newTitle).classList.add('library-data');

    newAuthor = document.createElement('td');
    newAuthor.innerText = myLibrary[i].author;
    newRow.appendChild(newAuthor).classList.add('library-data');

    newPages = document.createElement('td');
    newPages.innerText = myLibrary[i].pages;
    newRow.appendChild(newPages).classList.add('library-data');

    newReadStatus = document.createElement('td');
    if (myLibrary[i].readStatus == true) {
        newReadStatus.innerHTML = '<button class="readStatusToggle">Read</button>';
    }
    else { 
        newReadStatus.innerHTML = '<button class="readStatusToggle">Unread</button>';
    }
    newRow.appendChild(newReadStatus).classList.add('library-data');

    deleteBookHolder = document.createElement('td');
    newRow.appendChild(deleteBookHolder).classList.add('library-data');
    deleteBookBtn = document.createElement('button');
    deleteBookBtn.innerText = "Delete Book";
    deleteBookHolder.appendChild(deleteBookBtn).classList.add('delete-book-btn');
}

//Switches form display from none to block
function showForm() {
    form.style.display = 'block';
}

//Deletes row that delete button is contained in
function deleteBook(el) {
    if (el.classList.contains('delete-book-btn')) {
        el.parentElement.parentElement.remove();
    }
}

//Toggle read status
function toggleReadStatus(el) {
   if (el.classList.contains('readStatusToggle')) {
        if (el.innerText == 'Read') {
            el.innerText = 'Unread';
        }
        else {
            el.innerText = 'Read';
        }
   }
}

submitBtn.addEventListener('click', addBookToLibrary)

formBtn.addEventListener('click', showForm)

libraryTableBody.addEventListener('click', (e) => {
    deleteBook(e.target)
})

libraryTableBody.addEventListener('click', (e) => {
    toggleReadStatus(e.target)
})