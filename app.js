submitBtn = document.querySelector('#submit');
warning = document.querySelector('#warning');
libraryTable = document.querySelector('#library-table')

let myLibrary = [];


//Book object consturctor
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
}

function addToTable() {
    for (let i = 0; i < myLibrary.length; i++) {
        newRow = document.createElement('tr');
        libraryTable.appendChild(newRow).classList.add('library-row');
    
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
            newReadStatus.innerText = 'Read';
        }
        else{ 
            newReadStatus.innerText = 'Unread';
        }
        newRow.appendChild(newReadStatus).classList.add('library-data');
    }
}

submitBtn.addEventListener('click', addBookToLibrary)